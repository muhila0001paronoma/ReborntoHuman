import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ onHome, onSignIn, onContact }) => {
  return (
    <nav className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Reborn <span className="text-white">2</span> Human
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onContact}
            className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            Book Appointment
          </button>
          <button 
            onClick={onSignIn}
            className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors"
          >
            Sign In
          </button>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
