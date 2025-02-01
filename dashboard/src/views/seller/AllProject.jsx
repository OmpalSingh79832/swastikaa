import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../Pagination";
import Search from "../components/Search";
import Swal from "sweetalert2";
import {
  get_products,
  delete_product,
} from "../../store/Reducers/productReducer";
import { IoPrint } from "react-icons/io5";
const Products = () => {
  const dispatch = useDispatch();
  const { products, totalProduct, successMessage } = useSelector(
    (state) => state.product
  );

  console.log(products)

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_products(obj));
  }, [searchValue, currentPage, parPage, successMessage]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_product(id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };

  const allprojects = [
    {
      id: 1,
      name: "Smartphone",
      category: "Electronics",
      sector: "Consumer Tech",
      budget: "₹30,000",
      location: "Delhi",
      uploadedDate: "2024-01-10",
      lastDate: "2024-02-10",
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Footwear",
      sector: "Sports",
      budget: "₹5,000",
      location: "Mumbai",
      uploadedDate: "2024-01-15",
      lastDate: "2024-02-15",
    },
    {
      id: 3,
      name: "Laptop",
      category: "Computers",
      sector: "Technology",
      budget: "₹75,000",
      location: "Bangalore",
      uploadedDate: "2024-01-20",
      lastDate: "2024-02-20",
    },
    {
      id: 4,
      name: "Refrigerator",
      category: "Home Appliances",
      sector: "Consumer Goods",
      budget: "₹40,000",
      location: "Chennai",
      uploadedDate: "2024-01-25",
      lastDate: "2024-02-25",
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
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-[#d0d2d6]">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">
                  No
                </th>
                <th scope="col" className="py-3 px-4">
                  Name
                </th>
                <th scope="col" className="py-3 px-4">
                  Category
                </th>
                <th scope="col" className="py-3 px-4">
                  Sector
                </th>
                <th scope="col" className="py-3 px-4">
                  Budget
                </th>
                <th scope="col" className="py-3 px-4">
                  Location
                </th>
                <th scope="col" className="py-3 px-4">
                  Uploaded Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Last Date
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {allprojects.map((product, i) => (
                <tr key={product.id}>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">{i + 1}</td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.name}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.category}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.sector}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.budget}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.location}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.uploadedDate}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <span>{product.lastDate}</span>
                  </td>
                  <td className="py-1 px-4 font-medium whitespace-nowrap">
                    <div className="flex justify-start items-center gap-4">
                      <button
                        // onClick={() => handlePrint(product.id)}
                        className="p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 cursor-pointer"
                      >
                        <IoPrint />
                      </button>
                      <button
                        // onClick={() => handleDelete(product.id)}
                        className="p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50 cursor-pointer"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {totalProduct <= parPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              parPage={parPage}
              showItem={4}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
