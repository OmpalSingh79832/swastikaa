import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div>
        <h1>This is home page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
