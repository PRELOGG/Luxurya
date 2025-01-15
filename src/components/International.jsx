import React from 'react';
import Internationals from '../assets/internatinal.png';

export const International = () => {
  return (
    <>
    <div className="w-full flex flex-col-reverse md:flex-row bg-white/20 items-center">
      {/* Left section */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center p-5 md:p-8 lg:p-10 text-black order-1 md:order-none">
        {/* Overlay content */}
        <div className="text-center">
          {/* Title */}
          <div className="p-5">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold">
            College Tours
             &
            International Tours
            </h2>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="max-w-md md:max-w-lg lg:max-w-xl text-sm md:text-base lg:text-lg">
            This is the space to introduce the business and what it has to offer. Define the qualities and values that make it unique.
            </p>
          </div>

          {/* Explore Button */}
          <div className="flex justify-center">
          <div className="w-28 md:w-32 h-10 border-2 border-black cursor-pointer flex items-center justify-center rounded-2xl hover:bg-black/25 font-bold" onClick={()=>window.location.href='/enquiry'}>
            <button className="text-black">Explore</button>
          </div>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 relative order-none md:order-1">
        <div className="sticky top-0 w-full">
          <img src={Internationals} alt="loading..." className="w-full" />
        </div>
      </div>
    </div>

    
    </>

  );
};
