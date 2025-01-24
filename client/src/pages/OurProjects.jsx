import React, { useState } from "react";
import Img1 from "../assets/blog3.webp";
import { MdStar } from "react-icons/md";
import { FaThLarge, FaShoePrints, FaCity, FaCouch, FaWalking } from "react-icons/fa";
const OurProjects = () => {
  const productsData = [
    {
      id: 1,
      name: "Sole Elegance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.",
      image: Img1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Urban Style",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.",
      image: Img1, // Replace with actual image 
    },
    {
      id: 3,
      name: "Classic Comfort",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.",
      image: Img1, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Street Smart",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.Kept the layout scalable with flex properties and adjusted text sizes for better readability.",
      image: Img1, // Replace with actual image URL
    },
  ];

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Function to handle product filtering based on the name
  const handleClick = (name) => {
    if (name === "All") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Filter Section */}
      <div className="lg:col-span-2 sm:col-span-12 bg-gray-100 p-6 rounded-lg sm:relative lg:sticky sm:z-0 top-0 sm:h-fit lg:h-[calc(100vh-20px)] shadow-md ">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Sector</h3>
      <ul className="space-y-4">
        <li
          className="flex items-center cursor-pointer text-gray-800 hover:text-blue-500 text-lg"
          onClick={() => handleClick("All")}
        >
          <FaThLarge className="mr-3 text-blue-500 text-xl" />
          All Sector
        </li>
        <li
          className="flex items-center cursor-pointer text-gray-800 hover:text-blue-500 text-base"
          onClick={() => handleClick("Sole Elegance")}
        >
          <FaShoePrints className="mr-3 text-blue-500 text-xl" />
          Sole Elegance
        </li>
        <li
          className="flex items-center cursor-pointer text-gray-800 hover:text-blue-500 text-base"
          onClick={() => handleClick("Urban Style")}
        >
          <FaCity className="mr-3 text-blue-500 text-xl" />
          Urban Style
        </li>
        <li
          className="flex items-center cursor-pointer text-gray-800 hover:text-blue-500 text-base"
          onClick={() => handleClick("Classic Comfort")}
        >
          <FaCouch className="mr-3 text-blue-500 text-xl" />
          Classic Comfort
        </li>
        <li
          className="flex items-center cursor-pointer text-gray-800 hover:text-blue-500 text-base"
          onClick={() => handleClick("Street Smart")}
        >
          <FaWalking className="mr-3 text-blue-500 text-xl" />
          Street Smart
        </li>
      </ul>
    </div>


      {/* Products Section */}
      <div className="lg:col-span-10 sm:col-span-12 overflow-y-auto h-[calc(100vh-20px)]">
        <div className="font-[sans-serif] bg-gray-100">
          <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 gap-6">
              {/* Map through the filtered products array */}
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="grid lg:grid-cols-2 sm:grid-cols-1 bg-white rounded-lg shadow-lg p-4 cursor-pointer relative"
                >
                  {/* Product Image */}
                  <div className="w-fit h-full rounded-lg overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="mt-4 w-[90%]">
                    <h5 className="text-2xl font-bold text-gray-800">{product.name}</h5>
                    <p className="text-gray-500 text-base mt-2 text-justify">{product.description}</p>
                    <div className="flex justify-start mt-10">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <MdStar key={index} className="text-yellow-500 text-2xl" />
                  ))}
              </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Show a message if no products match the filter */}
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6">No products found.</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default OurProjects;
