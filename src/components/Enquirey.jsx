import React from 'react'
import emailjs from '@emailjs/browser';

export const Enquirey = () => {
      
    

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
            
          },
          (error) => {
            console.error(error.text);
            alert('Failed to send enquiry.');
          }
        );
    };
  return (
    <div>
         {/* Enquiry Form Modal */}
     
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
                  onClick={() => window.location.href='/'}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 text-sm"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  )
}
