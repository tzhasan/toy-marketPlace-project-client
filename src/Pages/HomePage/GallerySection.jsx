import React from 'react';
import photo1 from '../../assets/gallery/marvel.jpg'
import photo2 from '../../assets/gallery/starwars.jpg'
import photo3 from '../../assets/gallery/optimas.jpg'
import photo4 from '../../assets/gallery/spiderman.jpg'
import photo5 from '../../assets/gallery/ironman.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const GallerySection = () => {
 useEffect(() => {
   AOS.init({ duration: 1000 });
 }, []);
  return (
    <div>
      <section className=" text-gray-600 body-font">
        <div
          className=" container px-5 py-24 mx-auto flex flex-wrap"
          bis_skin_checked={1}
        >
          <div
            className=" w-full md:mb-20 mb-6 text-center"
            bis_skin_checked={1}
          >
            <h1 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">
              Featured Gallery
            </h1>
            <p className="md:w-[50%] w-[90%] mx-auto leading-relaxed text-base">
              Welcome to our enchanting world of toys, where creativity knows no
              bounds and playtime becomes an extraordinary adventure. Our
              Featured Gallery is a curated collection that celebrates the magic
              of childhood, offering a carefully selected array of toys that
              ignite imagination, spark curiosity, and bring smiles to little
              faces.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1" bis_skin_checked={1}>
            <div className="flex flex-wrap w-1/2" bis_skin_checked={1}>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-1/2"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={photo1}
                />
              </div>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-1/2"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={photo2}
                />
              </div>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-full"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={photo3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2" bis_skin_checked={1}>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-full"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={photo4}
                />
              </div>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-1/2"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={photo5}
                />
              </div>
              <div
                data-aos="zoom-in"
                className="md:p-2 p-1 w-1/2"
                bis_skin_checked={1}
              >
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={photo1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GallerySection;
    // <div className="my-20 mx-10">
    //   <h3 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">"Featured Action Figures Gallery"</h3>
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 mx-auto">
    //     <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
    //       <figure>
    //         <img className=" rounded-2xl" src={photo1} />
    //       </figure>
    //     </div>
    //     <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
    //       <figure>
    //         <img className=" rounded-2xl" src={photo2} />
    //       </figure>
    //     </div>
    //     <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
    //       <figure>
    //         <img className=" rounded-2xl" src={photo3} />
    //       </figure>
    //     </div>
    //   </div>
    //   <div className="flex md:flex-row flex-col justify-around gap-6 md:gap-2 md:w-[90%]  mx-auto mt-6">
    //     <div className=" md:w-96 w-full h-auto hover:scale-110 border-yellow-10 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
    //       <figure>
    //         <img className=" rounded-2xl" src={photo4} />
    //       </figure>
    //     </div>

    //     <div className=" md:w-96 w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
    //       <figure>
    //         <img className=" rounded-2xl" src={photo5} />
    //       </figure>
    //     </div>
    //   </div>
    // </div>