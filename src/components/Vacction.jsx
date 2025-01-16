import React from 'react';
import Tree from '../assets/Trees between Hills.avif';
import Vacctions from '../assets/Vacation.avif';
export const Vacction = () => {
return (
    <>
    <div className="w-full flex flex-col md:flex-row bg-white/20 items-center">
      {/* Left section */}
      <div className="w-full md:w-1/2 relative">
        <img src={Tree} alt="loading..." className="w-full p-0" />
        {/* Overlay text on image */}
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-10 bg-black/50 text-white">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Nature and Serenity</h1>
            <p className="mt-2 text-sm md:text-base lg:text-lg">
              Escape into the beauty of nature, where the hills meet the skies and tranquility resides.
            </p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 relative">
        <div className="sticky top-0 w-full">
          <img src={Vacctions} alt="loading..." className="w-full p-5 " />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 md:p-8 lg:p-10 text-white bg-black/25 blur-0 opacity-56">
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
                Family Vacation
              </h2>
            </div>

            {/* Description */}
            <div className="text-center mb-6">
              <p className="max-w-md md:max-w-lg lg:max-w-xl text-sm md:text-base lg:text-lg">
              This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about, and add an engaging image or video.
              </p>
            </div>

            {/* Explore Button */}
            <div className="w-28 md:w-32 h-10 border-2 border-white cursor-pointer flex items-center justify-center rounded-2xl hover:bg-white/90 font-bold" onClick={()=>window.location.href='/enquiry'}>
              <button className="text-black">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    
    </>
  );
};
