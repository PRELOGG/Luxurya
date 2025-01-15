import React from 'react';
import Lucky from '../assets/Luxurya.avif';

export const Luxuryatours = () => {
  return (
    <>
    <div className="w-full flex items-center justify-center p-10 bg-gray-100">
      {/* Image and content container */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
        {/* Background Image */}
        <img src={Lucky} alt="Luxurya Tours" className="w-full h-56" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-5 md:p-8 lg:p-10 bg-black/50 text-white">
          {/* Title */}
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Luxurya Tours
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-6">
            <p className="max-w-md md:max-w-lg lg:max-w-xl text-sm md:text-base lg:text-lg leading-relaxed">
              If you have any questions, click "Explore" to discover more about Luxurya Tours.
            </p>
          </div>

          {/* Explore Button */}
          <div className="w-28 md:w-32 h-10 border-2 border-white cursor-pointer flex items-center justify-center rounded-2xl bg-white/70 hover:bg-white/90 font-bold" onClick={()=>window.location.href='/enquiry'}>
            <button className="text-black">Explore</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};
