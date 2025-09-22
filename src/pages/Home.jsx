import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop')"
        }}
      >
        <div className="text-center z-10">
          <h1 
            className="text-white mb-6"
            style={{
              fontFamily: 'Poetsen One, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '130px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Reborn 2 Human
          </h1>
          <p 
            className="text-xl md:text-2xl text-white mb-12"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: '24px',
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
            Not just a haircut, a transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/bookappointment">
              <button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Poppins' }}
              >
                Book Appointment
              </button>
            </Link>
            <Link to="/products">
              <button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Poppins' }}
              >
                Purchase Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-5xl font-bold text-white text-center mb-16"
            style={{
              fontFamily: 'Poetsen One',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Haircut Card */}
            <div className="bg-gray-800 border border-white rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#00000099' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Poppins' }}
              >
                Haircut
              </h3>
              <p 
                className="text-gray-300 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                From classic cuts to modern fades, tailored to your look with precision
              </p>
              <Link to="/haircut">
                <button 
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read more...
                </button>
              </Link>
            </div>

            {/* Shaving Card */}
            <div className="bg-gray-800 border border-white rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#00000099' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Poppins' }}
              >
                Shaving
              </h3>
              <p 
                className="text-gray-300 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Traditional shaves & luxury hot towel treatment for a clean, sharp finish
              </p>
              <Link to="/beardshaving">
                <button 
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read more...
                </button>
              </Link>
            </div>

            {/* Styling Card */}
            <div className="bg-gray-800 border border-white rounded-lg p-8 text-center hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#00000099' }}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Poppins' }}
              >
                Styling
              </h3>
              <p 
                className="text-gray-300 mb-6"
                style={{ fontFamily: 'Poppins' }}
              >
                Professional styling with premium products to keep you looking sharp
              </p>
              <Link to="/hairstyling">
                <button 
                  className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Read more...
                </button>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link to="/services">
              <button 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                style={{ fontFamily: 'Poppins' }}
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-5xl font-bold text-black text-center mb-16"
            style={{
              fontFamily: 'Poetsen One',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Why Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Expert Barbers */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9 4h10a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p 
                className="text-lg font-semibold text-black"
                style={{ fontFamily: 'Poppins' }}
              >
                Expert Barbers
              </p>
            </div>

            {/* Premium Products */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p 
                className="text-lg font-semibold text-black"
                style={{ fontFamily: 'Poppins' }}
              >
                Premium Products
              </p>
            </div>

            {/* Easy Online Booking */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p 
                className="text-lg font-semibold text-black"
                style={{ fontFamily: 'Poppins' }}
              >
                Easy Online Booking
              </p>
            </div>

            {/* Reasonable Price */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <p 
                className="text-lg font-semibold text-black"
                style={{ fontFamily: 'Poppins' }}
              >
                Reasonable Price
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-5xl font-bold text-white text-center mb-16"
            style={{
              fontFamily: 'Poetsen One',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            What Our Clients Say
          </h2>
          
          <div className="bg-gray-800 border border-white rounded-lg p-8" style={{ backgroundColor: '#00000099' }}>
            <p 
              className="text-white text-lg leading-relaxed mb-8"
              style={{ fontFamily: 'Poppins' }}
            >
              "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p 
                  className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Poppins' }}
                >
                  John
                </p>
                <div className="flex text-yellow-400">
                  <span className="text-2xl">★</span>
                  <span className="text-2xl">★</span>
                  <span className="text-2xl">★</span>
                  <span className="text-2xl">★</span>
                  <span className="text-2xl">★</span>
                </div>
              </div>
              <div className="w-16 h-16 bg-gray-600 rounded-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" 
                  alt="John" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default Home
