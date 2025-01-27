import React, { useState } from "react";
import Slider from "./Slider";
import IndustrySec from "./IndustrySec";
import ProjectComp from "./ProjectComp";
import Service from "./Service";
import ChooseUs from "./ChooseUs";
import ContactForm from "./ContactForm";
import { IoStarSharp } from "react-icons/io5";
import { LuCircleArrowRight } from "react-icons/lu";
import AboutSec from "./AboutSec";
import DesignerImg from "../../assets/designer1.avif";
import DesignerImg2 from "../../assets/designer2.avif";
import SliderComponent from "./Testonomials";

const Home = () => {

  const testimonials = [
    {
      category: "Enterprise",
      quote:
        "If my best friend was on the fence about trying ManyPixels, I would tell them that they needed to do it, because it’s a no-brainer.",
      name: "Jeanette Knutti",
      title: "CEO, Moxie Marketing",
      image: DesignerImg, // Replace with the actual image URL
    },
    {
      category: "Consultants",
      quote:
        "ManyPixels has been instrumental in helping us scale our design needs. It's like having an in-house design team without the hassle.",
      name: "John Doe",
      title: "Head of Marketing, Creative Solutions",
      image: DesignerImg2, // Replace with another image URL
    },
    {
      category: "Machine Suppliers",
      quote:
        "As an entrepreneur, ManyPixels gave me the freedom to focus on growing my business while they handled all the design work.",
      name: "Sarah Johnson",
      title: "Founder, Startup Hub",
      image: DesignerImg, // Replace with another image URL
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Consultants");

  const activeTestimonial = testimonials.find(
    (item) => item.category === activeCategory
  );

  return (
    <div>
      <Slider />
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[92%] mx-auto sm:py-10 md:py-10">
        <div>
          <img src={DesignerImg} alt="" />
        </div>
        <div className="sm:mt-12 md:mt-16">
          <p className="text-primaryRed text-lg font-semibold">NEED A DESIGNER ASAP?</p>
          <h3 className="lg:text-5xl sm:text-2xl lg:leading-tight sm:my-2 md:my-8 font-bold">Hiring a designer should be simple</h3>
          <p className="lg:text-2xl sm:text-sm leading-snug">Finding quality and reliable freelancers takes a lot of time and luck. In-house hires are expensive and can create HR drama.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[92%] mx-auto sm:py-10 md:py-4 sm:fle">
        <div className="flex flex-col justify-center">
          <p className="text-primaryRed text-lg font-semibold">ONE POINT SOLUTION?</p>
          <h3 className="lg:text-5xl sm:text-2xl lg:leading-tight sm:my-2 md:my-8 font-bold">Meet your virtual design team</h3>
          <p className="lg:text-2xl sm:text-sm leading-snug">ManyPixels provides you with vetted designers for a flat monthly fee. No hiring, no contracts, no stress.</p>
        </div>
        <div className="w-full flex justify-end items-end">
          <img src={DesignerImg2} alt="" className="w-full max-w-[500px]" />
        </div>

      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[92%] mx-auto sm:py-10 md:py-20">
        <div>
          <img src={DesignerImg} alt="" />
        </div>
        <div className="sm:mt-12 md:mt-16">
          <p className="text-primaryRed text-lg font-semibold">POWERED BY TECHNOLOGY</p>
          <h3 className="lg:text-5xl sm:text-2xl lg:leading-tight sm:my-2 md:my-8 font-bold">Manage everything from one simple platform</h3>
          <p className="lg:text-2xl sm:text-sm leading-snug mb-2">*Submit and prioritize your requests</p>
          <p className="lg:text-2xl sm:text-sm leading-snug mb-2">*Manage your different brands</p>
          <p className="lg:text-2xl sm:text-sm leading-snug mb-2">*Communicate directly with your designer</p>
          <p className="lg:text-2xl sm:text-sm leading-snug">*Invite your team and collaborate together</p>
        </div>
      </div>
      <IndustrySec />
      <ProjectComp />
      <div>
        <div>
          <div className="w-[90%] mx-auto sm:my-10 md:my-16">
            <p className="text-primaryRed text-xl font-semibold mb-4">OUR WORK</p>
            <h3 className="md:text-5xl sm:text-[30px] font-bold">Your one-stop shop for all your creatives</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-[90%] mx-auto mb-10">
            <div className="h-96 relative flex justify-center overflow-hidden rounded-xl cursor-pointer">
              <div className="w-full h-full absolute" />
              <img src="https://pagedone.io/asset/uploads/1696246502.png" alt="Un" className="w-full h-full object-cover rounded-xl transition-transform hover:scale-110 scale-100 duration-300" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-black text-3xl font-extrabold">Social Media Graphics</h5>
              </div>
            </div>
            <div className="h-96 relative flex justify-center overflow-hidden rounded-xl cursor-pointer">
              <div className="w-full h-full absolute" />
              <img src="https://pagedone.io/asset/uploads/1696246522.png" alt="Un" className="w-full h-full object-cover rounded-xl transition-transform hover:scale-110 scale-100 duration-300" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-black text-3xl font-extrabold">Website</h5>
              </div>
            </div>
            <div className="h-96 relative flex justify-center overflow-hidden rounded-xl cursor-pointer">
              <div className="w-full h-full absolute" />
              <img src="https://pagedone.io/asset/uploads/1696246551.png" alt="Un" className="w-full h-full object-cover rounded-xl transition-transform hover:scale-110 scale-100 duration-300" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-black text-3xl font-extrabold">Illustrations</h5>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 w-[90%] mx-auto">
            <div className="h-96 relative flex justify-center overflow-hidden rounded-xl cursor-pointer">
              <div className="w-full h-full absolute" />
              <img src="https://pagedone.io/asset/uploads/1696246565.png" alt="Un" className="w-full h-full object-cover rounded-xl transition-transform hover:scale-110 scale-100 duration-300" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-black text-3xl font-extrabold">Motion Graphics</h5>
              </div>
            </div>
            <div className="h-96 relative flex justify-center overflow-hidden rounded-xl cursor-pointer">
              <div className="w-full h-full absolute" />
              <img src="https://pagedone.io/asset/uploads/1696246551.png" alt="Un" className="w-full h-full object-cover rounded-xl transition-transform hover:scale-110 scale-100 duration-300" />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-black text-3xl font-extrabold">Display Ads</h5>
              </div>
            </div>

          </div>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex flex-wrap justify-start gap-6 md:gap-12">
              {testimonials.map((item) => (
                <button
                  key={item.category}
                  onClick={() => setActiveCategory(item.category)}
                  className={`md:text-lg sm:text-sm font-semibold ${activeCategory === item.category
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-500"
                    }`}
                >
                  {item.category}
                </button>
              ))}
            </div>

            {/* Testimonial Content */}
            <div className="w-full max-w-3xl">
              <blockquote className="text-xl sm:text-xl text-gray-700 mb-4 sm:mb-6">
                "{activeTestimonial.quote}"
              </blockquote>
              <p className="font-bold text-lg sm:text-xl mb-2">
                {activeTestimonial.name}
              </p>
              <p className="text-gray-800 text-base sm:text-lg">
                {activeTestimonial.title}
              </p>
            </div>
          </div>
        </div>

      </div>
      {/* <Service /> */}
      <AboutSec />
      <SliderComponent />
      <ChooseUs />
      <ContactForm />

    </div>
  );
};

export default Home;
