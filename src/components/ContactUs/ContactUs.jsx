import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-screen-lg mx-auto p-6">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-3xl text-red-400" />
            <div>
              <h3 className="text-xl font-bold">Gurucharan Das Public School</h3>
              <p className="text-gray-300 text-sm">
              Village Sirsi post dulhi, Soharia, Uttar Pradesh 262724
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaPhoneAlt className="text-3xl text-green-400" />
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-gray-300 text-sm">
                Phone:{" "}
                <a href="tel:+919161830200" className="text-blue-400 hover:underline">
                  +91 9161830200
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                Mob:{" "}
                <a href="tel:+916386824691" className="text-blue-400 hover:underline">
                  +91-6386824691
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
            <FaEnvelope className="text-3xl text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-300 text-sm">
                <a href="mailto:info.nbps@gmail.com" className="text-blue-400 hover:underline">
                  info.nbps@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-96 border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.224799291015!2d80.95478117435708!3d28.10917970765609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998b15fb2108125%3A0x8429d272ba55974a!2sGurucharan%20das%20Public%20School%20Sirsi%20Kheri!5e0!3m2!1sen!2sin!4v1741456806467!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}


