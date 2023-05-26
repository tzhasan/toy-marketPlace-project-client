import React, { useEffect } from "react";
import Navbar from "../../SharedComponent/Navbar";
import Banner from "./Banner";
import GallerySection from "./GallerySection";
import ShopByCategory from "./ShopByCategory";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../Hooks/useTitle";
import ExtraSection1 from "./ExtraSection1";
import ExtraSection2 from "./ExtraSection2";

// marquee
import Marquee from "react-fast-marquee";
// marquee

const HomePage = () => {
  useTitle("Home");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="md:mt-[-86px]">
        <Banner></Banner>
      </div>
      <Marquee className="md:text-3xl text-lg md:py-2 py-1 bg-gray-300">
        Welcome to our Action Figure Legends! Explore a World of Adventure
        and Collectible Figures!
        Welcome to our Action Figure Legends! Explore a World of Adventure
        and Collectible Figures!
      </Marquee>
      <div data-aos="zoom-in">
        <GallerySection></GallerySection>
      </div>
      <div data-aos="zoom-in" className="my-10">
        <ShopByCategory></ShopByCategory>
      </div>
      <div data-aos="fade-left">
        <ExtraSection1></ExtraSection1>
      </div>
      <div data-aos="fade-right">
        <ExtraSection2></ExtraSection2>
      </div>
    </div>
  );
};

export default HomePage;
