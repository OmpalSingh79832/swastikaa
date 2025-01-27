import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import Img11 from "../../assets/sl3.jpg";
import Img22 from "../../assets/sl4.jpg";
import Img33 from "../../assets/sl5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectComp = () => {
  // State to manage active selection
  const [activeTab, setActiveTab] = useState("Team");

  // Content data
  const contentData = {
    Team: {
      title: "Team Consultants",
      description: "Our team consists of 12,000+ consultants with expertise.",
      members: [
        { id: 1, name: "Team Consultant 1", image: Img11 },
        { id: 2, name: "Team Consultant 2", image: Img11 },
        { id: 3, name: "Team Consultant 3", image: Img11 },
        // Add more members here
      ],
    },
    Projects: {
      title: "Completed Projects",
      description: "We have successfully completed over 3,500+ projects globally.",
      members: [
        { id: 1, name: "Project 1", image: Img22 },
        { id: 2, name: "Project 2", image: Img22 },
        { id: 3, name: "Project 3", image: Img22 },
        // Add more projects here
      ],
    },
    Review: {
      title: "Customer Reviews",
      description: "We are proud of our 4.5-star customer satisfaction rating.",
      members: [
        { id: 1, name: "Review 1", image: Img33 },
        { id: 2, name: "Review 2", image: Img33 },
        { id: 3, name: "Review 3", image: Img33 },
        // Add more reviews here
      ],
    },
  };

  // Slick slider settings
  const sliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full sm:my-6 md:my-24 box-shadow-custo">
      <div className="w-[90%] mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <p className="text-[24px] sm:text-[30px] lg:text-[40px] font-bold">
            -- Our <span className="text-primaryRed">Analysis --</span>
          </p>
          <div className="sm:w-[95%] md:w-[60%] mx-auto mt-4">
            <p className="text-sm sm:text-base lg:text-lg md:text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ut optio beatae nisi aliquam laborum dolor quasi, vero soluta illo consequatur excepturi magnam dignissimos cumque dolorum placeat iure harum!
            </p>
          </div>
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 w-[95%] sm:w-[100%] lg:w-[70%] mx-auto gap-4 py-6 text-center">
          {Object.keys(contentData).map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 border rounded-lg cursor-pointer ${activeTab === tab
                ? "bg-blue-100 text-blue-600 font-bold"
                : "hover:bg-gray-100"
                }`}
            >
              <h3 className="text-sm sm:text-sm lg:text-xl font-bold">
                {contentData[tab].title}
              </h3>
            </div>
          ))}
        </div>

        {/* Divider Section */}
        <div className="flex flex-col lg:flex-row py-8 gap-6">
          {/* Left Side */}
          <div className="w-full lg:w-[25%] border-r lg:pr-4">
            <h2 className="text-lg sm:text-xl lg:text-3xl text-center text-primaryRed font-bold">
              {contentData[activeTab].title}
            </h2>
            <p className="text-sm sm:text-md lg:text-xl text-center font-semibold mt-3">
              {contentData[activeTab].description}
            </p>
          </div>

          {/* Right Side - Slick Slider with Dynamic Content */}
          <div className="w-full lg:w-[70%]">
            <Slider {...sliderSettings}>
              {contentData[activeTab].members.map((member) => (
                <div
                  key={member.id}
                  className="bg-white text-center border-[10px] border-white"
                >
                  <div className="border border-gray-300 p-4 sm:p-6 rounded-lg shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-[75px] sm:w-[100px] mx-auto h-[75px] sm:h-[100px] rounded-full mb-4"
                    />
                    <h3 className="text-sm sm:text-md lg:text-lg font-semibold mb-2">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectComp;
