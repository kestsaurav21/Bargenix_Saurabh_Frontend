import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.avif";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAuth = () => {
    setIsSignedIn(!isSignedIn);
  };

  return (
    <div className="py-6 px-4 sm:px-10 md:px-14 lg:px-28 flex justify-between items-center bg-black text-white relative">
      {/* Logo Section */}
      <div onClick={() => navigate('/home')}
      className="w-24 sm:w-32 lg:w-40 flex items-center gap-2 cursor-pointer">
        <img className="w-16" src={logo} alt="logo" />
        <span className="text-md font-semibold sm:text-md lg:text-xl italic">
          ChatBot
        </span>
      </div>

      {/* Navbar List */}
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-4">
          <li className="px-4 cursor-pointer">
            <Link to="/features">Features</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <IoMdMenu
          size={30}
          className="cursor-pointer"
          onClick={toggleMenu}
        />
       
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg z-50">
          <ul className="flex flex-col space-y-2 py-4 text-center">
            <li className="py-2 cursor-pointer border-b">
              <Link to="/features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
            </li>
            <li className="py-2 cursor-pointer border-b">
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li className="py-2 cursor-pointer border-b">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li className="py-2 cursor-pointer border-b">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
