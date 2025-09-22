import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white z-10 relative">
      
      {/* Logo */}
      <div className="text-2xl font-bold">
        Reborn <span className="text-yellow-400">2</span> Human
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="no-underline hover:text-yellow-400 transition-colors">
          Home
        </Link>
        <Link to="/haircuts" className="no-underline hover:text-yellow-400 transition-colors">
          Services
        </Link>
        <a href="#products" className="no-underline hover:text-yellow-400 transition-colors">
          Products
        </a>
        <a href="#about" className="no-underline hover:text-yellow-400 transition-colors">
          About Us
        </a>
        <a href="#contact" className="no-underline hover:text-yellow-400 transition-colors">
          Contact Us
        </a>
      </div>

      {/* Right Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/bookappointment"
          className="px-5 py-2 border-2 border-white rounded-lg text-white no-underline hover:bg-yellow-400 hover:border-yellow-400 transition-all"
        >
          Book Appointment
        </Link>
        <Link
          to="/signin"
          className="px-5 py-2 border-2 border-white rounded-lg text-white no-underline hover:bg-yellow-400 hover:border-yellow-400 transition-all"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
