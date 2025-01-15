import React from 'react';
import Beaches from '../assets/Beach.avif';
import Logos from '../assets/Luxurya-removebg-preview.png';
import { Vacction } from './Vacction';
import { International } from './International';
import { Luxuryatours } from './Luxuryatours';
import { Explore } from './Explore';
import { Footer } from './Footer';


export const Header = () => {


  return (
    <div>
      {/* Beach image section */}
      <div>
        <img src={Beaches} alt="Beach" className="w-full object-cover" />
      </div>

      {/* Sticky header for logos */}
      <div className="w-full h-24 bg-white items-center flex justify-between sticky top-0 shadow-md z-10 px-4 md:px-8">
        <div>
          <img
            src={Logos}
            alt="logo"
            className="h-20 md:h-24 object-contain"
          />
        </div>
        <div>
          <p
           onClick={()=>window.location.href='/enquiry'}
            className="cursor-pointer text-blue-500 hover:underline text-sm md:text-base"
          >
            Enquiry
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8">
        <Vacction />
        <International />
        <Luxuryatours />
        <Explore />
        <Footer />
      </div>


    </div>
  );
};





