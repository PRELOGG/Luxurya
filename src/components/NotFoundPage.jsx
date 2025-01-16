import React from 'react';
import { useNavigate } from 'react-router-dom';
import Not from '../assets/404-error-removebg-preview.png'


export const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      {/* 404 Image */}
      <div className="w-3/4 md:w-1/2 lg:w-1/3">
        <img
          src={Not}
          alt="404 Not Found"
          className="w-full h-auto"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-4xl md:text-6xl font-extrabold mt-8 text-center">
        Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mt-4 text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Go Home Button */}
      <button
        onClick={handleGoHome}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};
