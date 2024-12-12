import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="max-w-screen-xl mx-auto my-10 px-4">
            <Slider {...settings}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>
                        <div className="h-64 flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg shadow-lg">
                            <p className="text-xl font-semibold text-gray-700">Slide {index + 1}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
