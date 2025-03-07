import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


// Import images
import First from "../../assets/slider/First.jpg";
import Second from "../../assets/slider/Second.jpg";
import Third from "../../assets/slider/Third.jpg";
import Fourth from "../../assets/slider/Fourth.jpg";

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



import { FaRegCalendarAlt, FaRegFileAlt, FaRegNewspaper } from "react-icons/fa";

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





export default function Home(){
  return(
    <>
    <Slider/>
    <CardSection/>
    </> 
  )
}





