import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import IndustrySec from "../components/IndustrySec";
import ProjectComp from "../components/ProjectComp";
import Service from "../components/Service";
import ChooseUs from "../components/ChooseUs";
import ContactForm from "../components/ContactForm";
import { IoStarSharp } from "react-icons/io5";
import { LuCircleArrowRight } from "react-icons/lu";

const Home = () => {
  return (
    <div>

      <Slider />
      <IndustrySec />
      <ProjectComp />
      <Service />
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <div className="pb-10">
                <div className="flex gap-2">
                  <IoStarSharp className="text-primaryRed text-3xl" />
                  <IoStarSharp className="text-yellow-500 text-3xl" />
                  <p className="text-[40px] text-black font-bold">About Us</p>
                  <IoStarSharp className="text-yellow-500 text-3xl" />
                  <IoStarSharp className="text-primaryRed text-3xl" />
                </div>
              </div>
              <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
              <div>
                <ul className="font-normal text-sm">
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                  <div className="flex mb-3">
                    <span className="text-xl text-yellow-500"><LuCircleArrowRight /></span>
                    <li className="ml-2">Swastikaa provides machinery for new business setups, partnering with top suppliers. </li>
                  </div>
                </ul>
              </div>
              <div className="mt-10">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded">Get More</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
          </div>
        </section>
      </div>
      <ChooseUs />
      <ContactForm />
    </div>
  );
};

export default Home;
