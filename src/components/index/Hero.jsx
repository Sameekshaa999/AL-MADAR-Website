import React from "react";
import { Link } from "react-router-dom";
import image from "../Zimages/1.1.jpg";

const Hero = () => {
  return (
    <div className="pt-24 h-screen w-full flex justify-center font-montserrat">
      <img src={image} alt="hero" className="w-screen h-full top-6.5" />
      <div className="mx-auto absolute lg:mt-24">
        <h1 className="lg:text-6xl md:text-3xl sm:text-1xl text-1xl text-mpurple mb-14 font-extrabold">
          Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <div className="grid grid-cols-2 px-24">
          <div className="mx-auto">
            <Link
              to="/contact"
              className="flex item-center px-10 py-2 text-mpurple font-semibold border-3 border-mpurple rounded-lg text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
            >
              Contact Us
            </Link>
          </div>
          <div className="mx-auto">
            <Link
              to="/about"
              className="flex item-center px-10 py-2 text-mpurple font-semibold border-3 border-mpurple rounded-lg text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
