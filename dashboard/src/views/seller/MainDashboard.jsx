import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Chart from "react-apexcharts";
import customer from "../../assets/seller.png";
import { useSelector, useDispatch } from "react-redux";
import { get_seller_dashboard_index_data } from "../../store/Reducers/dashboardIndexReducer";
import moment from "moment";
import { RxCross2 } from "react-icons/rx";

const SellerDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {
    totalSale,
    totalOrder,
    totalProduct,
    totalPendingOrder,
    totalSeller,
    recentOrders,
    recentMessage,
  } = useSelector((state) => state.dashboardIndex);

  const state = {
    series: [
      {
        name: "Orders",
        data: [34, 65, 34, 65, 34, 34, 34, 56, 23, 67, 23, 45],
      },
      {
        name: "Revenue",
        data: [34, 32, 45, 32, 34, 34, 43, 56, 65, 67, 45, 78],
      },
      {
        name: "Seles",
        data: [78, 32, 34, 54, 65, 34, 54, 21, 54, 43, 45, 43],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_seller_dashboard_index_data());
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const products = [
    {
      id: 1,
      uploadeddate: "09Sep",
      name: "Sterling Silver",
      category: "Silver Designer",
      sector: "IT",
      budget: "₹4850",
      location: "Delhi",
      lastDate: "05Jan",
    }
  ]


  const ordersdata = [
    {
      _id: "1234567890abcdef",
      name: "Raman",
      price: "$49.99",
      plan_status: "Plan A",
      payment_status: "Pending",
      user_role: "Consultant",
      date: "2024-02-01",
    },
    {
      _id: "abcdef1234567890",
      name: "Shyam",
      price: "$39.99",
      plan_status: "Plan B",
      payment_status: "Awarded",
      user_role: "Enterprise",
      date: "2024-01-28",
    },
    {
      _id: "abcdef1234567890",
      name: "Shyam",
      price: "$39.99",
      plan_status: "Plan B",
      payment_status: "Rejected",
      user_role: "Consultant",
      date: "2024-01-28",
    },
  ];
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">₹{totalSale}</h2>
            <span className="text-md font-medium">Total Sale</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">₹{totalSale}</h2>
            <span className="text-md font-medium">Monthly Sale</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl">
            <BsCurrencyDollar className="text-[#28c76f] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalProduct}</h2>
            <span className="text-md font-medium">All Project</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl">
            <RiProductHuntLine className="text-[#cd00e8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalOrder}</h2>
            <span className="text-md font-medium">Total Consultant</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-[#00cfe8] shadow-lg" />
          </div>
        </div>
        <div className="flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#d0d2d6]">
            <h2 className="text-3xl font-bold">{totalPendingOrder}</h2>
            <span className="text-md font-medium">Total Enterprise</span>
          </div>
          <div className="w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl">
            <AiOutlineShoppingCart className="text-[#7367f0] shadow-lg" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#283046] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#283046] p-4 rounded-md text-[#d0d2d6]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
                Recent New Project Posted
              </h2>
              <Link
                onClick={() => setIsOpen(true)}
                className="font-semibold text-sm text-[#d0d2d6]">
                View All
              </Link>
            </div>
            {isOpen && (
              <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-20">
                <div className="bg-gray-700 p-6 pb-8 rounded-lg shadow-lg w-[80%] mr-6">
                  <div className="justify-end text-right mb-2">
                    <button
                      className="px-3 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
                      onClick={() => setIsOpen(false)}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-center text-gray-400">
                      <thead className="text-sm uppercase bg-gray-900 text-gray-400">
                        <tr>
                          <th scope="col" className="px-3 py-2">Project Id</th>
                          <th scope="col" className="px-3 py-2">NAME</th>
                          <th scope="col" className="px-3 py-2">CATEGORY</th>
                          <th scope="col" className="px-3 py-2">Sector</th>
                          <th scope="col" className="px-3 py-2">Budget</th>
                          <th scope="col" className="px-3 py-2">Location</th>
                          <th scope="col" className="px-3 py-2">Uploaded Date</th>
                          <th scope="col" className="px-3 py-2">Last Date</th>
                          <th scope="col" className="px-3 py-2">Status</th>
                          <th scope="col" className="px-3 py-2">Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product, index) => (
                          <tr key={product.id} className="border-b border-gray-700 hover:bg-gray-800">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.category}</td>
                            <td className="px-4 py-2">{product.sector}</td>
                            <td className="px-4 py-2">{product.budget}</td>
                            <td className="px-4 py-2">{product.location}</td>
                            <td className="px-4 py-2">{product.uploadeddate}</td>
                            <td className="px-4 py-2">{product.lastDate}</td>
                            <td className="px-4 py-2 flex justify-center">
                              <select className="bg-gray-900 text-white p-2 rounded">
                                <option value="awarded">Accept</option>
                                <option value="rejected">Reject</option>
                              </select>
                            </td>
                            <td className="px- py-2">
                              <select className="bg-gray-900 text-white p-2 rounded">
                                <option value="awarded">As Swastikaa</option>
                                <option value="rejected">As Freelancer</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-end mt-8">
                      <button className="bg-blue-500 rounded-md hover:bg-blue-600 px-3 py-2">Submit Now</button>
                    </div>
                  </div>
                </div>
              </div>

            )}
            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative border-1 border-slate-600 ml-4">
                {recentMessage.map((m, i) => (
                  <li className="mb-3 ml-6">
                    <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#00d1e848] rounded-full z-10">
                      {m.senderId === userInfo._id ? (
                        <img
                          className="w-full rounded-full h-full shadow-lg"
                          src={userInfo.image}
                          alt=""
                        />
                      ) : (
                        <img
                          className="w-full rounded-full h-full shadow-lg"
                          src={customer}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <Link className="text-md font-normal">
                          {m.senderName}
                        </Link>
                        <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                          {moment(m.createdAt).startOf("hour").fromNow()}
                        </time>
                      </div>
                      <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                        {m.message}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4  bg-[#283046] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">
            Recent Subscription
          </h2>
          <Link
            to="/seller/dashboard/orders"
            className="font-semibold text-sm text-[#d0d2d6]"
          >
            View All
          </Link>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Customer Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Plan
                </th>
              
                <th scope="col" className="py-3 px-4">
                  User Role
                </th>
                <th scope="col" className="py-3 px-4">
                  Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersdata.map((order, i) => (
                <tr key={i}>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">#{order._id.slice(-6)}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">{order.name}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap text-lg">{order.price}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">{order.plan_status}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">{order.user_role}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">{order.date}</td>
                  <td className="py-3 px-4 font-medium whitespace-nowrap">
                    <span
                      className={`${order.payment_status === "Pending"
                        ? "bg-yellow-500 py-1 px-3 rounded-full text-base text-white capitalize"
                        : order.payment_status === "Rejected"
                          ? "bg-red-500 py-1 px-3 rounded-full text-base text-white capitalize"
                          : " bg-green-500 py-1 px-3 rounded-full text-base text-white capitalize"
                        }`}
                    >
                      {order.payment_status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
