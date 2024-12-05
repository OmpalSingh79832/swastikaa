import React, { useState, useEffect } from 'react';
import "./home.css";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderContent = [
        {
            heading: "Welcome to Swastikaa",
            button: "Discover Projects",
        },
        {
            heading: "Innovative ",
            button: "Explore Now",
        },
        {
            heading: "Quality You Can Trust",
            button: "Learn More",
        },
        {
            heading: "Solutions for Tomorrow",
            button: "Start Today",
        },
        {
            heading: "Your Trusted Partner",
            button: "Get in Touch",
        },
        {
            heading: "Crafting Excellence",
            button: "Post Your Project",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
       <>
        <div className="m-0 p-0 w-full h-screen font-sans">
            <div className="Section_top mt-[10px] w-full h-[90vh] overflow-hidden relative bg-center bg-no-repeat bg-cover text-center justify-center">
                <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 uppercase w-[40%]">
                    <h1 className="text-start rounded-3xl p-10 bg-white text-[40px] font-extrabold">
                        {sliderContent[currentIndex].heading}{" "}
                        <span className="text-primaryRed">Manufacturer</span> <br />
                        <button className="bg-softYellow px-6 py-2.5 text-[18px] rounded-md hover:bg-black hover:text-white">
                            {sliderContent[currentIndex].button}
                        </button>
                    </h1>
                </div>
            </div>
        </div>



       </>
    );


};

export default Slider;
