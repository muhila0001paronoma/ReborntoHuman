import React, { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
      {/* Header */}
     

      {/* Get In Touch Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 border border-white rounded-lg p-8" style={{ backgroundColor: '#00000099' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Information */}
              <div>
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
                  Get In Touch
                </h1>
                <p 
                  className="text-white mb-8"
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
                  Whether you're booking your next appointment, asking about our services, or just saying hello - we'd love to hear from you. Our team at Reborn 2 Human is always ready to assist.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span 
                      className="text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      info@reborn2human.com
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span 
                      className="text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      +94 77 123 4567
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex items-center space-x-4">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span 
                      className="text-white"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      No.123 Main Street, Jaffna, Srilanka
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>

                  {/* Email/Phone Field */}
                  <div>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address / Phone Number"
                      required
                      className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white text-black rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-white resize-none"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                    style={{ fontFamily: 'Poppins' }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d80.0025!3d9.6615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5c4b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sJaffna%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1640000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Reborn 2 Human Location"
            ></iframe>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default Contact
