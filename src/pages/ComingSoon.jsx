import React from 'react';
import backgroundImage from '../assets/images/cs.png';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
          COMING SOON!
        </h1>
        
        <hr className="border-t-2 border-black w-full max-w-xs mx-auto mb-4 mt-10" />

        <p className="text-lg sm:text-xl md:text-2xl text-black mb-6">
    39 Days 10 Hours 03 Minutes 30 Seconds         </p>

        <hr className="border-t-2 border-black w-full max-w-xs mx-auto mb-10" />

        <Link to="/">
          <button className="px-6 py-2 border-2 border-black text-black font-bold rounded hover:bg-black hover:text-white transition duration-300">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
