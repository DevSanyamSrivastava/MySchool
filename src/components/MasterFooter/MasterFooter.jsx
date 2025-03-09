import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MasterFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* School Information */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-yellow-400">Gurucharan Das Public School</h2>
          <p className="text-gray-400 mt-2 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Sirsi, Lakhimpur-Kheri, Pin: 261506
          </p>
          <p className="text-gray-400 flex items-center">
            
          <FaPhoneAlt className="mr-2" /> <a href="tel:+919161830200">9161830200</a>
          
          </p>
          <p className="text-gray-400 flex items-center">
            <FaEnvelope className="mr-2" />  <a href="mailto:gurucharan6176@gmail.com">
                gurucharan6176@gmail.com
                </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 text-center md:text-left">
          <h6 className="text-lg font-semibold text-yellow-400">Quick Links</h6>
          <NavLink to="/about-us" className="hover:text-yellow-400 transition">About Us</NavLink>
          <NavLink to="/registration" className="hover:text-yellow-400 transition">Admissions</NavLink>
          <NavLink to="/staff" className="hover:text-yellow-400 transition">Our Staff</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400 transition">Contact</NavLink>
        </div>

        {/* Social Media Links in Column */}
        <div className="text-center md:text-left">
          <h6 className="text-lg font-semibold text-yellow-400">Follow Us</h6>
          <div className="flex flex-col space-y-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition flex items-center">
              <FaFacebookF className="text-xl mr-2" /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition flex items-center">
              <FaTwitter className="text-xl mr-2" /> Twitter
            </a>
            <a href="https://youtube.com/@mr.suryanshsrivastava3674?feature=shared" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition flex items-center">
              <FaYoutube className="text-xl mr-2" /> YouTube
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default MasterFooter;
