import React from "react";
import { Link } from "react-router-dom";
import hero from "../Zimages/1.1.jpg";
import heroMobile from "../Zimages/hero mobile.jpg";

const Hero = () => {
  return (
    <div className="pt-24 h-screen w-full flex justify-center font-montserrat">
      <img
        src={hero}
        alt="hero"
        className="hidden top-6.5 md:flex md:w-full md:h-full"
      />
      <img src={heroMobile} alt="hero" className="md:hidden top-6.5 w-full" />
      <div className="mx-auto absolute mt-24">
        <h1 className="md:text-6xl text-3xl text-center text-mpurple mb-12 md:mb-16 font-extrabold">
          Exceeding Expectations <br></br>One Property at A Time
        </h1>
        <div className="grid grid-cols-2 px-24 gap-x-4 md:gap-x-0">
          <div className="mx-auto">
            <Link
              to="/contact"
              className="text-center px-4 md:px-10 py-2 text-mpurple font-semibold border-3 border-mpurple rounded-lg text-sm md:text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
            >
              Contact Us
            </Link>
          </div>
          <div className="mx-auto">
            <Link
              to="/about"
              className="text-center px-4 md:px-10 py-2 text-mpurple font-semibold border-3 border-mpurple rounded-lg text-sm md:text-2xl hover:bg-mpurple hover:text-white transition duration-300 ease-in out "
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
