import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ExecutionProject = ({ userRole }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
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

  const openModal = (product) => {
    if (userRole === "manufacturer") return; // Disable action for manufacturer
    setSelectedProduct(product);
    setIsModalOpen(true);

    setAppliedCounts((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      {/* Dropdown and Search */}
      <div className="flex justify-between items-center mb-4">
        <select className="bg-gray-800 text-white p-2 px-3 rounded-md" defaultValue="5">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <input
          type="text"
          placeholder="search"
          className="bg-gray-800 text-white p-2 rounded-md focus:outline-none"
        />
      </div>
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
                      onClick={() => openModal(product)}
                    >
                      Apply 
                    </button>
                  ) : (
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50"
                      >
                        Applied
                        <span className="flex absolute top-0 end-0 -mt-2 -me-2">
                          <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex text-xs bg-red-500 text-white rounded-full py-0.5 px-1.5">
                            {appliedCounts[product.id] || 0}
                          </span>
                        </span>
                      </button>
                    </div>
                  )}
                </td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-end items-center mt-4">
        <button className="bg-gray-800 text-white px-3 py-1 rounded-md mx-1">1</button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded-md mx-1">2</button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded-md mx-1">3</button>
        <button className="bg-gray-800 text-white px-3 py-1 rounded-md mx-1">4</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 text-white p-6 rounded-md w-[60%] h-fit">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">Apply for {selectedProduct?.name}</h2>
              <button
                className="px-3 h-fit py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              {/* Left Form Section */}
              <form className="space-y-4 w-full">
                <div>
                  <label className="block font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Your Phone Number</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Brief Intro Yourself?</label>
                  <textarea
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your Bio"
                    rows="2"
                  />
                </div>
              </form>

              {/* Right Section */}
              <div className="w-full md:w-full flex flex-col space-y-6">
                {/* Excution Details */}
                <div className="bg-gray-700 p-4 rounded-md text-white space-y-2">
                <div>
                  <label className="block font-semibold mb-2">Enter Amount</label>
                  <input
                    type="number"
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                </div>

                {/* File Uploader */}
                <div className="bg-gray-700 p-4 rounded-md">
                  <h3 className="text-lg font-bold text-white mb-2">Upload Your Proposal</h3>
                  <input
                    type="file"
                    className="w-full bg-gray-800 text-white border border-gray-600 rounded p-2"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end md:mt-auto">
                  <button
                    style={{ backgroundColor: "rgb(223, 20, 97)" }}
                    type="submit"
                    className="w-full md:w-[50%] px-4 py-2 text-white rounded hover:bg-pink-600"
                    onClick={closeModal}
                  >
                    Submit Application
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default ExecutionProject;
