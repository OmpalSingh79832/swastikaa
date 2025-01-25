import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import domtoPDF from "dom-to-pdf";
import {
  messageClear,
  get_seller_order,
  seller_order_status_update,
} from "../../store/Reducers/OrderReducer";
import "../../App.css";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const contentRef = useRef();

  const { order, errorMessage, successMessage } = useSelector(
    (state) => state.order
  );

  const handleDownloadPdf = () => {
    window.print();
  };

  useEffect(() => {
    dispatch(get_seller_order(orderId));
  }, [orderId]);

  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus(order?.delivery_status);
  }, [order]);

  const status_update = (e) => {
    dispatch(
      seller_order_status_update({ orderId, info: { status: e.target.value } })
    );
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#283046] rounded-md">
        <div className="flex justify-end items-center p-4">
          {/* <h2 className="text-xl text-[#d0d2d6]">Order Details</h2> */}
          <select
            onChange={status_update}
            value={status}
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="pending">pending</option>
            <option value="processing">processing</option>
            <option value="warehouse">warehouse</option>
            <option value="cancelled">cancelled</option>
          </select>
        </div>
        <div className="p-4 md:pl-14 mx-auto flex flex-col justify-center">
          <div className=" bg-[#283046]" ref={contentRef}>
            <h2 className="text-xl text-[#d0d2d6] mb-10">Order Details</h2>
            <div className="flex gap-2 text-lg text-[#d0d2d6]">
              <h2>#{order._id}</h2>
              <span className="text-orange-500">{order.date}</span>
            </div>
            <div className="flex flex-wrap">
              <div className="md:w-[50%]">
                <div className="pr-3 text-[#d0d2d6] text-lg flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h2 className="py-2 text-green-500 text-xl font-semibold">
                      Deliver To:
                    </h2>
                    {order.shippingInfo && (
                      <div className="flex flex-col gap-2">
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">Name:</span>{" "}
                          {order.shippingInfo.name}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">
                            Address:
                          </span>{" "}
                          {order.shippingInfo.address}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">Phone:</span>{" "}
                          {order.shippingInfo.phone}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">Post:</span>{" "}
                          {order.shippingInfo.post}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">
                            Province:{" "}
                          </span>
                          {order.shippingInfo.province}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">City:</span>{" "}
                          {order.shippingInfo.city}
                        </p>
                        <p className="flex justify-between text-gray-400">
                          <span className="font-[600] text-white">Area: </span>
                          {order.shippingInfo.area}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center gap-3 text-white">
                    <h2 className="text-[600]">Payment Status:</h2>
                    <span className="text-base text-gray-400">
                      {order.payment_status}
                    </span>
                  </div>
                  <span className="flex justify-between text-gray-400">
                    <span className="text-white text-[600]">Price:</span> ₹
                    {order.price}
                  </span>
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="text-[#d0d2d6] flex flex-col gap-6">
                      {order?.products?.map((p, i) => (
                        <div
                          key={i}
                          className="flex gap-3 text-md items-center"
                        >
                          <img
                            className="w-[100px] h-[100px]"
                            src={p.images[0]}
                            alt={p.name}
                          />
                          <div>
                            <h2 className="text-white font-[500] text-lg">
                              {p.name}
                            </h2>
                            <p>
                              <span className="text-white font-[500]">
                                Brand:{" "}
                              </span>
                              <span className="text-green-500">{p.brand}</span>
                              <p className="text-lg">Quantity: {p.quantity}</p>
                            </p>
                            <p>
                              <span>Weight: </span>
                              <span>{p.weight}</span>
                              <span> {p.unit}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-green-500 rounded-md mt-6 text-white"
              onClick={handleDownloadPdf}
            >
              Print Bills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
