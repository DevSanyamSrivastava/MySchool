import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import Dev1 from "../../../public/Devloper/Sanyam.jpg";
import Dev2 from "../../../public/Devloper/Kratika.jpg";

const teamMembers = [
  {
    name: "Sanyam Srivastava",
    role: "Project Manager",
    image: Dev1,
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
  {
    name: "Kratika Sharma",
    role: "Backend Developer",
    image: Dev2,
    linkedin: "#",
    github: "#",
    twitter: "#",
  },
];

export function DeveloperTeam() {
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:scale-110 transition"
        >
          {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-10">
        Meet Our Developer Team
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl p-6 text-center border transition-all duration-300 overflow-hidden ${
              darkMode ? "bg-gray-800 border-gray-600 shadow-xl" : "bg-white border-gray-300 shadow-lg"
            } ${selected === index ? "scale-105 border-blue-500 shadow-2xl" : ""}`}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelected(index)}
          >
            {/* Profile Image */}
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-gray-300 transition-all duration-300"
              whileHover={{ rotate: 5 }}
            />
            {/* Name */}
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            {/* Role */}
            <p className="mt-2 text-lg opacity-80">{member.role}</p>

            {/* Animated Social Icons */}
            <div className="flex justify-center mt-5 space-x-4">
              <motion.a
                href={member.linkedin}
                className="text-blue-600 hover:text-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={28} />
              </motion.a>
              <motion.a
                href={member.github}
                className="text-gray-700 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                href={member.twitter}
                className="text-blue-400 hover:text-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter size={28} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
