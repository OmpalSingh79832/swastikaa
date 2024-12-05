import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import Img11 from "../assets/sl3.jpg";
import Img22 from "../assets/sl4.jpg";
import Img33 from "../assets/sl5.jpg";
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
        <div className="w-full my-10 box-shadow-custo">
            <div className="w-[90%] mx-auto">
                <div className="text-center pt-10 pb-5">
                    <div className="flex justify-center items-center gap-2">
                        <IoStarSharp className="text-primaryRed text-3xl" />
                        <IoStarSharp className="text-yellow-500 text-3xl" />
                        <p className="text-[40px] font-bold">Our Analysis</p>
                        <IoStarSharp className="text-yellow-500 text-3xl" />
                        <IoStarSharp className="text-primaryRed text-3xl" />
                    </div>
                </div>

                {/* Top Section */}
                <div className="grid grid-cols-3 gap-4 py-6 text-center">
                    {Object.keys(contentData).map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`p-4 border rounded-lg cursor-pointer ${activeTab === tab
                                    ? "bg-blue-100 text-blue-600 font-bold"
                                    : ""
                                }`}
                        >
                            <h3 className="text-xl font-bold">{contentData[tab].title}</h3>
                        </div>
                    ))}
                </div>

                {/* Divider Section */}
                <div className="w-11/12 mx-auto flex py-8">
                    {/* Left Side */}
                    <div className="w-[25%] border-r pr-4 mt-20">
                        <h2 className="text-2xl font-bold">{contentData[activeTab].title}</h2>
                        <p className="text-md font-semibold mt-3">{contentData[activeTab].description}</p>
                    </div>

                    {/* Right Side - Slick Slider with Dynamic Content */}
                    <div className="container mx-auto px-4 w-[70%] pl-4">
                        <Slider {...sliderSettings}>
                            {contentData[activeTab].members.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg shadow-md p-6 my-6 text-center border-[1px] border-stone-950"
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-[100px] mx-auto h-[100px] rounded-full mb-4"
                                    />
                                    <h3 className="text-md font-semibold mb-2">{member.name}</h3>
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
