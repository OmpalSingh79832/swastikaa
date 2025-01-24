import React, { useState } from "react";
import Img1 from "../assets/blog3.webp";

const OurProjects = () => {
  const productsData = [
    {
      id: 1,
      name: "Sole Elegance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: Img1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "Urban Style",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor.",
      image: Img1, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Classic Comfort",
      description: "Tempor incididunt ut labore et dolore magna aliqua.",
      image: Img1, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Street Smart",
      description: "Ut enim ad minim veniam, quis nostrud exercitation.",
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
      <div className="col-span-3 bg-gray-100 p-4 rounded sticky top-0 h-[calc(100vh-20px)]">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Your Sector</h3>
        <ul>
          <li
            className="cursor-pointer text-blue-500 mb-2 text-xl"
            onClick={() => handleClick("All")}
          >
            All
          </li>
          <li
            className="cursor-pointer text-blue-500 mb-2"
            onClick={() => handleClick("Sole Elegance")}
          >
            Sole Elegance
          </li>
          <li
            className="cursor-pointer text-blue-500 mb-2"
            onClick={() => handleClick("Urban Style")}
          >
            Urban Style
          </li>
          <li
            className="cursor-pointer text-blue-500 mb-2"
            onClick={() => handleClick("Classic Comfort")}
          >
            Classic Comfort
          </li>
          <li
            className="cursor-pointer text-blue-500 mb-2"
            onClick={() => handleClick("Street Smart")}
          >
            Street Smart
          </li>
        </ul>
      </div>

      {/* Products Section */}
      <div className="col-span-9 overflow-y-auto h-[calc(100vh-20px)]">
        <div className="font-[sans-serif] bg-gray-100">
          <div className="p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-xl max-sm:max-w-sm">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-xl:gap-4 gap-6">
              {/* Map through the filtered products array */}
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded p-4 cursor-pointer relative"
                >
                  {/* Product Image */}
                  <div className="mb-4 bg-gray-100 rounded p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[33/35] w-full object-contain"
                    />
                  </div>
                  {/* Product Details */}
                  <div>
                    <h5 className="text-base font-bold text-gray-800">
                      {product.name}
                    </h5>
                    <p className="text-gray-500 text-[13px] mt-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Show a message if no products match the filter */}
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 text-center mt-6">
                No products found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
