import React from "react";
import { Link, useLocation } from "react-router-dom";  // for dynamic links
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./services.css";

const servicesList = [
  "Haircuts",
  "Beard Shaving",
  "Hair Styling & Grooming",
  "Facial & Skin Care",
  "Special Grooming",
  "Our Packages",
];

const serviceCards = [
  { name: "Classic Haircut", description: "Professional Haircut with styling finish", duration: "30 mins", price: "LKR 1500.00", reviews: "4.8 (120 Reviews)", image: "/h1.png" },
  { name: "Taper Fade Haircut", description: "Modern low/high fade for sharp look", duration: "40 mins", price: "LKR 1900.00", reviews: "4.6 (43 Reviews)", image: "/h2.png" },
  { name: "Undercut", description: "Trendy undercut with style finish", duration: "40 mins", price: "LKR 2200.00", reviews: "4.5 (230 Reviews)", image: "/h3.png" },
  { name: "Scissor Cut", description: "Layered scissor cut for natural style", duration: "45 mins", price: "LKR 3000.00", reviews: "4.3 (21 Reviews)", image: "/h4.png" },
  { name: "Buzz Cut", description: "Simple clean clipper cut", duration: "20 mins", price: "LKR 1000.00", reviews: "4.5 (423 Reviews)", image: "/h5.png" },
];

const Haircut = () => {
  const location = useLocation(); // get current path

  return (
    <div className="haircut-page">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="haircut-hero">
        <h1>Hair Cuts</h1>
        <p>Expert grooming tailored for your style and confidence</p>
        <button className="haircut-hero-btn">Book Appointment</button>
      </section>

      <div className="haircut-content">
        {/* --- Left Sidebar --- */}
        <aside className="haircut-sidebar">
          {servicesList.map((service, index) => {
            let route = "";
            if (service === "Haircuts") route = "/haircuts";
            if (service === "Beard Shaving") route = "/beard-shaving";
            if (service === "Hair Styling & Grooming") route = "/hairstyling";
            if (service === "Facial & Skin Care") route = "/facials";
            if (service === "Special Grooming") route = "/grooming";
            if (service === "Our Packages") route = "/packages";

            const isActive = location.pathname === route;

            return (
              <Link
                key={index}
                to={route}
                className={`haircut-service-type ${isActive ? "active" : ""}`}
              >
                {service}
              </Link>
            );
          })}
        </aside>

        {/* --- Right Service Cards --- */}
        <div className="haircut-services-grid">
          {serviceCards.map((card, index) => (
            <div key={index} className="haircut-service-card">
              <div className="haircut-service-image-wrapper">
                <img
                  src={card.image}
                  alt={card.name}
                  className="haircut-service-image"
                />
              </div>
              <h3>{card.name}</h3>
              <p>{card.description}</p>
              <p>{card.duration} | {card.price}</p>
              <p>{card.reviews}</p>
              <div className="haircut-book-btn">Book Now</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Haircut;
