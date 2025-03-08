import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../../assets/Logo.png';

export function Nav(){
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".gallery-menu")) {
        setIsGalleryOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none flex justify-end"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Menu */}
      <nav
        className={`w-full md:w-auto transition-all duration-300 ${isOpen ? "block" : "hidden"} md:block`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 bg-gray-900 md:bg-transparent w-full md:w-auto">
          <li>
            <NavLink to="/" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="/staff" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
              Staff
            </NavLink>
          </li>

          {/* Gallery Dropdown */}
          <li className="relative md:group gallery-menu">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent default button behavior
                navigate("/gallery"); // Redirect to "/gallery" when clicked
              }}
              onMouseEnter={() => setIsGalleryOpen(true)}
              className={`block hover:text-gray-400 transition-all duration-200 ${location.pathname.includes("/gallery") ? "text-yellow-400" : ""}`}
            >
              Gallery
            </button>
            <ul
              className={`absolute bg-gray-800 text-white md:mt-2 p-2 space-y-2 md:w-36 rounded-lg transition-all duration-300 transform
                ${isGalleryOpen ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95"} md:opacity-100 md:scale-100`}
              onMouseEnter={() => setIsGalleryOpen(true)}
              onMouseLeave={() => setIsGalleryOpen(false)}
            >
              <li>
                <NavLink to="/gallery/photo" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
                  Photo
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery/video" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
                  Video
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => `block hover:text-gray-400 ${isActive ? "text-yellow-400" : ""}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};


import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton(){
  return (
    <a
      href="https://wa.me/9161830200?text=Hello! I need more information about the school admission."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
    >
      <FaWhatsapp style={{zIndex: 1000}} className="text-3xl" />
    </a>
  );
};



export default function MasterHeader(){
  return(
    <>
    <Nav/>
    <WhatsAppButton/>
    </>
  )
}
