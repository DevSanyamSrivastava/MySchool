import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { FaRegCalendarAlt,  FaRegFileAlt, FaRegNewspaper } from "react-icons/fa";
import bg from '../../assets/bgforProfile.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";
import enquiryImage from "../../assets/10308906.jpg"; 
import Holiday from "../../../public/Document/Holiday.pdf"

import PrincipalImage from "../../../public/MsgDesk/Directer.jpg"; 
import TeacherImage from "../../../public/MsgDesk/Founder.png"; 
import StudentImage from "../../../public/MsgDesk/Manager.png"; 



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


export function Card({ icon, title, description, download }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-shadow duration-300">
      <div className="text-blue-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {download ? (
        <a
          href={download}
          download
          className=" text-blue-700 font-semibold mt-4 inline-block py-2 px-4 rounded-lg hover:bg-blue-700 hover:text-white transition"
        >
          Download PDF
        </a>
      ) : (
        <a href="#" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
          Read More
        </a>
      )}
    </div>
  );
}

export function CardSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          icon={<FaRegCalendarAlt className="text-blue-500 text-4xl" />}
          title="Holiday Calendar"
          description="Academic Calendar Provides Activities of whole academic session."
          download={Holiday} 
        />
        <Card
          icon={<FaRegFileAlt className="text-blue-500 text-4xl" />}
          title="Online Registration"
          description="Students can submit their online applications for Foundation, and Various courses."
        />
        <Card
          icon={<FaRegNewspaper className="text-blue-500 text-4xl" />}
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
          At <i>Gurucharan Das Public School School,</i>  we believe that education is not just about academics but also about
            shaping character and inspiring students to reach their highest potential. Our mission
            is to nurture responsible citizens through innovation, discipline, and values......
          </p>
          
          {/* Read More Button */}
          <NavLink to="/about-us">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};






const WhyChooseUs = () => {
  return (
    <div className="bg-purple-800 text-white py-12 px-6" style={{ background: "#0f5476  " }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Why Choose Gurucharan Das Public School?</h2>
        <p className="mt-2 text-lg">
          Gurucharan Das Public School, Sirsi, Lakhimpur-Kheri, is dedicated to providing quality education and holistic development.
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Well-Equipped Classrooms",
          "Experienced Faculty",
          "Modern Computer Lab",
          "Library & Reading Room",
          "Sports & Extracurricular Activities",
          "Safe & Secure Environment"
        ].map((item, index) => (
          <div key={index} className="flex items-center bg-white text-gray-800 p-4 rounded-lg shadow-lg">
            <FaCheckCircle  style={{color: "#0f5476"}} className="text-purple-700 text-2xl mr-3" />
            <span className="font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};


import { FaUserGraduate, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export function  CounterSection() {
  const counters = [
    { icon: <FaUserGraduate />, label: "Students", count: 400 },
    { icon: <FaChalkboardTeacher />, label: "Teachers", count: 20 },
    { icon: <FaUsers />, label: "Satisfied Parents", count: 900 },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < counters[index].count ? count + 1 : count
        )
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {counters.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-lg">
            <div className="text-4xl">{item.icon}</div>
            <h3 className="text-5xl font-bold mt-2">{counts[index]}+</h3>
            <p className="text-lg mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export function EnquiryForm(){
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={enquiryImage}
            alt="Enquiry"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full p-8 border-l border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Enquiry Form
          </h2>
          <form className="space-y-4">
            {/* Name Field */}
            <div className="flex items-center border border-black rounded-lg p-2">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-black placeholder-black focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center border border-black rounded-lg p-2">
              <FaEnvelope className="text-gray-600 mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full text-black placeholder-black focus:outline-none"
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center border border-black rounded-lg p-2">
              <FaPhone className="text-gray-600 mr-3" />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full text-black placeholder-black focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="flex items-start border border-black rounded-lg p-2">
              <FaComments className="text-gray-600 mr-3 mt-1" />
              <textarea
                placeholder="Your Message"
                className="w-full text-black placeholder-black focus:outline-none h-20 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};




const messages = [
  {
    title: "Manager",
    Name: "Sanjay Srivastava",
    image: StudentImage,
    message: "Education empowers us to dream big and achieve greater heights.",
  },
  {
    title: "Founder",
    Name: "Munna Lal Srivastava",
    image: TeacherImage,
    message: "We believe in nurturing creativity and critical thinking in every student.",
  },
  {
    title: "Marketing Head",
    Name: "Suryansh Srivastava",
    image: PrincipalImage,
    message: "Our mission is to provide quality education that builds a strong foundation for the future.",
  },
  
  
];

export function MessageDesk() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Message Desk
      </h2>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {messages.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-xl hover:shadow-2xl border border-gray-300 rounded-2xl p-6 text-center w-full transition"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[40vh] object-center rounded-2xl mb-4"
            />
            {/* Title */}
            <h3 className="text-xl font-bold text-blue-700">{item.Name}</h3>
            <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            {/* Message */}
            <p className="text-gray-600 mt-2">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import Abhishek from '../../../public/OurStudent/Abhishek.jpg'
import Arjoo from '../../../public/OurStudent/Arjoo.jpg'
import Ansh from '../../../public/OurStudent/Ansh.jpg'
import Chotu from '../../../public/OurStudent/Chotu.jpg'

const students = [
  {
    name: "Abhishek Srivastava",
    grade: "Class 10",
    image: Abhishek,
    description: "Top scorer in Science  and a passionate learner."
  },
  {
    name: "Arjoo Srivastava",
    grade: "Class 10",
    image: Arjoo,
    description: "Aanya Gupta is very good at art and loves to draw."
  },
  {
    name: "Ansh Srivastava",
    grade: "Class 8",
    image: Ansh,
    description: "Very good at drawing and loves to play football."
  }
];

export function OurStudents(){
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Bright Students</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {students.map((student, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <img 
              src={student.image} 
              alt={student.name} 
              className="w-36 h-36 rounded-full mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl text-blue-800 font-bold">{student.name}</h3>
            <p className="text-gray-600 font-semibold">{student.grade}</p>
            <p className="text-gray-500 mt-2">{student.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export function OurPride(){
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🌟 Our Pride</h2>
        <p className="text-gray-600 mb-10">
          Celebrating our outstanding student who make us proud.
        </p>

        <div className="max-w-lg   mx-auto bg-white p-6 rounded-lg shadow-lg">
          <img
            src={Chotu}
            alt="Pride"
            className="w-[100%] h-80 object-center  rounded-lg"
          />
          <h3 className="text-xl font-bold text-gray-700 mt-4">Anubhav Srivastava</h3>
          <p className="text-gray-600 text-semibold mt-2">🏆 Navodaya Student</p>
          <p className="text-gray-500 mt-2">
            Anubhav has made our school proud by qualifying the Navodaya Entrance Exam, showcasing his acedmic brilliance.
          </p>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  { 
    question: "What are the school timings?", 
    answer: "The school operates from 8:00 AM to 2:00 PM for all students." 
  },
  { 
    question: "How can I apply for admission?", 
    answer: "You can visit the school office or apply online through our website's Admission section." 
  },
  { 
    question: "Does the school provide transport facilities?", 
    answer: "Yes, we have a fleet of school buses covering major areas of the city." 
  },
  { 
    question: "What extracurricular activities are available?", 
    answer: "We offer sports, music, dance, drama, art, and various clubs for holistic development." 
  },
  { 
    question: "Are there scholarships or fee concessions?", 
    answer: "Yes, we offer scholarships based on merit and financial need. Please contact the school office for details." 
  },
];

export  function FAQ(){
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button 
              className="flex justify-between w-full text-lg font-medium text-gray-700 hover:text-blue-600 py-3 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
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
    <WhyChooseUs/>
    <CounterSection/>
    <MessageDesk/>
    <FAQ/>
    <OurStudents/>
    <OurPride/>
    <EnquiryForm/>
    </> 
  )
}





