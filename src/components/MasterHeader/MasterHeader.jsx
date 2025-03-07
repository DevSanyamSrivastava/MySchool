import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold">
      <NavLink to="/">
          <img src={logo} alt="Logo" className="h-18 w-auto" /> 
        </NavLink>
      </div>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <nav
        className={`w-full md:w-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 bg-gray-900 md:bg-transparent w-full md:w-auto">
          <li><NavLink to="/" className="block hover:text-gray-400">Home</NavLink></li>
          <li><NavLink to="/about" className="block hover:text-gray-400">About Us</NavLink></li>
          <li><NavLink to="/registration" className="block hover:text-gray-400">Registration</NavLink></li>
          <li><NavLink to="/staff" className="block hover:text-gray-400">Staff</NavLink></li>
          <li className="relative group">
            <NavLink to="#" className="block hover:text-gray-400">Gallery</NavLink>
            <ul className="absolute hidden bg-gray-800 text-white group-hover:block mt-2 p-2 space-y-2">
              <li><NavLink to="/gallery/photo" className="block hover:text-gray-400">Photo</NavLink></li>
              <li><NavLink to="/gallery/video" className="block hover:text-gray-400">Video</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="/contact" className="block hover:text-gray-400">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
