import React from "react";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import Img11 from "../assets/sl3.jpg";
import Img22 from "../assets/sl4.jpg";

const Service = () => {
    // Array to store slider data
    const sliderData = [
        {
            id: 1,
            title: "Manufacture",
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: Img22,
            updated: "Last updated 5 mins ago",
        },
        {
            id: 2,
            title: "Construction",
            description:
                "Some quick example text to build on the card title and make up the bulk of the card's content.",
            image: Img11,
            updated: "Last updated 5 mins ago",
        },
        {
            id: 3,
            title: "Engineering",
            description:
                "This is an additional card with content for the engineering service.",
            image: Img22,
            updated: "Last updated 10 mins ago",
        },
        // Add more items as needed
    ];
    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-prev"
            style={{
                backgroundColor: "#000",
                boxShadow: "0px 0px 48px 72px rgba(0,0,0,0.1)",
                color: "#fff",
                fontSize: "25px",
                padding: "2px 15px 5px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                borderRadius: "5px",
                position: "absolute",
                left: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                cursor: "pointer",
            }}
        >
            &#8249;
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="custom-arrow custom-next"
            style={{
                backgroundColor: "#000",
                boxShadow: "0px 0px 48px 72px rgba(0,0,0,0.1)",
                color: "#fff",
                fontSize: "25px",
                padding: "2px 15px 5px 15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                borderRadius: "5px",
                position: "absolute",
                right: "-40px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                cursor: "pointer",
            }}
        >
            &#8250;
        </button>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <>
            <div className="bg-gray-200 pt-10 pb-16">
                <div className="w-[90%] mx-auto">
                    <div className="text-center pb-10">
                        <div className="flex justify-center items-center gap-2">
                            <IoStarSharp className="text-primaryRed text-3xl" />
                            <IoStarSharp className="text-yellow-500 text-3xl" />
                            <p className="text-[40px] font-bold">Our Services</p>
                            <IoStarSharp className="text-yellow-500 text-3xl" />
                            <IoStarSharp className="text-primaryRed text-3xl" />
                        </div>
                    </div>

                    <div className="slider-container">
                        <Slider {...settings}>
                            {sliderData.map((service) => (
                                <div className="p-4" key={service.id}>
                                    <div className="border bg-white rounded-xl shadow-sm sm:flex">
                                        {/* Image Section */}
                                        <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
                                            <img
                                                className="size-full absolute top-0 object-cover"
                                                src={service.image}
                                                alt={service.title}
                                            />
                                        </div>
                                        {/* Text Content Section */}
                                        <div className="flex flex-wrap">
                                            <div className="p-4 flex flex-col h-full sm:p-7">
                                                <h3 className="text-lg font-bold text-gray-800">
                                                    {service.title}
                                                </h3>
                                                <p className="mt-1 text-gray-500">
                                                    {service.description}
                                                </p>
                                                <div className="mt-5 sm:mt-auto">
                                                    <p className="text-xs text-gray-500">
                                                        {service.updated}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
