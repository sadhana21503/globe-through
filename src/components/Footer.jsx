import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import startup from '../assets/images/startup.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#28655c] to-[#000000] text-white">
      <div className="container mx-auto py-20 md:py-28 text-center px-6 md:px-0">
        <h2 className="text-3xl md:text-6xl font-medium font-manrope mb-3 leading-snug">
          Booking Made Simple
        </h2>
        <h2 className="text-3xl md:text-6xl font-medium font-manrope leading-snug">
          Adventures Made Possible.
        </h2>
        <p className="mt-6 text-bold md:text-2xl">Download the App Now</p>
        <div className="flex justify-center mt-8">
        <Link to="/coming"><button className="w-12 h-12 md:w-14 md:h-14 border border-white rounded-full flex items-center justify-center">
            <span className="text-lg md:text-xl">&rarr;</span>
          </button></Link>
        </div>
      </div>
      <div className="bg-[#01493E] mt-10">
        <div className="container md:mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-10 md:px-20 py-10 text-gray-300">
          <div className="flex-1 md:flex md:items-center justify-start items-start md:justify-start space-x-8 md:space-x-20">
            <img src={startup} alt="Startup India" className="h-10 md:h-12 md:ml-10" />
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:max-w-2/3 md:pl-8 mx-auto md:mr-20 md:ml-64">
            <p className="text-xs md:text-sm text-left md:text-left font-manrope leading-relaxed">
              Globe Through is a cutting-edge ticket booking application created by Websort to revolutionize the way people book tickets for travel, events, and more. Designed with user convenience in mind, Globe Through simplifies the booking process and offers a seamless experience for users around the globe.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#01493E] p-4 md:p-4">
        <p className="text-sm md:text-xl font-semibold text-left ml-5 md:text-left sm:p-5 md:ml-20 font-manrope">
          Privacy Policy and Terms of Service
        </p>
      </div>
      <hr className="border-t border-white" />
      <div className="bg-[#01493E] py-4 md:py-5">
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-20">
          <p className="text-xs md:text-lg text-left md:text-left font-manrope py-2 md:py-5 ml-4 md:ml-8">
            © 2024 Websort. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0 p-2 md:mr-10 ml-2 text-2xl md:text-5xl">
            <FaInstagram className="hover:text-gray-400" />
            <FaTwitter className="hover:text-gray-400" />
            <FaLinkedinIn className="hover:text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
