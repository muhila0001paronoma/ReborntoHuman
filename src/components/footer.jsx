import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Section */}
      <div className="footer-top">
        {/* Barber Info */}
        <div className="footer-barber">
          <img
            src="/barber.png"
            alt="Barber"
            className="footer-barber-image"
          />
          <div className="footer-barber-text">
            <p>
              "Reborn 2 Human is more than a barber shop - it's an experience.
              Our mission is to redefine grooming with premium services, expert
              care, and a touch of luxury."
            </p>
            <Link to="/bookappointment"><button>Book Appointment</button></Link>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/hairstyling">Service</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              Address: No.123 Main Street, Jaffna, Sri Lanka <br />
              Phone: +94 77 123 4567 <br />
              Email: info@reborn2human.com
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-privacy">
        <p>© 2025 Reborn 2 Human. All Rights Reserved.</p>
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
