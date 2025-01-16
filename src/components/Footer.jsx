// import React from 'react';

// export const Footer = () => {
//   return (
//     <div className="bg-gray-900 text-white text-center py-4 px-2 relative top-56">
//       <p className="text-sm md:text-base lg:text-lg">
//       © 2025 LuxuryaTours.in is running successfully.
//       </p>
//     </div>
//   );
// };


import React from 'react';
import Whatsapp from '../assets/whatsapp.png'
import Email from '../assets/gmail.png'
import Instagram from '../assets/instagram (1).png'
import Facebook from '../assets/facebook (1).png'
import Contact from '../assets/phone.png'
import Twitter from '../assets/twitter (1).png'
import Logo from '../assets/Luxurya-removebg-preview.png'


export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white py-8 relative top-56">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Company Name */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={Logo}
            alt="Luxurya Tours Logo"
            className="w-40 h-20 rounded-2xl"
          />
          <h1 className="text-2xl font-bold">Luxurya Tours</h1>
          <p className="text-sm mt-2">
            Bringing your dream vacations to life.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">
            <strong>Address:</strong> 123 Luxury Street, Hillview City, Country.
          </p>
          <p className="text-sm mt-2">
            <strong>Phone:</strong> +1-234-567-890
          </p>
          <p className="text-sm mt-2">
            <strong>Email:</strong> contact@luxuryatours.in
          </p>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4 text-2xl flex-wrap">
          <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <img src={Whatsapp} alt='Whatspp' className="w-8 h-8"/>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <img src={Facebook} alt='Whatspp' className="w-8 h-8"/>
             
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <img src={Instagram} alt='Whatspp' className="w-8 h-8"/>
              
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <img src={Twitter} alt='Whatspp' className="w-8 h-8"/>
              
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <img src={Email} alt='Whatspp' className="w-8 h-8"/>
              
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <img src={Contact} alt='Whatspp' className="w-8 h-8"/>
              
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-white/50 pt-4 text-center text-sm">
        © 2025 LuxuryaTours.in. All rights reserved.
      </div>
    </footer>
  );
};
