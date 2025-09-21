import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Services = () => {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('Haircuts')

  const serviceCategories = [
    'Haircuts',
    'Beard Shaving',
    'Hair Styling & Grooming',
    'Facial & Skin Care',
    'Special Grooming',
    'Our Packages'
  ]

  const haircutServices = [
    {
      id: 1,
      name: 'Classic Haircut',
      description: 'Professional Haircut with styling finish',
      duration: '30 mins',
      price: 'LKR 1500.00',
      rating: '4.8',
      reviews: '120 Reviews',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Taper Fade Haircut',
      description: 'Modern low/high fade for sharp look',
      duration: '40 mins',
      price: 'LKR 1900.00',
      rating: '4.6',
      reviews: '43 Reviews',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Undercut',
      description: 'Trendy undercut with style finish',
      duration: '40 mins',
      price: 'LKR 2200.00',
      rating: '4.5',
      reviews: '230 Reviews',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Scissor Cut',
      description: 'Layered scissor cut for natural style',
      duration: '45 mins',
      price: 'LKR 3000.00',
      rating: '4.3',
      reviews: '21 Reviews',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Buzz Cut',
      description: 'Simple clean clipper cut',
      duration: '20 mins',
      price: 'LKR 1000.00',
      rating: '4.5',
      reviews: '423 Reviews',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
     

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-5xl font-bold text-white mb-6"
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
          </h1>
          <p 
            className="text-xl text-white mb-8"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 300,
              fontStyle: 'normal',
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0%'
            }}
          >
            Expert grooming tailored for your style and confidence
          </p>
          <Link to="/contact">
            <button 
              className="bg-black border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: 'Poppins' }}
            >
              Book Appointment
            </button>
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Service Categories */}
            <aside className="lg:w-1/4">
              <div className="bg-gray-800 border border-white rounded-lg p-6" style={{ backgroundColor: '#00000099' }}>
                <h3 
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: 'Poppins' }}
                >
                  Service Categories
                </h3>
                <div className="space-y-2">
                  {serviceCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-white text-black font-semibold'
                          : 'text-white hover:bg-gray-700'
                      }`}
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right Content - Service Cards */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {haircutServices.map((service) => (
                  <div 
                    key={service.id}
                    className="bg-gray-800 border border-white rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: '#00000099' }}
                  >
                    {/* Service Image */}
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Service Details */}
                    <div className="text-center">
                      <h3 
                        className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {service.name}
                      </h3>
                      <p 
                        className="text-gray-300 mb-3"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {service.description}
                      </p>
                      <p 
                        className="text-white mb-2"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {service.duration} | {service.price}
                      </p>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-yellow-400 text-lg mr-1">⭐</span>
                        <span 
                          className="text-white text-sm"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {service.rating} ({service.reviews})
                        </span>
                      </div>
                      <Link to="/contact">
                        <button 
                          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors w-full"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Services
