import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { FaHome, FaInfoCircle, FaImages, FaUser, FaPhone } from "react-icons/fa";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-14 w-auto transition-transform duration-300 transform hover:scale-105 drop-shadow-lg rounded-lg"
          />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`bg-gray-900 justify-end md:bg-transparent md:flex md:relative md:w-full transition-all duration-300 ${isOpen ? "absolute top-full left-0 w-full block" : "hidden md:flex"
            }`}
        >

          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 w-full md:w-auto">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${isActive ? "bg-gray-800 text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  `flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${isActive ? "bg-gray-800 text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaInfoCircle /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  `flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${isActive ? "bg-gray-800 text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaUser /> Registration
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/staff"
                className={({ isActive }) =>
                  `flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${isActive ? "bg-gray-800 text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaUser /> Staff
              </NavLink>
            </li>

            {/* Gallery Dropdown (Laptop View) */}
            <li className="relative md:group gallery-menu">
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent default behavior
                  navigate("/gallery"); // Redirect on click
                }}
                onMouseEnter={() => setIsGalleryOpen(true)}
                className={`flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${location.pathname.includes("/gallery") ? "bg-gray-800 text-yellow-400" : ""
                  }`}
              >
                <FaImages /> Gallery
              </button>

              {/* Dropdown (Always Visible on Hover) */}
              <ul
                className={`absolute left-0 bg-gray-800 text-white mt-2 p-2 space-y-2 w-36 rounded-lg shadow-lg transition-all duration-300 ${isGalleryOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                  }`}
                onMouseEnter={() => setIsGalleryOpen(true)}
                onMouseLeave={() => setIsGalleryOpen(false)}
              >
                <li>
                  <NavLink
                    to="/gallery/photo"
                    className={({ isActive }) =>
                      `flex items-center gap-2 block px-4 py-2 hover:text-yellow-400 transition ${isActive ? "text-yellow-400" : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    📷 Photo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery/video"
                    className={({ isActive }) =>
                      `flex items-center gap-2 block px-4 py-2 hover:text-yellow-400 transition ${isActive ? "text-yellow-400" : ""
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    🎥 Video
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center gap-2 block py-2 px-4 rounded-md hover:bg-gray-800 transition ${isActive ? "bg-gray-800 text-yellow-400" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                <FaPhone /> Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9161830200?text=Hello! I need more information about the school admission."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110 flex items-center justify-center"
    >
      <FaWhatsapp style={{ zIndex: 1000 }} className="text-3xl" />
    </a>
  );
}

export default function MasterHeader() {
  return (
    <>
      <Nav />
      <WhatsAppButton />
    </>
  );
}
