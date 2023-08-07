import React from 'react';
import banner1 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/banner/banner2.png'
import banner4 from '../../assets/banner/banner4.png'
import banner6 from '../../assets/banner/banner6.png'

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide4" className="text-yellow-300">
              ❮
            </a>
            <a href="#slide2" className="text-yellow-300">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide1" className="text-yellow-300">
              ❮
            </a>
            <a href="#slide3" className="text-yellow-300">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide2" className="text-yellow-300">
              ❮
            </a>
            <a href="#slide4" className="text-yellow-300">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
            <a href="#slide3" className="text-yellow-300">
              ❮
            </a>
            <a href="#slide1" className="text-yellow-300">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="absolute flex left-0 top-0 items-end text-white text:md md:text-3xl font-bold w-[90%] md:w-[30%]  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
        <div className="md:mb-6 mb-2 ml-2 md:ml-6">
          "Legends: Your One-Stop Action{" "}
          <span className="text-yellow-300">Figure Emporium</span> "
        </div>
      </div>
    </div>
  );
};

export default Banner;


