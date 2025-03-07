import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const MasterHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold">LOGO</div>
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
          <li><a href="#" className="block hover:text-gray-400">Home</a></li>
          <li><a href="#" className="block hover:text-gray-400">About Us</a></li>
          <li><a href="#" className="block hover:text-gray-400">Registration</a></li>
          <li><a href="#" className="block hover:text-gray-400">Staff</a></li>
          <li className="relative group">
            <a href="#" className="block hover:text-gray-400">Gallery</a>
            <ul className="absolute hidden bg-gray-800 text-white group-hover:block mt-2 p-2 space-y-2">
              <li><a href="#" className="block hover:text-gray-400">Photo</a></li>
              <li><a href="#" className="block hover:text-gray-400">Video</a></li>
            </ul>
          </li>
          <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default MasterHeader;
