import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sl1 from "../../assets/sl1.webp";
import Sl2 from "../../assets/sl2.jpg";
import Sl3 from "../../assets/sl3.jpg";
import Sl4 from "../../assets/sl4.jpg";
import Sl5 from "../../assets/sl5.jpg";
import Sl6 from "../../assets/sl6.jpg";
import { IoStarSharp } from "react-icons/io5";

const IndustrySec = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow custom-prev hidden sm:hidden lg:block"
      style={{
        backgroundColor: "#000",
        boxShadow: "0px 0px 48px 72px rgba(0,0,0,0.1)",
        color: "#fff",
        fontSize: "25px",
        padding: "2px 15px 5px 15px",
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
      className="custom-arrow custom-next hidden sm:hidden lg:block"
      style={{
        backgroundColor: "#000",
        boxShadow: "0px 0px 48px 72px rgba(0,0,0,0.1)",
        color: "#fff",
        fontSize: "25px",
        padding: "2px 15px 5px 15px",

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
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <>

      <div className="sm:p-1 sm:py-6 md:py-10 md:p-16 bg-gray-100 relative">
        {/* Section Title */}
        <div className="text-center">
          <p className="text-[24px] sm:text-[30px] lg:text-[40px] font-bold">
            -- Explore <span className="text-primaryRed">Industry --</span>
          </p>
          <div className="sm:w-[95%] md:w-[60%] mx-auto mt-4">
            <p className="sm:text-sm lg:text-lg md:text-center sm:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ut optio beatae nisi aliquam laborum dolor quasi, vero soluta illo consequatur excepturi magnam dignissimos cumque dolorum placeat iure harum!
            </p>
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-6 lg:p-8 transition-transform duration-300"
            >
              <div className="relative border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <img
                  src={item.image}
                  alt={`Slider ${item.id}`}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <button className="all-btn px-4 py-2 sm:px-6 sm:py-3">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </>
  );
};
{/* <span className="text-[20px]  font-semibold">Industries We Work</span> */ }

export default IndustrySec;
