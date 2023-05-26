import React from 'react';
import photo1 from '../../assets/gallery/marvel.jpg'
import photo2 from '../../assets/gallery/starwars.jpg'
import photo3 from '../../assets/gallery/optimas.jpg'
import photo4 from '../../assets/gallery/spiderman.jpg'
import photo5 from '../../assets/gallery/ironman.jpg'



const GallerySection = () => {

  return (
    <div className="my-20 mx-10">
      <h3 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">"Featured Action Figures Gallery"</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2 mx-auto">
        <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
          <figure>
            <img className=" rounded-2xl" src={photo1} />
          </figure>
        </div>
        <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
          <figure>
            <img className=" rounded-2xl" src={photo2} />
          </figure>
        </div>
        <div className=" md:w-[80%] w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
          <figure>
            <img className=" rounded-2xl" src={photo3} />
          </figure>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around gap-6 md:gap-2 md:w-[90%]  mx-auto mt-6">
        <div className=" md:w-96 w-full h-auto hover:scale-110 border-yellow-10 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
          <figure>
            <img className=" rounded-2xl" src={photo4} />
          </figure>
        </div>

        <div className=" md:w-96 w-full h-auto hover:scale-110 border-gray-200 border-y-4 p-2 hover:border-y-4 hover:border-yellow-300  transition-transform duration-300">
          <figure>
            <img className=" rounded-2xl" src={photo5} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;