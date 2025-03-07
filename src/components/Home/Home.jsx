import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaRegCalendarAlt,  FaRegFileAlt, FaRegNewspaper } from "react-icons/fa";
import bg from '../../assets/bgforProfile.jpg'


// Import images
import First from "../../assets/slider/First.jpg";
import Second from "../../assets/slider/Second.jpg";
import Third from "../../assets/slider/Third.jpg";
import Fourth from "../../assets/slider/Fourth.jpg";
//Profile Image
import Principal from '../../assets/Principal.png'

const images = [First, Second, Third, Fourth];

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
      <div className=" bg-white mt-5 relative w-screen max-w-screen-lg mx-auto overflow-hidden">
        {/* Image Container */}
        <div
          className="flex flex-nowrap transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="min-w-full w-full h-[60vh] object-center"
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
        >
          <FaArrowRight size={20} />
        </button>

        {/* Dots (Indicators) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-900" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
    </div>
    
  );
};


export function Card({ icon, title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-shadow duration-300">
      <div className="text-red-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href="#" className="text-red-600 font-semibold mt-4 inline-block hover:underline">
        Read More
      </a>
    </div>
  );
}

export function CardSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={<FaRegCalendarAlt />}
          title="Academic Calendar"
          description="Academic Calendar Provides Activities of whole academic session."
        />
        <Card
          icon={<FaRegFileAlt />}
          title="Online Registration"
          description="Students can submit their online applications for Foundation, and Various courses."
        />
        <Card
          icon={<FaRegNewspaper />}
          title="School News"
          description="Student and Parents check regularly school notices to stay update."
        />
      </div>
    </div>
  );
}


//Messaege


const PrincipalMessage = () => {
  return (
    <div   className="w-full bg-cover bg-center bg-no-repeat px-6 py-12"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6 p-6 bg-white shadow-lg rounded-lg relative">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('/path-to-texture.png')] opacity-10 pointer-events-none"></div>

        {/* Image Section */}
        <div className="relative flex-shrink-0">
          <img
            src={Principal}
            alt="Principal"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="bg-blue-600 text-white text-center py-2 rounded-b-lg">
            <strong>Shri Vinod Kumar</strong>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900">Message From Principal</h2>
          <p className="text-gray-700 mt-4">
          At XYZ School, we believe that education is not just about academics but also about
            shaping character and inspiring students to reach their highest potential. Our mission
            is to nurture responsible citizens through innovation, discipline, and values......
          </p>
          
          {/* Read More Button */}
          <NavLink to="/principal-message">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};







export default function Home(){
  return(
    <>
    <Slider/>
    <CardSection/>
    <PrincipalMessage/>
    </> 
  )
}





