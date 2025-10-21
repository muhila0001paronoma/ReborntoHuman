import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Authentication state
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  // Check authentication state on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsSignedIn(authStatus === 'true');
  }, []);
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white z-50 relative">
      
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
          to="/book-appointment"
          className="px-5 py-2 bg-white text-black rounded-lg no-underline hover:bg-yellow-400 transition-all font-semibold"
        >
          Book Appointment
        </Link>
        
        {/* Show Sign In button only when not signed in */}
        {!isSignedIn && (
          <Link
            to="/signin"
            className="px-5 py-2 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all font-semibold no-underline"
          >
            Sign In
          </Link>
        )}
        
        {/* Show Profile Picture only when signed in */}
        {isSignedIn && (
          <div className="relative">
            <button 
              onClick={() => {
                console.log('Opening profile popup...');
                setIsProfileClicked(true);
                setTimeout(() => setIsProfileClicked(false), 150);
                setIsProfileOpen(true);
              }}
              className={`block focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black rounded-full transition-all duration-200 hover:scale-105 ${
                isProfileClicked ? 'scale-95' : ''
              }`}
              aria-label="Open profile menu"
              title="View Profile"
            >
              <div className="relative">
                <img
                  src="/src/assets/images/h5.png"
                  alt="John Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white hover:border-yellow-400 transition-all duration-200 shadow-lg"
                  onError={(e) => {
                    console.log('Image failed to load, using fallback');
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI4IiB5PSI4Ij4KPHBhdGggZD0iTTEyIDEyQzE0LjIwOTEgMTIgMTYgMTAuMjA5MSAxNiA4QzE2IDUuNzkwODYgMTQuMjA5MSA0IDEyIDRDOS43OTA4NiA0IDggNS43OTA4NiA4IDhDOCAxMC4yMDkxIDkuNzkwODYgMTIgMTIgMTJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTIgMTRDOC42ODYyOSAxNCA2IDE2LjY4NjMgNiAyMEgxOEMxOCAxNi42ODYzIDE1LjMxMzcgMTQgMTIgMTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+';
                  }}
                  onLoad={() => console.log('Profile image loaded successfully')}
                />
                {/* Online status indicator */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
              </div>
            </button>
          </div>
        )}
      </div>
      
      {/* Profile Popup */}
      <ProfilePopup 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)}
        onLogout={() => {
          localStorage.removeItem('isAuthenticated');
          localStorage.removeItem('user');
          setIsSignedIn(false);
        }}
      />
    </nav>
  );
}

export default Navbar;
