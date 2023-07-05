import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
 
    <header className="text-white bg-gray-700 body-font">

    <div className="bg-[#8a4af3] text-end text-white p-1 text-sm">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className="font-sans"
        >
          Hurry up, it's 90% off now
        </marquee>
      </div>
     
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-5 text-2xl">Car Max</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 cursor-pointer hover:text-yellow-500">Home</Link>
          <Link to="/category" className="mr-5 cursor-pointer hover:text-yellow-500">Categories</Link>
          <Link to="/contact" className="mr-5 cursor-pointer hover:text-yellow-500">Contact us</Link>
          <Link to="/about" className="mr-5 cursor-pointer hover:text-yellow-500">About</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Sign in/Sign Up
         
        </button>
      </div>
    </header>
  
    </>
  );
};

export default Header;
