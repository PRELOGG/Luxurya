import React from 'react';
import Connectback from '../assets/An Bang Beach in Hoi An, Vietnam.avif';
import Phone from '../assets/instagram.png';

export const Explore = () => {
  return (
    <div className="relative top-24 w-full h-auto">
      {/* Background Image */}
      <img
        src={Connectback}
        alt="loading..."
        className="w-full h-auto object-cover"
      />

      {/* Overlay Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={Phone}
          alt="Instagram"
          className="w-1/2 max-w-xs md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto"
        />
      </div>
    </div>
  );
};
