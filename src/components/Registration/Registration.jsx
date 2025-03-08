import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendar } from "react-icons/fa";
import Reg from "../../../public/MsgDesk/10368828.jpg"; // Left-side image
import BgImage from "../../assets/bgforProfile.jpg";

const Registration = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white bg-opacity-90 shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-4xl w-full">
        
        {/* Image Section - Now Visible in Mobile View */}
        <div className="w-full md:w-1/2">
          <img 
            src={Reg} 
            alt="Registration" 
            className="w-full h-[40vh] md:h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Register Now</h2>
          <p className="text-center text-gray-500 mb-6">Join our school today</p>

          <form className="space-y-4">
            {/* Full Name */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaUser className="text-blue-800 mr-3" />
              <input
                type="text"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Full Name"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaEnvelope className="text-blue-800 mr-3" />
              <input
                type="email"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Email"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaPhone className="text-blue-800 mr-3" />
              <input
                type="tel"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Phone Number"
              />
            </div>

            {/* Date of Birth */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaCalendar className="text-blue-800 mr-3" />
              <input
                type="date"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border border-black rounded-lg p-3 bg-white">
              <FaLock className="text-blue-800 mr-3" />
              <input
                type="password"
                className="w-full outline-none bg-transparent text-black placeholder-gray-500"
                placeholder="Password"
              />
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
