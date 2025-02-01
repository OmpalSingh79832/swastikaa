import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import Search from "../components/Search";
import { useSelector, useDispatch } from "react-redux";
import { get_seller_orders } from "../../store/Reducers/OrderReducer";
const Orders = () => {
  const dispatch = useDispatch();
  const { totalOrder, myOrders } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.auth);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  console.log("myOrders", myOrders);

  useEffect(() => {
    dispatch(
      get_seller_orders({
        parPage: parseInt(parPage),
        page: parseInt(currentPage),
        searchValue,
        sellerId: userInfo._id,
      })
    );
  }, [parPage, currentPage, searchValue]);

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
    <div className="px-2 lg:px-7 pt-5 ">
      <div className="w-full p-4  bg-[#283046] rounded-md">
        <Search
          setParPage={setParPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
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
        {totalOrder <= parPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={totalOrder}
              parPage={parPage}
              showItem={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
