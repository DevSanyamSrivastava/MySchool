import React from "react";

const staffMembers = [
  {
    id: 1,
    name: "John Doe",
    qualification: "M.Sc. Physics",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    qualification: "Ph.D. Chemistry",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    qualification: "M.A. English",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    qualification: "B.Ed. Mathematics",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

function Staff() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Staff</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr className="uppercase text-sm font-semibold">
              <th className="py-3 px-4 border">Sr No</th>
              <th className="py-3 px-4 border">Image</th>
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">Qualification</th>
            </tr>
          </thead>
          <tbody>
            {staffMembers.map((staff, index) => (
              <tr key={staff.id} className="text-gray-900 text-center border-b even:bg-gray-100 hover:bg-gray-200">
                <td className="py-3 px-4 border">{index + 1}</td>
                <td className="py-3 px-4 border">
                  <img src={staff.image} alt={staff.name} className="w-12 h-12 rounded-full mx-auto" />
                </td>
                <td className="py-3 px-4 border">{staff.name}</td>
                <td className="py-3 px-4 border">{staff.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;
