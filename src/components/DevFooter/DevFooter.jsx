import React from "react";
import { NavLink } from "react-router-dom";

const DevFooter=()=>{
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Copyright Section */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Gurucharan Das Public School. All rights reserved.
        </p>

        {/* Developer Credit */}
        <p className="text-sm">
{" "}
          <NavLink
            to="/Developer"
            className="text-blue-400 font-semibold hover:text-blue-300 transition-all"
          >
                      Developed & Designed by Techspark
          </NavLink>
        </p>

        

      </div>
    </footer>
  );
}

export default DevFooter