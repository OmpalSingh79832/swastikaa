import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import IndustrySec from "../components/IndustrySec";
import ProjectComp from "../components/ProjectComp";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <IndustrySec />
      <ProjectComp />
      <Service />
      <div>
        <h1>This is home page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
