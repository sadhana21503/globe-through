import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/images/gt-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-transparent absolute w-full z-10">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Globe Through Logo" className="h-16 ml-4 mt-2 sm:h-20 md:h-24 sm:ml-10 md:ml-20" />
      </div>
      <div className="md:flex lg:flex space-x-4 sm:space-x-10 items-center mr-4 sm:mr-10 md:mr-32 text-sm sm:text-lg md:text-xl mt-2 font-medium hidden sm:flex">
        <Link to="/aboutus" className="text-teal-600 font-semibold font-urbanist hover:underline">
          Our Story
        </Link>
        <Link to="/joinus">
          <button className="bg-g text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full hover:bg-teal-500 hover:scale-110 font-abhaya">
            Team up
          </button>
        </Link>
      </div>
      <div className="sm:hidden flex items-center">
        <FiMenu className="text-gray-100 text-3xl" onClick={toggleMenu} />
      </div>
      {isOpen && (
        <div className="fixed top-20 right-0.5 bg-teal-500 shadow-lg rounded-lg p-4 w-full ">
          <Link
            to="/aboutus"
            className="block text-gray-100 font-urbanist hover:underline py-2 border-b border-white"
            onClick={toggleMenu}
          >
            Our Story
          </Link>
          <Link
            to="/joinus"
            className="block text-gray-100 font-urbanist hover:underline py-2 border-b border-white"
            onClick={toggleMenu}
          >
            Team Up
          </Link>
          <div className="flex flex-col space-y-4">
            <div className="border-white"></div>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-teal-500">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-teal-500">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-teal-500">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
