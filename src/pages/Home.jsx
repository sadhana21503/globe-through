import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/globethrough.png'; 
import storeImage from '../assets/images/appstore.png';
import Navbar from '../components/Navbar';
import indigo from '../assets/images/indigo.png';
import airindia from '../assets/images/air-india.png';
import goibibo from '../assets/images/goibibo.png';
import gopravasa from '../assets/images/gopravasa.png';
import makemytrip from '../assets/images/makemytrip.png';
import spicejet from '../assets/images/spicejet.png';
import tripadvisor from '../assets/images/tripadvisor.png';
import airindiaexpress from '../assets/images/airindia-express.png';
import Appstore from '../assets/images/App Store.png';
import googlePlay from '../assets/images/google.png';
import smallScreenImage from '../assets/images/appstore.png';
import HFooter from '../components/HFooter.jsx';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center h-full w-full"
          style={{ backgroundImage: `url(${backgroundImage})`, height: '120vh' }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-left w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 md:p-0 ml-0 md:ml-24 mt-24">
            <h1 className="text-y text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-semibold mb-4 font-times text-center md:text-left">
              One Click To Your Next Destination.
            </h1>
            <div className="flex mt-8 justify-center md:justify-start">
              <Link to="/coming">
              <img
                src={storeImage}
                alt="App Store and Google Play"
                className="w-full md:w-full lg:w-full h-10 md:h-12 lg:h-16 object-cover cursor-pointer mr-1 md:mr-10 mt-10"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 -mt-1 mt-20 mx-auto w-3/4 max-w-6xl bg-white rounded-3xl shadow-lg p-6 md:p-12 flex flex-col md:flex-row items-center justify-center">
        <form className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-2/3 md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <label htmlFor="name" className="block text-blue-900 font-semibold mb-2 font-urbanist text-sm md:text-base lg:text-lg ml-1 md:ml-3">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border rounded-lg p-2 md:p-3 w-full font-urbanist text-sm md:text-base lg:text-md"
            />
          </div>

          <div className="w-2/3 md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2 font-urbanist text-sm md:text-base lg:text-lg ml-1 md:ml-3">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border rounded-lg p-2 md:p-3 w-full font-urbanist text-sm md:text-base lg:text-md"
            />
          </div>

          <div className="w-2/3 md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <label htmlFor="phone" className="block text-blue-900 font-semibold mb-2 font-urbanist text-sm md:text-base lg:text-lg ml-1 md:ml-3">Phone Number</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your phone number"
              className="border rounded-lg p-2 md:p-3 w-full font-urbanist text-sm md:text-base lg:text-md"
            />
          </div>

          <button className="bg-g text-white px-8 md:px-12 lg:px-16 py-2 md:py-4 rounded-full text-sm md:text-base lg:text-xl w-2/3 md:w-1/5 font-abhaya mt-4 md:mt-0">
            Join Us
          </button>
        </form>
      </div>
      <div className="bg-white py-8 z-10 -mt-36">
        <h3 className="text-center text-gray-500 mb-12 mt-60"></h3>
        <div className="bg-[#F9F7F1] py-12 z-10 -mt-36">
          <h3 className="text-center text-[#2c4c61] mb-12 lg:mb-40 md:mb-20 text-xl md:text-2xl lg:text-4xl xl:text-4xl font-semibold font-abhaya">
            We're trusted by
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:mb-16 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-12 xl:gap-16 justify-items-center">
            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={indigo} alt="IndiGo" className="h-5 md:h-9 lg:h-9 xl:h-9 filter grayscale mb-5 " />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={airindia} alt="Air India" className="h-10 md:h-10 lg:h-12 xl:h-24 md:-mt-5 -mt-2 filter grayscale mb-5" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={spicejet} alt="SpiceJet" className="h-8 md:h-10 lg:h-12 xl:h-14 filter grayscale mb-5" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={airindiaexpress} alt="Air India Express" className="h-8 md:h-10 lg:h-12 xl:h-14 filter grayscale mb-5" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={gopravasa} alt="Go Pravasa" className="h-8 md:h-10 lg:h-12 xl:h-14 filter grayscale mb-5 md:mt-10" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={makemytrip} alt="Make My Trip" className="h-8 md:h-10 lg:h-12 xl:h-16 filter grayscale md:mt-10" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={goibibo} alt="Goibibo" className="h-8 md:h-10 lg:h-12 xl:h-14 filter grayscale md:mt-10" />
            </div>

            <div className="hover:scale-125 transform transition duration-300 ease-in-out">
              <img src={tripadvisor} alt="Tripadvisor" className="h-8 md:h-10 lg:h-12 xl:h-14 filter grayscale md:mt-10" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-gradient-to-b from-teal-500 to-[#122a2b] py-16 px-16">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

    <div className="flex flex-col justify-start md:order-1 order-1">
      <h2 className="text-white text-4xl md:text-4xl lg:text-5xl font-bold mb-6 text-center md:mt-24 font-times md:m-10 md:leading-5">
        Seamless Bookings, Unforgettable Journeys.
      </h2>

      <p className="text-gray-300 font-thin font-abhaya text-2xl leading-10 m-6 mb-6 text-center mt-16 hidden md:block">
        We focus on making your bookings seamless and rewarding every time. Unlock extra perks and personalized recommendations with
        <span className="text-teal-200 font-abhaya text-2xl"> Globe Through.</span>
      </p>

      <div className="relative mt-16 text-xl font-abhaya hidden md:block">
        <input
          type="email"
          placeholder="E-mail"
          className="w-3/5 p-3 rounded-3xl border-2 border-gray-400 focus:outline-none py-5 bg-gray-300 ml-14"
        />
        <button className="absolute right-10 top-0 h-full bg-teal-500 text-white px-8 py-5 rounded-3xl">
          Subscribe
        </button>
      </div>
      <div className="flex md:flex-col items-center mt-6 hidden md:flex">
      <Link to="/coming">
      <img src={googlePlay} alt="Google Play" className="h-19 cursor-pointer mb-10 mt-20" />
        <img src={Appstore} alt="App Store" className="h-18 cursor-pointer" />
        </Link>
      </div>
    </div>

    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 md:ml-10 md:order-2 order-2">
      <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
        <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
          EMI Option for Ticket Booking
        </h3>
        <p className="text-gray-600 text-center m-4 leading-8 text-xl">
          Flexible payment options allowing users to pay for tickets in installments, making it easier to manage travel expenses.
        </p>
      </div>
      <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
        <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
                24-Hour Clock Display
              </h3>
              <p className="text-gray-600 text-center m-4 leading-8 text-xl">
                A 24-hour clock format is used throughout the app for clear and consistent booking times across time zones, ensuring precise scheduling.
              </p>
            </div>
            <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
            <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
          Loyalty and Rewards Programs
            </h3>
            <p className="text-gray-600 text-center m-4 leading-8 text-xl">
              Features to earn points or rewards for frequent bookings, offering added value to loyal customers.
            </p>
          </div>
          <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
          <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
          Multi-Language and Currency Support
            </h3>
            <p className="text-gray-600 text-center m-4 leading-8 text-xl">
              Options for different languages and currencies to cater to a global audience.
            </p>
          </div>
          <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
          <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
          Integration with Travel Services
            </h3>
            <p className="text-gray-600 text-center m-4 leading-8 text-xl">
              Connections with other travel services like accommodation or car rentals for a complete travel experience.
            </p>
          </div>
          <div className="bg-white  py-5 px-1 w-full md:px-6 md:py-16 rounded-3xl shadow-lg">
        <h3 className="text-gray-800  text-xl md:text-xl font-bold mb-2 text-center mt-4">
          Personalized Recommendations
            </h3>
            <p className="text-gray-600 text-center m-4 leading-8 text-xl">
              Tailored suggestions based on user preferences and past bookings to enhance the user experience.
            </p>
          </div>
    </div>

    <div className="flex flex-col items-center mt-6 md:hidden order-3 relative w-full">
      <div className="relative w-full mt-1">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full p-3 rounded-3xl border-2 border-gray-400 focus:outline-none py-5 bg-gray-300 relative z-0"
        />
        <button className="absolute top-0 right-0 h-full bg-teal-500 text-white px-8 py-5 rounded-3xl z-10">
          Subscribe
        </button>
      </div>
      <div className="flex flex-row items-center mt-6">
        <img src={smallScreenImage} alt="Different Image" className="h-10 mt-10" />
      </div>
    </div>
  </div>
</div>
<HFooter/>
    </>
  );
};

export default Home;
