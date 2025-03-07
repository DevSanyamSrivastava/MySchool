import React from "react";
import { FaBook, FaBus, FaFlask, FaLaptop, FaBasketballBall, FaTheaterMasks } from "react-icons/fa";

const AboutUs = () => {
  const amenities = [
    { id: 1, icon: <FaBook size={40} className="text-blue-500" />, title: "Library", desc: "A well-stocked library with a vast collection of books and resources." },
    { id: 2, icon: <FaBus size={40} className="text-yellow-500" />, title: "Transport", desc: "Safe and reliable school bus services for students." },
    { id: 3, icon: <FaFlask size={40} className="text-green-500" />, title: "Science Labs", desc: "Modern science labs for hands-on learning experiences." },
    { id: 4, icon: <FaLaptop size={40} className="text-red-500" />, title: "Computer Labs", desc: "State-of-the-art computer labs with high-speed internet." },
    { id: 5, icon: <FaBasketballBall size={40} className="text-orange-500" />, title: "Sports Facilities", desc: "Spacious playgrounds and sports facilities for students." },
    { id: 6, icon: <FaTheaterMasks size={40} className="text-purple-500" />, title: "Cultural Activities", desc: "Opportunities for music, dance, drama, and arts." },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our School Amenities</h2>
        <p className="text-gray-600 mb-10">
          We provide world-class facilities to ensure the best learning experience for our students.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">{amenity.title}</h3>
              <p className="text-gray-600 mt-2">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
