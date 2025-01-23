import React, { useState, useEffect } from "react";
import Sl1 from "../../assets/sl1.webp";
import Sl2 from "../../assets/sl2.jpg";
import Sl3 from "../../assets/sl3.jpg";
import Sl4 from "../../assets/sl4.jpg";
import Sl5 from "../../assets/sl5.jpg";
import Sl6 from "../../assets/sl6.jpg";


const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderContent = [
        {
            heading: "Welcome to Swastikaa",
            button: "Discover Projects",
            backgroundImage: Sl1,
        },
        {
            heading: "Innovative",
            button: "Explore Now",
            backgroundImage: Sl2,
        },
        {
            heading: "Quality You Can Trust",
            button: "Learn More",
            backgroundImage: Sl3,
        },
        {
            heading: "Solutions for Tomorrow",
            button: "Start Today",
            backgroundImage: Sl4,
        },
        {
            heading: "Your Trusted Partner",
            button: "Get in Touch",
            backgroundImage: Sl5,
        },
        {
            heading: "Crafting Excellence",
            button: "Post Your Project",
            backgroundImage: Sl6,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 5000); // 10 seconds duration

        return () => clearInterval(interval);
    }, [sliderContent.length]);

    return (
       <div className="slider-container relative w-full h-[35em] sm:h-[25em] md:h-[40em] lg:h-[35em] overflow-hidden rounded-2xl">
  {/* Background Image */}
  <div
    className="slider-image w-full h-full bg-cover bg-center absolute top-0 left-0"
    style={{
      backgroundImage: `url(${sliderContent[currentIndex].backgroundImage})`,
    }}
  ></div>

  {/* Text Content */}
  <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%] uppercase">
    <h1 className="text-center sm:text-start rounded-3xl p-6 sm:p-8 lg:p-10 bg-gray-300 text-[24px] sm:text-[18px] md:text-[36px] lg:text-[40px] font-extrabold leading-snug">
      {sliderContent[currentIndex].heading}{" "}
      <span className="text-primaryRed">Manufacturing Platform</span>
      <br />
      <button className="all-btn mt-4">
        {sliderContent[currentIndex].button}
      </button>
    </h1>
  </div>
</div>

    );
};

export default Slider;
