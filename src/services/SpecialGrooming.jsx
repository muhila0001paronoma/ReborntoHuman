import React from "react";
import { Link, useLocation } from "react-router-dom"; // For active links
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./services.css"; // Using the same CSS

const servicesList = [
  "Haircuts",
  "Beard Shaving",
  "Hair Styling & Grooming",
  "Facial & Skin Care",
  "Special Grooming",
  "Our Packages",
];

const serviceCards = [
  {
    name: "Head Massage",
    description: "Relaxing scalp massage",
    duration: "20 mins",
    price: "LKR 1200.00",
    reviews: "4.7 (58 Reviews)",
    image: "/g1.png",
  },
  {
    name: "Shoulder & Neck Massage",
    description: "Stress relief",
    duration: "20 mins",
    price: "LKR 1500.00",
    reviews: "4.8 (14 Reviews)",
    image: "/g2.png",
  },
  {
    name: "Ear & Nose Grooming",
    description: "Waxing / Trimming",
    duration: "15 mins",
    price: "LKR 750.00",
    reviews: "4.3 (80 Reviews)",
    image: "/g3.png",
  },
  {
    name: "Eyebrow Shaping",
    description: "Threading / trimming",
    duration: "10 mins",
    price: "LKR 600.00",
    reviews: "3.5 (35 Reviews)",
    image: "/g4.png",
  },
];

const SpecialGrooming = () => {
  const location = useLocation();

  return (
    <div className="haircut-page">
      <Navbar />

      {/* Hero Section */}
      <section className="haircut-hero">
        <h1>Special Grooming Services</h1>
        <p>Professional grooming for a polished and confident look</p>
        <button className="haircut-hero-btn">Book Appointment</button>
      </section>

      <div className="haircut-content">
        {/* Left Sidebar */}
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

        {/* Right Service Cards */}
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
              <p>
                {card.duration} | {card.price}
              </p>
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

export default SpecialGrooming;