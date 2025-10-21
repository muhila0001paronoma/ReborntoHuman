import React, { useState } from 'react';

const ProfilePopup = ({ isOpen, onClose, onLogout }) => {
  const [activeSection, setActiveSection] = useState('My Profile');

  const sections = [
    { id: 'My Profile', label: 'My Profile' },
    { id: 'Settings', label: 'Settings' },
    { id: 'FAQs', label: 'FAQs' },
    { id: 'Contact Support', label: 'Contact Support' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'My Profile':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Poetsen One' }}>
              My Profile
            </h2>
            
            <div className="space-y-6">
              {/* Profile Picture and Basic Info */}
              <div className="flex items-center space-x-6 mb-8">
                <img
                  src="/src/assets/images/h5.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDgiIGN5PSI0OCIgcj0iNDgiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIyNCIgeT0iMjQiPgo8cGF0aCBkPSJNMjQgMjRDMjguNDE4MyAyNCAzMiAyMC40MTgzIDMyIDE2QzMyIDExLjU4MTcgMjguNDE4MyA4IDI0IDhDMTkuNTgxNyA4IDE2IDExLjU4MTcgMTYgMTZDMTYgMjAuNDE4MyAxOS41ODE3IDI0IDI0IDI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTI0IDI4QzE3LjM3MjYgMjggMTIgMzMuMzcyNiAxMiA0MEg0MEM0MCAzMy4zNzI2IDM0LjYyNzQgMjggMjggMjhIMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+';
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'Poppins' }}>
                    John
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
                    john@gmail.com
                  </p>
                  <p className="text-gray-600" style={{ fontFamily: 'Poppins' }}>
                    +7455332523
                  </p>
                </div>
              </div>

              {/* Profile Actions */}
              <div className="space-y-4">
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                  Edit Profile
                </button>
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                  View Booking History
                </button>
                <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                  Manage Appointments
                </button>
              </div>
            </div>
          </div>
        );

      case 'Settings':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Poetsen One' }}>
              Settings
            </h2>
            
            <div className="space-y-8">
              {/* Manage Your Account */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins' }}>
                  Manage Your Account
                </h3>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                      Edit profile
                    </button>
                    <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                      Change Password
                    </button>
                  </div>
                  <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors" style={{ fontFamily: 'Poppins' }}>
                    Deactivate Account
                  </button>
                </div>
              </div>

              {/* Security Settings */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins' }}>
                  Security
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-800 text-white py-3 px-4 rounded-lg">
                    <span style={{ fontFamily: 'Poppins' }}>Enable Two-Factor Authentication</span>
                    <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800 text-white py-3 px-4 rounded-lg">
                    <span style={{ fontFamily: 'Poppins' }}>Biometric Login (Face ID / Fingerprint)</span>
                    <div className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personalization */}
              <div>
                <h3 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins' }}>
                  Personalization
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gray-800 text-white py-3 px-4 rounded-lg">
                    <span style={{ fontFamily: 'Poppins' }}>Change colour theme</span>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-black rounded border-2 border-white"></div>
                      <div className="w-6 h-6 bg-red-500 rounded"></div>
                      <div className="w-6 h-6 bg-orange-500 rounded"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded"></div>
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800 text-white py-3 px-4 rounded-lg">
                    <span style={{ fontFamily: 'Poppins' }}>Font Size</span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm rounded" style={{ fontFamily: 'Poppins' }}>Small</button>
                      <button className="px-3 py-1 text-sm rounded" style={{ fontFamily: 'Poppins' }}>Medium</button>
                      <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" style={{ fontFamily: 'Poppins' }}>Large</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'FAQs':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Poetsen One' }}>
              FAQs
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  question: "How do I book an appointment?",
                  answer: "Go to the Book Appointment page, choose your service, select a barber, pick a date & time, and confirm your booking"
                },
                {
                  id: 2,
                  question: "Can I cancel or reschedule my appointment?",
                  answer: "Yes, you can cancel or reschedule your appointment up to 24 hours before your scheduled time through your profile or by calling us."
                },
                {
                  id: 3,
                  question: "Do you offer home services?",
                  answer: "Currently, we only provide services at our barbershop location. We're working on introducing home services in the future."
                },
                {
                  id: 4,
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, credit/debit cards, and digital payments through various platforms."
                },
                {
                  id: 5,
                  question: "Do you sell grooming products?",
                  answer: "Yes, we have a wide range of premium grooming products available in our shop and online store."
                }
              ].map((faq) => (
                <div key={faq.id} className="bg-gray-800 text-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span style={{ fontFamily: 'Poppins' }}>{faq.id}. {faq.question}</span>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {faq.id === 1 && (
                    <div className="mt-4 bg-gray-700 rounded-lg p-4">
                      <p className="text-white" style={{ fontFamily: 'Poppins' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'Contact Support':
        return (
          <div className="p-8">
            <h2 className="text-3xl font-bold text-black mb-8" style={{ fontFamily: 'Poetsen One' }}>
              Need any help?
            </h2>
            
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-800 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
                  Contact Information
                </h3>
                <div className="space-y-2" style={{ fontFamily: 'Poppins' }}>
                  <p>Address: No.123 Main Street, Jaffna, Srilanka</p>
                  <p>Phone: +94 77 123 4567</p>
                  <p>Email: info@reborn2human.com</p>
                  <p>Support Hours: Mon-Sat, 9 AM to 8 PM</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-800 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Poppins' }}>
                  Reach to us
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ fontFamily: 'Poppins' }}
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                    style={{ fontFamily: 'Poppins' }}
                  />
                  <div className="flex justify-end">
                    <button className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors" style={{ fontFamily: 'Poppins' }}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] max-h-[600px] flex flex-col md:flex-row overflow-hidden shadow-2xl relative">
        {/* Left Sidebar */}
        <div className="bg-black w-full md:w-64 flex flex-col">
          <div className="p-6">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-white text-black'
                      : 'text-white hover:bg-gray-800'
                  }`}
                  style={{ fontFamily: 'Poppins' }}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Logout Button */}
          <div className="mt-auto p-6">
            <button 
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="flex items-center space-x-3 text-white hover:text-red-400 transition-colors" 
              style={{ fontFamily: 'Poppins' }}
            >
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePopup;
