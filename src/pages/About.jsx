import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/layout/Footer'

const About = () => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -420, // Width of one card + gap
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 420, // Width of one card + gap
        behavior: 'smooth'
      })
    }
  }

  const teamMembers = [
    {
      id: 1,
      name: 'Rajees Kumar',
      title: 'Senior Barber',
      experience: '5 Years Experience',
      quote: '"Every Haircut is a chance to redefine style"',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'John Miller',
      title: 'Shaving Expert',
      experience: '3 Years Experience',
      quote: '"A great beard starts here"',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Luke Davis',
      title: 'Junior Barber',
      experience: '1 1/2 Years Experience',
      quote: '"Precision and style in every cut"',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face'
    }
  ]

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
      <Navbar />

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="bg-white h-96 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=400&fit=crop" 
                  alt="Reborn 2 Human Barbershop Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="order-1 lg:order-2">
              <h1 
                className="text-5xl font-bold text-white mb-8"
                style={{
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '60px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Our Story
              </h1>
              <p 
                className="text-white"
                  style={{ 
                    fontFamily: 'Poppins',
                    fontWeight: 200,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '150%',
                    letterSpacing: '20%',
                    textAlign: 'justify'
                  }}
              >
                Reborn 2 Human was founded to redefine men's grooming. Our mission is to empower confidence and style through expert haircuts, beard care, and premium grooming services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-gray-800 border border-white rounded-lg p-8" style={{ backgroundColor: '#00000099' }}>
              <h2 
                className="text-3xl font-bold text-white mb-6"
                style={{ 
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '50px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Mission
              </h2>
              <p 
                className="text-white text-lg leading-relaxed"
                style={{ fontFamily: 'Poppins' }}
              >
                Deliver exceptional grooming experiences that leave every client looking and feeling their best
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gray-800 border border-white rounded-lg p-8" style={{ backgroundColor: '#00000099' }}>
              <h2 
                className="text-3xl font-bold text-white mb-6"
                style={{ 
                  fontFamily: 'Poetsen One',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '50px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                Vision
              </h2>
              <p 
                className="text-white text-lg leading-relaxed"
                style={{ fontFamily: 'Poppins' }}
              >
                Become the go-to destination for men's style and confidence in jaffna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 
            className="text-5xl font-bold text-white text-center mb-12"
            style={{
              fontFamily: 'Poetsen One',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            Meet Our Team
          </h2>

          {/* Team Members Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all"
            >
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Horizontal Scrolling Cards */}
            <div 
              ref={scrollContainerRef} 
              className="flex gap-6 overflow-x-auto px-12 py-4 hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={member.id} 
                  className={`border rounded-lg p-6 flex items-center gap-6 min-w-[400px] flex-shrink-0 ${
                    index === 1 ? 'border-blue-500' : 'border-white'
                  }`}
                  style={{ backgroundColor: '#00000099' }}
                >
                  {/* Profile Picture */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 text-left">
                    <h3 
                      className="text-white font-bold text-xl mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-white text-lg mb-1"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {member.title}
                    </p>
                    <p 
                      className="text-white text-base mb-2"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {member.experience}
                    </p>
                    <p 
                      className="text-white text-sm italic"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      {member.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
