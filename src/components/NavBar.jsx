import React, { useState } from "react";
import logo from "../assets/logo.avif";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAuth = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="py-6 px-4 sm:px-10 md:px-14 lg:px-28 flex justify-between items-center bg-black text-white">
      {/* Logo Section */}
      <div className="w-24 sm:w-32 lg:w-40 flex items-center gap-2 cursor-pointer">
        <img className="w-16" src={logo} alt="logo" />
        <span className="text-md font-semibold sm:text-md lg:text-xl italic">
          ChatBot
        </span>
      </div>

      {/* Navbar List */}
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-4">
          <li className="px-4 cursor-pointer">Features</li>
          <li className="px-4 cursor-pointer">Pricing</li>
          <li className="px-4 cursor-pointer">About</li>
          <li className="px-4 cursor-pointer">Contact</li>
        </ul>
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={toggleAuth}
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <IoMdMenu 
          size={30} 
          className="cursor-pointer" 
          onClick={toggleMenu} 
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={toggleAuth}
        >
          {isSignedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col space-y-2 py-4 text-center">
            <li className="py-2 cursor-pointer border-b">Features</li>
            <li className="py-2 cursor-pointer border-b">Pricing</li>
            <li className="py-2 cursor-pointer border-b">About</li>
            <li className="py-2 cursor-pointer border-b">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
