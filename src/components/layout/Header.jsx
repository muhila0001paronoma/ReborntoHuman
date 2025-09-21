import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Reborn 2 Human
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`hover:text-gray-300 transition-colors ${
              isActive('/') ? 'underline' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`hover:text-gray-300 transition-colors ${
              isActive('/services') ? 'underline' : ''
            }`}
          >
            Services
          </Link>
          <Link 
            to="/products" 
            className={`hover:text-gray-300 transition-colors ${
              isActive('/products') ? 'underline' : ''
            }`}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`hover:text-gray-300 transition-colors ${
              isActive('/about') ? 'underline' : ''
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`hover:text-gray-300 transition-colors ${
              isActive('/contact') ? 'underline' : ''
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
            Book Appointment
          </button>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
