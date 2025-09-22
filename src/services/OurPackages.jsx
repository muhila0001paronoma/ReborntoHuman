import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./components/Footer";
import "./services.css"; // Using the unified CSS

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
    name: "Quick Fix Combo",
    description: "Haircut + Beard Trim",
    duration: "35 mins",
    price: "LKR 2500.00",
    reviews: "4.7 (15 Reviews)",
    image: "/p1.png",
  },
  {
    name: "Premium Combo",
    description: "Haircut + Beard Styling + Wash",
    duration: "75 mins",
    price: "LKR 3500.00",
    reviews: "4.8 (25 Reviews)",
    image: "/p2.png",
  },
  {
    name: "Luxury Grooming Pack",
    description: "Haircut + Beard Shaving + Facial",
    duration: "90 mins",
    price: "LKR 6000.00",
    reviews: "5.0 (3 Reviews)",
    image: "/p3.png",
  },
  {
    name: "Wedding Pack",
    description: "Full groom styling (trial + event)",
    duration: "150 mins",
    price: "LKR 13800.00",
    reviews: "4.0 (1 Reviews)",
    image: "/p4.png",
  },
];

const OurPackages = () => {
  const location = useLocation();

  return (
    <div className="haircut-page">
      <Navbar />

      {/* Hero Section */}
      <section className="haircut-hero">
        <h1>Our Packages</h1>
        <p>Tailored grooming combos for every occasion</p>
        <button className="haircut-hero-btn">Book Appointment</button>
      </section>

      <div className="haircut-content">
        {/* Sidebar */}
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

        {/* Service Cards */}
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

export default OurPackages;
