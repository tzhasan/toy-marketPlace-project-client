import React from 'react';
// import image from '../../assets/heros/extrasection1.png' 
import image from '../../assets/animate/animation_ll0qt9y0.json' 
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const ExtraSection1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: image,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
   useEffect(() => {
     AOS.init({ duration: 1000 });
   }, []);
  return (
    <div className="flex flex-col-reverse items-center md:flex-row my-4 md:my-10 ">
      <div data-aos="fade-right" className="md:w-1/2 w-50% md:ml-20 md:p-28">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>

      <div
        data-aos="fade-left"
        className="md:w-1/2 w-[90%] text-center md:text-left md:pl-20"
      >
        <h1 className="text-3xl md:text-5xl my-4">RECENT NEWS</h1>
        <div className="mb-2 md:mb-4 text-gray-500 hover:text-gray-700 transition-transform duration-300 hover:scale-105">
          <h4 className="md:text-lg text-md ">SPECIAL</h4>
          <p>The Wave Crib in Natural Wood</p>
        </div>
        <div className="mb-2 md:mb-4 text-gray-500 hover:text-gray-700 transition-transform duration-300 hover:scale-105 ">
          <h4 className="md:text-lg text-md ">WOODEN TOYS</h4>
          <p>Deep Sea Party Wooden Toys</p>
        </div>
        <div className="mb-2 md:mb-4 text-gray-500 hover:text-gray-700 transition-transform duration-300 hover:scale-105">
          <h4 className="md:text-lg text-md ">SPECIAL</h4>
          <p>Montessori Interactive Toy for 2 Year Old</p>
        </div>
        <div className="mb-2 md:mb-4 text-gray-500 hover:text-gray-700 transition-transform duration-300 hover:scale-105">
          <h4 className="md:text-lg text-md ">BEDS</h4>
          <p>BPA Free Silicone Baby Feeding Set</p>
        </div>
        <div className="mb-2 md:mb-4 text-gray-500 hover:text-gray-700 transition-transform duration-300 hover:scale-105">
          <h4 className="md:text-lg text-md ">SPECIAL</h4>
          <p>The Wave Crib in Natural Wood</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection1;