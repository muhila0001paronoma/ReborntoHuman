import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/footer";

function Home() {
  return (
    <div>
      {/* --- Navbar --- */}
      <Navbar>
        {/* Navbar buttons update */}
        <div className="navbar-right flex gap-4">
          <Link to="/book" className="no-underline">
            <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500">
              Book Appointment
            </button>
          </Link>
          <Link to="/signin" className="no-underline">
            <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500">
              Sign In
            </button>
          </Link>
        </div>
      </Navbar>

      {/* --- Hero Section --- */}
      <section 
        className="hero"
        style={{ backgroundImage: "url('/Header.png')" }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>Reborn 2 Human</h1>
            <h2>Not just a haircut, a transformation</h2>
            <div className="hero-actions">
              <button className="btn-outline-large">Book Appointment</button>
              <button className="btn-outline-large">Purchase Products</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Services Section --- */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {/* Haircut */}
          <Link to="/haircuts" className="service-card-link no-underline">
            <div className="service-card">
              <div className="service-image-wrapper">
                <img src="/haircut.png" alt="Haircut" className="service-image" />
                <div className="service-overlay"></div>
              </div>
              <h3>Haircut</h3>
              <p>From classic cuts to modern fades, tailored to your look with precision</p>
              <div className="read-more">Read more...</div>
            </div>
          </Link>

          {/* Shaving */}
          <Link to="/beard-shaving" className="service-card-link no-underline">
            <div className="service-card">
              <div className="service-image-wrapper">
                <img src="/shaving.png" alt="Shaving" className="service-image" />
                <div className="service-overlay"></div>
              </div>
              <h3>Shaving</h3>
              <p>Traditional shaves & luxury hot towel treatment for a clean, sharp finish</p>
              <div className="read-more">Read more...</div>
            </div>
          </Link>

          {/* Styling */}
          <Link to="/hairstyling" className="service-card-link no-underline">
            <div className="service-card">
              <div className="service-image-wrapper">
                <img src="/styling.png" alt="Styling" className="service-image" />
                <div className="service-overlay"></div>
              </div>
              <h3>Styling</h3>
              <p>Professional styling with premium products to keep you looking sharp</p>
              <div className="read-more">Read more...</div>
            </div>
          </Link>
        </div>

        <Link to="/haircuts" className="no-underline">
          <button className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 hover:bg-orange-500 hover:border-orange-500 mt-6">
            View All Services
          </button>
        </Link>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="why-choose-us">
        <h2 className="section-title-black">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/scissors.png" alt="Expert Barbers" />
            <p>Expert Barbers</p>
          </div>
          <div className="feature-card">
            <img src="/star.png" alt="Premium Products" />
            <p>Premium Products</p>
          </div>
          <div className="feature-card">
            <img src="/easy.png" alt="Easy Online Booking" />
            <p>Easy Online Booking</p>
          </div>
          <div className="feature-card">
            <img src="/dollar.png" alt="Reasonable Price" />
            <p>Reasonable Price</p>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="testimonials">
        <h2 className="section-title-white">What Our Clients Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document"
          </p>
          <div className="testimonial-footer">
            <div className="testimonial-info">
              <p className="testimonial-name">John</p>
              <div className="testimonial-stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
            <img src="/john.png" alt="John" className="testimonial-image" />
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <Footer />
    </div>
  );
}

export default Home;
