import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import bgimage from '../assets/images/Background.png';

const Teamup = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="w-full">
        <img 
          src={bgimage} 
          alt="Header" 
          className="w-full object-cover"
          style={{ height: '130px', maxHeight: '150px' }} 
        />
      </div>

      <div className="flex-grow flex flex-col items-center mx-auto px-4 md:px-8 lg:px-10 py-10 md:py-16 lg:py-20 max-w-full">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope text-gray-500 font-bold mt-8 mb-6 md:mb-8 ml-4 lg:mb-10 text-left md:ml-10 lg:ml-20">
            Team up
          </h2>
          <p className="leading-8 md:leading-9 lg:leading-10 text-lg md:text-2xl lg:text-3xl ml-4 text-left mb-6 md:mb-6 lg:mb-8 md:ml-16 lg:ml-28">
            If you are interested in teaming up with Globe Through, please answer a few questions, and we will reach out to you.
          </p>

          <form className="w-full md:w-3/4 lg:w-full lg:max-w-lg text-left mt-10 md:mt-16 lg:mt-20 ml-2">
            <div className="mb-4 md:ml-16 lg:ml-28 mt-8 text-gray-600">
              <label className="block text-sm font-bold mb-2" htmlFor="fullname">Full Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                id="fullname" 
                placeholder="Enter name" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4 md:ml-16 lg:ml-28 mt-8 text-gray-600">
              <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
              <input 
                type="text" 
                id="phone" 
                placeholder="Enter your Phone number" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4 md:ml-16 lg:ml-28 mt-8 text-gray-600">
              <label className="block text-sm font-bold mb-2" htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your E-mail" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="text-center mt-5">
              <button 
                type="submit" 
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-10 md:px-20 lg:px-28 rounded-xl mt-8 mb-10"
              >
                TEAM UP
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Teamup;
