import { useState } from "react";
import { FaThLarge, FaTable } from "react-icons/fa";

const staffMembers = [
  { id: 1, name: "Naveen Kumar Pandey", qualification: "B.Ed. (English)", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Sanjay Kumar", qualification: "M.A. (Economics)", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Suryansh Srivastava", qualification: "M.Sc. (Agronomy)", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { id: 4, name: "Nanha Lal", qualification: "B.Ed. (English)", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Rakesh Kumar Maurya", qualification: "M.Sc. (Math)", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Mahmood Ali", qualification: "B.Ed. (SST)", image: "https://randomuser.me/api/portraits/men/6.jpg" },
];

export default function Staff() {
  const [viewMode, setViewMode] = useState("table");

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-gray-900 text-white rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold">Our Staff</h2>
        
        <button
          onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
          className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-gray-200 transition"
        >
          {viewMode === "table" ? <FaThLarge /> : <FaTable />}
          {viewMode === "table" ? "Card View" : "Table View"}
        </button>
      </div>

      {/* Table View */}
      {viewMode === "table" ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white border border-gray-700 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-700">
              <tr className="uppercase text-sm font-semibold">
                <th className="py-3 px-4 border border-gray-600">Sr No</th>
                <th className="py-3 px-4 border border-gray-600">Image</th>
                <th className="py-3 px-4 border border-gray-600">Name</th>
                <th className="py-3 px-4 border border-gray-600">Qualification</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff, index) => (
                <tr key={staff.id} className="text-gray-300 text-center border-b border-gray-600 even:bg-gray-700 hover:bg-gray-600 transition">
                  <td className="py-3 px-4 border border-gray-600">{index + 1}</td>
                  <td className="py-3 px-4 border border-gray-600">
                    <img src={staff.image} alt={staff.name} className="w-12 h-12 rounded-full mx-auto border-2 border-gray-500 shadow-sm" />
                  </td>
                  <td className="py-3 px-4 border border-gray-600">{staff.name}</td>
                  <td className="py-3 px-4 border border-gray-600">{staff.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card View
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="relative bg-gray-800 text-white shadow-lg rounded-lg p-6 text-center border border-gray-700 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 shadow-md" />
              <h3 className="text-xl font-semibold">{staff.name}</h3>
              <p className="text-gray-400 mt-2">{staff.qualification}</p>
              {/* Decorative Background */}
              <div className="absolute inset-0 rounded-lg opacity-10 bg-blue-500"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
