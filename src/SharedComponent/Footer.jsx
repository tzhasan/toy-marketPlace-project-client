import React from "react";
import logo from "../assets/icons/superhero.png";
import logo1 from "../assets/icons/google.png";
import logo2 from "../assets/icons/facebook.png";
import logo3 from "../assets/icons/linkedin.png";

const Footer = () => {
  return (
    <div className="flex justify-between gap-4 md:gap-0 p-5 bg-gray-800 opacity-80 text-white">
      <div className="flex flex-col items-center md:w-1/3">
        <img className="w-[15%]" src={logo} alt="" />

        <p className="text-yellow-300 font-bold text-xl">LEGENDS</p>
        <p>since 2015</p>
      </div>
      <div className="flex flex-col md:w-1/3 text-start">
        <span className="font-bold text-sm md:text-lg">Services</span>
        <div className="flex flex-col text-[10px] md:text-sm">
          <div className="">
            <p>Frequently Asked Questions (FAQs)</p>
            <p>Contact form or customer support email</p>
            <p>Accepted payment methods (e.g., credit cards, PayPal)</p>
            <p>
              Statement indicating the ownership of content and intellectual
              property rights
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-1/5 space-y-2 md:ml-36 p-4">
        <p>Connect us with :</p>
        <div className="flex gap-2">
          <img className="md:w-[10%] w-6" src={logo2} alt="" />
          <img className="md:w-[10%] w-6" src={logo3} alt="" />
          <img className="md:w-[10%] w-6" src={logo1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
