import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sl1 from "../assets/sl1.webp";
import Sl2 from "../assets/sl2.jpg";
import Sl3 from "../assets/sl3.jpg";
import Sl4 from "../assets/sl4.jpg";
import Sl5 from "../assets/sl5.jpg";
import Sl6 from "../assets/sl6.jpg";
import { IoStarSharp } from "react-icons/io5";

const IndustrySec = () => {
    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const sliderData = [
        { id: 1, image: Sl1, buttonText: "Learn More" },
        { id: 2, image: Sl2, buttonText: "Shop Now" },
        { id: 3, image: Sl3, buttonText: "Explore" },
        { id: 4, image: Sl4, buttonText: "Read More" },
        { id: 5, image: Sl5, buttonText: "Start Today" },
        { id: 6, image: Sl6, buttonText: "Contact Us" },
    ];

    return (
        <div className="p-4 py-8 bg-gray-100 relative">
            <div className="text-center pb-5">
                <div className="flex justify-center items-center gap-2">
                    <IoStarSharp className="text-primaryRed text-3xl" />
                    <IoStarSharp className="text-yellow-500 text-3xl" />
                    <p className="text-[40px] font-bold">Industry</p>
                    <IoStarSharp className="text-yellow-500 text-3xl" />
                    <IoStarSharp className="text-primaryRed text-3xl" />
                </div>
                <span className="text-[20px] font-semibold">Industries We Work</span>
            </div>
            <Slider {...settings}>
                {sliderData.map((item) => (
                    <div
                        key={item.id}
                        className="p-2 transition-transform duration-300"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={`Slider ${item.id}`}
                                className="w-full h-60 object-cover rounded-md shadow-lg"
                            />
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                <button className="bg-softYellow px-8 py-2 rounded-md hover:bg-blue-600">
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} `}
            style={{ ...style, right: "20px", zIndex: 10 }}
            onClick={onClick}
        >
        </div>
    );
};  

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style, left: "10px", zIndex: 10 }}
            onClick={onClick}
        >
        </div>
    );
};

export default IndustrySec;
