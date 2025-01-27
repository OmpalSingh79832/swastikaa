const authOrderModel = require("../../models/authOrder");
const customerOrder = require("../../models/customerOrder");
const cardModel = require("../../models/cardModel");
const myShopWallet = require("../../models/myShopWallet");
const sellerWallet = require("../../models/sellerWallet");
const uniqid = require("uniqid");
const sha256 = require("sha256");
const axios = require("axios");
const Crypto = require("crypto");

const {
  mongo: { ObjectId },
} = require("mongoose");
const { responseReturn } = require("../../utiles/response");

const moment = require("moment");
const customerModel = require("../../models/customerModel");
const stripe = require("stripe")(
  "sk_test_51Nk8Y4F0B89ncn3xMHxYCwnaouDR6zuX83ckbJivv2jOUJ9CTka6anJcKMLnatgeBUeQq1RcRYynSPgp6f5zS4qF00YZFMYHuD"
);

const PHONEPE_MERCHANT_ID = "M22N4GKMZB1A8";
const PHONEPE_SALT_KEY = "e61db344-a858-4d00-8290-12e12704d258";
const PHONEPE_SALT_INDEX = 1;
const BASE_URL = "https://api.phonepe.com/apis/hermes"; // Use sandbox URL for testing: https://sandbox-api.phonepe.com/apis/hermes

class orderController {
  paymentCheck = async (id) => {
    try {
      const order = await customerOrder.findById(id);
      if (order.payment_status === "unpaid") {
        await customerOrder.findByIdAndUpdate(id, {
          delivery_status: "cancelled",
        });
        await authOrderModel.updateMany(
          {
            orderId: id,
          },
          {
            delivery_status: "cancelled",
          }
        );
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  place_order = async (req, res) => {
    const { price, products, shipping_fee, shippingInfo, userId } = req.body;
    let authorOrderData = [];
    let cardId = [];
    const tempDate = moment(Date.now()).format("LLL");

    let customerOrderProduct = [];

    for (let i = 0; i < products.length; i++) {
      const pro = products[i].products;
      for (let j = 0; j < pro.length; j++) {
        let tempCusPro = pro[j].productInfo;
        tempCusPro.quantity = pro[j].quantity;
        customerOrderProduct.push(tempCusPro);
        if (pro[j]._id) {
          cardId.push(pro[j]._id);
        }
      }
    }

    try {
      const order = await customerOrder.create({
        customerId: userId,
        shippingInfo,
        products: customerOrderProduct,
        price: price + shipping_fee,
        delivery_status: "pending",
        payment_status: "unpaid",
        date: tempDate,
      });
      for (let i = 0; i < products.length; i++) {
        const pro = products[i].products;
        const pri = products[i].price;
        const sellerId = products[i].sellerId;
        let storePro = [];
        for (let j = 0; j < pro.length; j++) {
          let tempPro = pro[j].productInfo;
          tempPro.quantity = pro[j].quantity;
          storePro.push(tempPro);
        }

        authorOrderData.push({
          orderId: order.id,
          sellerId,
          products: storePro,
          price: price + shipping_fee,
          payment_status: "unpaid",
          shippingInfo,
          delivery_status: "pending",
          date: tempDate,
        });
      }
      await authOrderModel.insertMany(authorOrderData);
      for (let k = 0; k < cardId.length; k++) {
        await cardModel.findByIdAndDelete(cardId[k]);
      }
      setTimeout(() => {
        this.paymentCheck(order.id);
      }, 15000);
      responseReturn(res, 201, {
        message: "order placeed success",
        orderId: order.id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  get_customer_databorad_data = async (req, res) => {
    const { userId } = req.params;

    try {
      const recentOrders = await customerOrder
        .find({
          customerId: new ObjectId(userId),
        })
        .limit(5);
      const pendingOrder = await customerOrder
        .find({
          customerId: new ObjectId(userId),
          delivery_status: "pending",
        })
        .countDocuments();
      const totalOrder = await customerOrder
        .find({
          customerId: new ObjectId(userId),
        })
        .countDocuments();
      const cancelledOrder = await customerOrder
        .find({
          customerId: new ObjectId(userId),
          delivery_status: "cancelled",
        })
        .countDocuments();
      responseReturn(res, 200, {
        recentOrders,
        pendingOrder,
        cancelledOrder,
        totalOrder,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  get_orders = async (req, res) => {
    const { customerId, status } = req.params;

    try {
      let orders = [];
      if (status !== "all") {
        orders = await customerOrder.find({
          customerId: new ObjectId(customerId),
          delivery_status: status,
        });
      } else {
        orders = await customerOrder.find({
          customerId: new ObjectId(customerId),
        });
      }
      responseReturn(res, 200, {
        orders,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  get_order = async (req, res) => {
    const { orderId } = req.params;

    try {
      const order = await customerOrder.findById(orderId);
      responseReturn(res, 200, {
        order,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  get_admin_orders = async (req, res) => {
    let { page, parPage, searchValue } = req.query;
    page = parseInt(page);
    parPage = parseInt(parPage);

    const skipPage = parPage * (page - 1);

    try {
      if (searchValue) {
      } else {
        const orders = await customerOrder
          .aggregate([
            {
              $lookup: {
                from: "authororders",
                localField: "_id",
                foreignField: "orderId",
                as: "suborder",
              },
            },
          ])
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });

        const totalOrder = await customerOrder.aggregate([
          {
            $lookup: {
              from: "authororders",
              localField: "_id",
              foreignField: "orderId",
              as: "suborder",
            },
          },
        ]);

        responseReturn(res, 200, { orders, totalOrder: totalOrder.length });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  get_admin_order = async (req, res) => {
    const { orderId } = req.params;

    try {
      const order = await customerOrder.aggregate([
        {
          $match: { _id: new ObjectId(orderId) },
        },
        {
          $lookup: {
            from: "authororders",
            localField: "_id",
            foreignField: "orderId",
            as: "suborder",
          },
        },
      ]);
      responseReturn(res, 200, { order: order[0] });
    } catch (error) {
      console.log("get admin order " + error.message);
    }
  };

  admin_order_status_update = async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
      await customerOrder.findByIdAndUpdate(orderId, {
        delivery_status: status,
      });
      responseReturn(res, 200, { message: "order status change success" });
    } catch (error) {
      console.log("get admin order status error " + error.message);
      responseReturn(res, 500, { message: "internal server error" });
    }
  };

  get_seller_orders = async (req, res) => {
    const { sellerId } = req.params;
    let { page, parPage, searchValue } = req.query;
    page = parseInt(page);
    parPage = parseInt(parPage);

    const skipPage = parPage * (page - 1);

    try {
      if (searchValue) {
      } else {
        const orders = await authOrderModel
          .find({
            sellerId,
          })
          .skip(skipPage)
          .limit(parPage)
          .sort({ createdAt: -1 });
        const totalOrder = await authOrderModel
          .find({
            sellerId,
          })
          .countDocuments();
        responseReturn(res, 200, { orders, totalOrder });
      }
    } catch (error) {
      console.log("get seller order error " + error.message);
      responseReturn(res, 500, { message: "internal server error" });
    }
  };

  get_seller_order = async (req, res) => {
    const { orderId } = req.params;

    try {
      const order = await authOrderModel.findById(orderId);

      responseReturn(res, 200, { order });
    } catch (error) {
      console.log("get admin order " + error.message);
    }
  };

  seller_order_status_update = async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    try {
      await authOrderModel.findByIdAndUpdate(orderId, {
        delivery_status: status,
      });
      responseReturn(res, 200, { message: "order status change success" });
    } catch (error) {
      console.log("get admin order status error " + error.message);
      responseReturn(res, 500, { message: "internal server error" });
    }
  };

  create_payment = async (req, res) => {
    const { price, type, orderId, userInfo } = req.body;
    const { id } = req;
    console.log("type", type);
    const userId = userInfo.id;
    const payEndpont = "/pg/v1/pay";
    const marchentTran = uniqid();
    const redirectUrl = "https://gopaljeweller.com/api/order/confirm";

    const user = await customerModel.findById(userId);

    const payload = {
      merchantId: PHONEPE_MERCHANT_ID,
      merchantTransactionId: orderId,
      merchantUserId: userId,
      amount: 1 * 100, // Use the correct amount passed in the request
      redirectUrl: `${redirectUrl}?orderId=${orderId}`,
      callbackUrl: `${redirectUrl}?orderId=${orderId}`,
      redirectMode: "REDIRECT",
      mobileNumber: user.phone, // Use customerPhone from the request
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    try {
      if (type == "ONLINEPAY") {
        const bufferObj = Buffer.from(JSON.stringify(payload), "utf8");
        const base63 = bufferObj.toString("base64");
        const xVerify =
          sha256(base63 + payEndpont + PHONEPE_SALT_KEY) +
          "###" +
          PHONEPE_SALT_INDEX;

        const options = {
          method: "POST",
          url: `${BASE_URL}${payEndpont}`,
          headers: {
            accepts: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": xVerify,
          },
          data: {
            request: base63,
          },
        };

        const response = await axios.request(options);
        // console.log("Payment Initiated:", response.data);
        const data = response.data;
        // res.status(200).json(response.data); // Send the response only once

        // const cuOrder = await customerOrder.findById(orderId);
        responseReturn(res, 200, { data: data });
      } else if (type === "COD") {
        await customerOrder.findByIdAndUpdate(orderId, {
          payment_status: "COD",
          delivery_status: "pending",
        });
        await authOrderModel.updateMany(
          { orderId: new ObjectId(orderId) },
          {
            payment_status: type === "card" ? "paid" : "COD",
            delivery_status: "pending",
          }
        );

        const cuOrder = await customerOrder.findById(orderId);
        responseReturn(res, 200, { data: cuOrder });
      }
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { message: "internal server error" });
    }
  };

  //   order_confirm = async (req, res) => {
  //     console.log("req.body")
  //      console.log("req.body",req.body)
  //     const { transactionId, status } = req.body;

  //     console.log("object", transactionId, status);
  //     try {
  //       if (status == "SUCCESS") {
  //         // Update customerOrder
  //         await customerOrder.findOneAndUpdate(
  //           { orderId: transactionId }, // Query using orderId
  //           {
  //             payment_status: "paid",
  //             delivery_status: "pending",
  //           }
  //         );

  //         // Update authOrderModel
  //         await authOrderModel.updateMany(
  //           { orderId: transactionId }, // Query using orderId
  //           {
  //             payment_status: "paid",
  //             delivery_status: "pending",
  //           }
  //         );

  //         responseReturn(res, 200, { message: "success" });
  //       } else {
  //         console.log("Payment failed or status not SUCCESS");
  //       }
  //     } catch (error) {
  //       console.log(error.message);
  //       responseReturn(res, 500, { message: "Internal server error" });
  //     }
  //   };

  order_confirm = async (req, res) => {
    // const orderId = req.query.orderId

    const merchantTransactionId = req.query.orderId;
    console.log("merchantTransactionId", merchantTransactionId);
    const merchantId = PHONEPE_MERCHANT_ID;
    //   console.log("orderId:", merchantTransactionId);

    const payEndpont = "/pg/v1/status";
    const marchentTran = uniqid();
    const redirectUrl = "https://gopaljeweller.com/api/order/confirm";

    //   const bufferObj = Buffer.from(JSON.stringify(payload), "utf8");
    // const base63 = bufferObj.toString("base64");
    const string =
      `/pg/v1/status/${merchantId}/${merchantTransactionId}` + PHONEPE_SALT_KEY;

    const xVerify = sha256(string) + "###" + PHONEPE_SALT_INDEX;

    const options = {
      method: "GET",
      url: `${BASE_URL}${payEndpont}/${merchantId}/${merchantTransactionId}`,
      headers: {
        accepts: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
        "X-MERCHANT-ID": PHONEPE_MERCHANT_ID,
      },
    };

    const response = await axios.request(options);

    const data = response.data;
    //   console.log("response",response.data)

    try {
      if (data.code === "PAYMENT_SUCCESS") {
        // Update customerOrder
        await customerOrder.findOneAndUpdate(
          { orderId: merchantTransactionId },
          {
            payment_status: "paid",
            delivery_status: "pending",
          }
        );

        // Update authOrderModel
        await authOrderModel.updateMany(
          { orderId: merchantTransactionId },
          {
            payment_status: "paid",
            delivery_status: "pending",
          }
        );

        return responseReturn(res, 200, {
          message: "Payment confirmed successfully",
        });
      } else {
        console.log("Payment failed or status not SUCCESS");
        return responseReturn(res, 400, { message: "Payment failed" });
      }
    } catch (error) {
      console.log("Error:", error.message);
      return responseReturn(res, 500, { message: "Internal server error" });
    }
  };
}

module.exports = new orderController();
