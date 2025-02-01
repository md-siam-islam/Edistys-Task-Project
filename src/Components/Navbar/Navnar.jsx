import React, { useState } from "react";
import img from "../../assets/navbarimg.svg";

import { FaChevronRight, FaWordpress } from "react-icons/fa";


const Navnar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-10/12 mx-auto">
      <nav className="text-blue-600 bg-white">
        {/* Desktop Navbar */}
        <div className="hidden lg:flex justify-between items-center px-6 py-3">
          <div className="text-2xl font-bold">
            <img src={img} alt="" />
          </div>
          <ul className="flex space-x-6 items-center">
            <li>
              <select className=" bg-white text-blue-600 font-semibold px-3 py-1  focus:outline-none">
                <option>Solutions</option>
                <option>AnyCaaS</option>
                <option>AnyBaaS</option>
                <option>AnyPaaS</option>
              </select>
            </li>
            <li className="font-semibold">About Us</li>
            <li className="font-semibold">Services</li>
            <li>
              <select className="bg-white font-semibold px-3 py-1 rounded border-0 border-blue-600 outline-1">
                <option value="EN"> EN (English)</option>
                <option value="EN"> TH (Thai)</option>
                <option value="EN"> ID</option>
                <option value="EN">TW</option>
              </select>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="bg-[#FE8B53] text-white font-semibold px-4 py-2 rounded flex items-center gap-2 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 hover:gap-4">
            Contact Us <FaChevronRight /> 
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex justify-between items-center px-4 py-3 lg:hidden">
          <div className="text-2xl font-bold">ANYTECH</div>
          <button
            className="text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {isMenuOpen && (
          <div className="bg-blue-600 text-white font-semibold px-4 py-2 lg:hidden">
            <ul>
              <li className="py-2">
                <select className="bg-blue-700 text-white px-3 py-1 rounded focus:outline-none w-full">
                  <option>Solutions</option>
                  <option>AnyCaaS</option>
                  <option>AnyBaaS</option>
                  <option>AnyPaaS</option>
                </select>
              </li>
              <li className="py-2">Services</li>
              <li className="py-2">About Us</li>
              <li>
                <select className="bg-blue-700 px-3 py-1 my-6 rounded">
                  <option value="EN">EN (English)</option>
                  <option value="EN">TH (Thai)</option>
                  <option value="EN">ID</option>
                  <option value="EN">TW</option>
                </select>
              </li>
            </ul>
            <button className="bg-[#FE8B53] text-white font-semibold px-4 py-2 rounded hover:bg-blue-100 w-full my-10 flex items-center gap-2">
              Contact Us <FaChevronRight /> 
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navnar;
