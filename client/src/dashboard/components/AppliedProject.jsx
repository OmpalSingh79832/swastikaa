import React from "react";

const AppliedProject = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/40",
      name: "Sterling Silver",
      category: "Silver Designer",
      sector: "IT",
      budget: "₹4850",
      location: "Delhi",
      lastDate: "05Jan",
      status: "Pending",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/40",
      name: "Silver Exclusive",
      category: "Silver Rudraksha",
      sector: "Civil",
      budget: "₹450",
      location: "Noida",
      lastDate: "10March",
      status: "Success",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/40",
      name: "Silver Ring",
      category: "Silver Rings",
      sector: "Mechanical",
      budget: "₹3750",
      location: "Lucknow",
      lastDate: "15May",
      status: "Pending",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/40",
      name: "Glamour in Silver",
      category: "Silver Kids Kada",
      sector: "Electrical",
      budget: "₹2890",
      location: "Delhi",
      lastDate: "05June",
      status: "Success",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/40",
      name: "Modern Black Beauty",
      category: "Silver Mangalsutra",
      sector: "Commerce",
      budget: "₹18650",
      location: "Noida",
      lastDate: "01Nov",
      status: "Pending",
    },
  ];

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
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2">NO</th>
              <th scope="col" className="px-4 py-2">IMAGE</th>
              <th scope="col" className="px-4 py-2">NAME</th>
              <th scope="col" className="px-4 py-2">CATEGORY</th>
              <th scope="col" className="px-4 py-2">Sector</th>
              <th scope="col" className="px-4 py-2">Budget</th>
              <th scope="col" className="px-4 py-2">Location</th>
              <th scope="col" className="px-4 py-2">Last Date</th>
              <th scope="col" className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.category}</td>
                <td className="px-4 py-2">{product.sector}</td>
                <td className="px-4 py-2">{product.budget}</td>
                <td className="px-4 py-2">{product.location}</td>
                <td className="px-4 py-2">{product.lastDate}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-md text-sm font-medium ${product.status === "Pending"
                        ? "bg-yellow-500 text-black"
                        : product.status === "Success"
                          ? "bg-green-500 text-white"
                          : ""
                      }`}
                  >
                    {product.status}
                  </span>
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
    </div>
  );
};

export default AppliedProject;
