import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
        <a href="/products" className="no-underline hover:text-yellow-400 transition-colors">
          Products
        </a>
        <a href="/about" className="no-underline hover:text-yellow-400 transition-colors">
          About Us
        </a>
        <a href="/contact" className="no-underline hover:text-yellow-400 transition-colors">
          Contact Us
        </a>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          to="/bookappointment"
          className="px-5 py-2 bg-white text-black rounded-lg no-underline hover:bg-yellow-400 transition-all font-semibold"
        >
          Book Appointment
        </Link>
        {/* Profile Picture */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(true)}
            className="block"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-yellow-400 transition-all cursor-pointer"
            />
          </button>
        </div>
      </div>
      
      {/* Profile Popup */}
      <ProfilePopup 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
    </nav>
  );
}

export default Navbar;
