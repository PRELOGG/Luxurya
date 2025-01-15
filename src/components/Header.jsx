import React, { useState } from 'react';
import Beaches from '../assets/Beach.avif';
import Logos from '../assets/Luxurya-removebg-preview.png';
import { Vacction } from './Vacction';
import { International } from './International';
import { Luxuryatours } from './Luxuryatours';
import { Explore } from './Explore';
import { Footer } from './Footer';
import emailjs from '@emailjs/browser';

export const Header = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        e.target,
        'your_public_key' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Enquiry sent successfully!');
          setShowEnquiry(false);
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send enquiry.');
        }
      );
  };

  return (
    <div>
      {/* Beach image section */}
      <div>
        <img src={Beaches} alt="Beach" className="w-full h-28 object-cover" />
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
            onClick={() => setShowEnquiry(true)}
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

      {/* Enquiry Form Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md glass-effect">
            <h2 className="text-xl font-extrabold mb-4 text-center uppercase">Luxurya Tours</h2>
            <form onSubmit={handleEnquirySubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm">Phone</label>
                <input
                  type="text"
                  name="user_phone"
                  className="w-full border rounded px-3 py-2 text-sm"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm">
                  Bus Booking Details
                </label>
                <textarea
                  name="message"
                  className="w-full border rounded px-3 py-2 text-sm"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowEnquiry(false)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 text-sm"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};





