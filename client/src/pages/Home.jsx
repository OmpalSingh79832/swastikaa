import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import IndustrySec from "../components/IndustrySec";
import ProjectComp from "../components/ProjectComp";
import Service from "../components/Service";
import ChooseUs from "../components/ChooseUs";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <IndustrySec />
      <ProjectComp />
      <Service />
      <div>

        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
              <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
              <div>
                <ul className="font-normal text-base">
                  <li>Market Research</li>
                  <li>Detailed Project Report</li>
                  <li>Product identification</li>
                  <li>Industry Automation</li>
                  <li>Design & Development</li>
                </ul>
              </div>
              <div className="mt-10">
                <button className="bg-black px-16 py-4 rounded-xl text-white font-semibold">Get More</button>
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
      <Footer />
    </div>
  );
};

export default Home;
