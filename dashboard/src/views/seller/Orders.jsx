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
                  Order Id
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                {/* <th scope="col" className="py-3 px-4">
                  Weight
                </th> */}
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((d, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap flex flex-col"
                  >
                    #{d._id.slice(-6)}
                  </td>

                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {d.products.map((name, i) => (
                      <div>{name.name}</div>
                    ))}
                  </td>

                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap text-lg"
                  >
                    {d.price}
                  </td>
                  {/* {d.products.map((wa, i) => (
                    <td
                      scope="row"
                      className="py-3 px-4 font-medium whitespace-nowrap"
                    >
                      <span>{wa.weight}</span> <span>{wa.unit}</span>
                    </td>
                  ))} */}
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span
                      className={`${
                        d.payment_status === "paid"
                          ? "bg-green-500 py-2 px-4 rounded-full text-lg capitalize"
                          : d.payment_status == "COD"
                          ? "bg-red-500 py-2 px-4 rounded-full text-lg capitalize"
                          : "bg-yellow-500 py-2 px-4 rounded-full text-lg capitalize text-black"
                      }`}
                    >
                      {d.payment_status}
                    </span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <span
                      className={`${
                        d.delivery_status == "processing"
                          ? "  bg-green-500 py-2 px-4 rounded-full text-lg capitalize"
                          : d.payment_status == "pending"
                          ? " bg-yellow-500 py-2 px-4 rounded-full text-lg capitalize text-black"
                          : "bg-red-500 py-2 px-4 rounded-full text-lg capitalize"
                      }`}
                    >
                      {d.delivery_status}
                      {console.log("object1111", d.delivery_status)}
                    </span>
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    {d.date}
                  </td>
                  <td
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link
                      to={`/seller/dashboard/order/details/${d._id}`}
                      className="p-[6px] w-[30px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center"
                    >
                      <FaEye />
                    </Link>
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
