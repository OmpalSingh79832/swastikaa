import React from "react";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import Img11 from "../../assets/sl3.jpg";
import Img22 from "../../assets/sl4.jpg";

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
            }, {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
           <div className="bg-gray-300 py-16 sm:py-24">
  <div className="w-[90%] mx-auto">
    {/* Section Header */}
    <div className="text-center">
      <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold">
        -- Our <span className="text-primaryRed">Services --</span>
      </p>
      <div className="w-[95%] sm:w-[80%] lg:w-[70%] mx-auto mb-6 sm:mb-8">
        <p className="text-sm sm:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus ut optio beatae nisi aliquam laborum dolor quasi, vero soluta illo consequatur excepturi magnam dignissimos cumque dolorum placeat iure harum!
        </p>
      </div>
    </div>

    {/* Slider Section */}
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData.map((service) => (
          <div className="p-4" key={service.id}>
           <div className="border bg-white rounded-xl shadow-md h-[400px] flex flex-col">
              {/* Image Section */}
              <div className="relative w-full rounded-t-xl overflow-hidden flex-shrink-0 h-[50%]">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              {/* Text Content Section */}
              <div className="flex flex-col p-4 sm:p-6 lg:p-8 h-[50%] justify-between">
                <h3 className="text-md sm:text-lg lg:text-xl font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <p className="text-xs text-gray-400">{service.updated}</p>
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
