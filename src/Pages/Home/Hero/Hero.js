import Lottie from "lottie-react";
import React from "react";
import "./Hero.css";
import learning from "../../../assets/learning.json";

const Hero = () => {
  return (
    <div className="hero-container bg-blue-100">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="hero-title">
          <h5 className="text-orange-500 text-lg font-semibold">
            Are you ready to learn?
          </h5>
          <h1 className="text-3xl lg:text-6xl font-bold ">
            Find out the easy way <br /> on
            <span className="text-orange-500 ml-2">any schedule</span>
          </h1>
        </div>
        <div>
          <Lottie animationData={learning} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
