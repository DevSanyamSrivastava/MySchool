import React, {useState} from "react";
import { FaBook, FaBus, FaFlask, FaLaptop, FaBasketballBall, FaTheaterMasks } from "react-icons/fa";
import Vision from '../../../public/MsgDesk/Founder.png'
import Review from '../../../public/Review.png'


export function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-2xl shadow-lg">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <img
          src={Vision} // Replace with actual image URL
          alt="स्कूल दृष्टि"
          className="w-[60%] max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>गुरुचरन दास पब्लिक स्कूल</strong> का उद्देश्य एक 
          <strong> शिक्षा प्रणाली</strong> विकसित करना है जो छात्रों को न केवल 
          <strong> शैक्षणिक उत्कृष्टता</strong> बल्कि <strong> मानवीय मूल्यों, आत्मनिर्भरता</strong>, और 
          <strong> नैतिकता</strong> के साथ सशक्त बनाए।
        </p>

        {showMore && (
          <div className="transition-all duration-500 ease-in-out">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              हम छात्रों में <strong>रचनात्मकता, नवाचार, और नेतृत्व</strong> की भावना को बढ़ावा देते हैं 
              ताकि वे एक उज्ज्वल भविष्य की ओर अग्रसर हो सकें। शिक्षा केवल पुस्तकों तक सीमित नहीं है; 
              यह <strong>वास्तविक जीवन की समस्याओं को हल करने</strong> और <strong>समाज में सकारात्मक योगदान</strong> 
              देने का एक माध्यम है।
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              हमारा विश्वास है कि एक <strong>सशक्त समाज का निर्माण</strong> करने के लिए शिक्षा सबसे 
              महत्वपूर्ण आधारशिला है। हम छात्रों को <strong>आत्मविश्वास, नैतिकता और चरित्र निर्माण</strong> 
              के साथ तैयार करने के लिए प्रतिबद्ध हैं।
            </p>
          </div>
        )}

        {/* Button for More Content */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showMore ? "Show less" : "Read More"}
        </button>
      </div>
    </div>
  );
}



import SchoolImage from "../../../public/images/School.jpg"; // Replace with actual image path

export function EstablishedYear() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-2xl shadow-lg">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-start">
        <img
          src={SchoolImage} // Replace with actual image URL
          alt="स्कूल स्थापना"
          className="w-[80%] max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">हमारी स्थापना</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          <strong>गुरुचरन दास पब्लिक स्कूल</strong> की स्थापना वर्ष <strong>2000</strong> में की गई थी। 
          इस स्कूल का उद्देश्य छात्रों को <strong>उच्च गुणवत्ता वाली शिक्षा</strong> प्रदान करना और 
          <strong> नैतिक मूल्यों</strong> को विकसित करना है।
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          2000 से, हमारा स्कूल <strong>नवाचार और उत्कृष्टता</strong> के साथ शिक्षा प्रदान कर रहा है। 
          यहाँ के विद्यार्थी <strong>वैज्ञानिक सोच, आत्मनिर्भरता</strong> और <strong>सामाजिक जिम्मेदारी</strong> की भावना के साथ आगे बढ़ते हैं।
        </p>
      </div>
    </div>
  );
}



export function  Amenities(){
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



import { Star } from "lucide-react";

export function RateUs() {
  const [rating, setRating] = useState(0);
  const googleReviewLink = "https://shorturl.at/DGUVp";

  const handleRating = (rate) => {
    setRating(rate);
    window.open(googleReviewLink, "_self");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-80 p-6 mb-3 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">Rate Us</h2>

        {/* Image */}
        <img 
          src={Review} 
          alt="Rate Us" 
          className="w-20 h-20 rounded-full object-cover"
        />
        
        {/* Star Rating */}
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={35}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-110 ${
                rating >= star ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => handleRating(star)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutUs(){
  return(
    <>
    <About/>
    <EstablishedYear/>
    <Amenities/>
    <RateUs/>
    </>
  )
}
