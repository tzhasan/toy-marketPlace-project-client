import React from 'react';
import image from '../../assets/heros/extrasection1.png' 

const ExtraSection1 = () => {
  return (
    <div className="flex flex-col items-center md:flex-row my-4 md:my-10 ">
      <div className="md:w-1/2 w-[80%] md:p-28">
        <img
          className="outline outline-offset-4 outline-gray-300 transition-transform duration-300 md:hover:scale-110"
          src={image}
          alt=""
        />
      </div>

      <div className="md:w-1/2 w-[80%]">
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