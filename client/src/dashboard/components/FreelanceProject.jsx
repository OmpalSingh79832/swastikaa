


import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const FreelanceProject = ({ userRole }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(""); // "apply" or "applied"
  const [appliedCounts, setAppliedCounts] = useState({});

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
    },
    {
      id: 2,
      uploadeddate: "21Aug",
      name: "Silver Exclusive",
      category: "Silver Rudraksha",
      sector: "Civil",
      budget: "₹450",
      location: "Noida",
      lastDate: "10March",
    },
    {
      id: 3,
      uploadeddate: "02March",
      name: "Silver Ring",
      category: "Silver Rings",
      sector: "Mechanical",
      budget: "₹3750",
      location: "Lucknow",
      lastDate: "15May",
    },
    {
      id: 4,
      uploadeddate: "1Jan",
      name: "Glamour in Silver",
      category: "Silver Kids Kada",
      sector: "Electrical",
      budget: "₹2890",
      location: "Delhi",
      lastDate: "05June",
    },
    {
      id: 5,
      uploadeddate: "29Dec",
      name: "Modern Black Beauty",
      category: "Silver Mangalsutra",
      sector: "Commerce",
      budget: "₹18650",
      location: "Noida",
      lastDate: "01Nov",
    },
  ];
  const openApplyModal = (product) => {
    if (userRole === "manufacturer") return; // Disable action for manufacturer
    setSelectedProduct(product);
    setIsModalOpen(true);
    setModalType("apply");

    setAppliedCounts((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const openAppliedModal = (product) => {
    setSelectedProduct(product);
    setModalType("applied");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setModalType("");
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-center text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
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
                  {userRole === "execution" ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={() => openApplyModal(product)}
                    >
                      Apply Now
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
                      onClick={() => openAppliedModal(product)}
                    >
                      Applied
                      <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                        <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                          {appliedCounts[product.id] || 0}
                        </span>
                      </span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 text-white p-6 rounded-md w-[60%]">
            <div className="justify-end text-right mb-2">
              <button
                className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                <RxCross2 />
              </button>
            </div>

            {/* Modal Content */}
            {modalType === "apply" ? (
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                {/* Left Form Section */}
                <form className="space-y-4 w-full">
                  <div>
                    <label className="text-xl block font-bold mb-2">Project Name : </label>
                    <h2 className="text-sm">{selectedProduct?.name}</h2>
                  </div>
                  <div>
                    <label className="text-xl block font-bold mb-2">Project Sector :</label>
                    <h2 className="text-sm">{selectedProduct?.sector}</h2>
                  </div>
                  <div>
                    <label className="text-xl block font-bold mb-2">Project Description :</label>
                    <h2 className="text-sm mr-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, officia ipsum dolor, sit amet consectetur adipisicing?</h2>
                  </div>
                  <div>
                    <label className="text-xl block font-bold mb-2">Last Date for Apply :</label>
                    <h2 className="text-sm">{selectedProduct?.lastDate}</h2>
                  </div>
                  {/* Submit Button */}
                  <div className="flex md:mt-auto">
                    <button
                      style={{ backgroundColor: "rgb(223, 20, 97)" }}
                      type="submit"
                      className="w-full md:w-[30%] px-4 py-2 text-white rounded hover:bg-pink-600"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* Right Section */}
                <div className="w-full md:w-full flex flex-col space-y-6">
                  {/* Manufacturer Details */}

                  <div className="bg-gray-700 p-4 rounded-md text-white space-y-2">
                    <h3 className="text-lg font-bold">Manufacturer Details</h3>
                    <p><span className="font-semibold">Name:</span> John Doe</p>
                    <p><span className="font-semibold">Contact Number:</span> +91-9876543210</p>
                    <p><span className="font-semibold">Email ID:</span> johndoe@example.com</p>
                  </div>
                  <div>
                    {/* <label className="block font-semibold mb-2">Budget</label> */}
                    <input
                      type="number"
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Enter Your budget"
                    />
                  </div>
                  {/* File Uploader */}
                  <div className="bg-gray-700 p-4 rounded-md">
                    <h3 className="text-lg font-bold text-white mb-2">Upload Your Proposal</h3>
                    <input
                      type="file"
                      className="w-full bg-gray-800 text-white border border-gray-600 rounded p-2"
                    />
                  </div>


                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:space-x-6">
                {/* Left Side */}
                <div className="w-full">
                  <h3 className="text-lg font-bold mb-2">Details:</h3>
                  <p>Name: John Doe</p>
                  <p>Email: john@example.com</p>
                  <p>Phone: 1234567890</p>
                  <p>Experience: 5 Years</p>
                  <p>Brief Bio: Lorem ipsum dolor sit amet.</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                    Download Proposal
                  </button>
                </div>

                {/* Right Side */}
                <div className="w-full flex flex-col">
                  <select className="bg-gray-700 text-white p-2 rounded mt-4">
                    <option value="pending">Pending</option>
                    <option value="awarded">Awarded</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-auto"
                    style={{ marginTop: "auto" }}
                  >
                    Submit Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelanceProject;
