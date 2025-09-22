import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
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
  {
    name: "Hair wash & Blow dry",
    description: "Refresh & style finish",
    duration: "20 mins",
    price: "LKR 800.00",
    reviews: "4.4 (239 Reviews)",
    image: "/hs1.png",
  },
  {
    name: "Hair Styling",
    description: "Event-ready look",
    duration: "15 mins",
    price: "LKR 750.00",
    reviews: "4.6 (54 Reviews)",
    image: "/hs2.png",
  },
  {
    name: "Hair Coloring",
    description: "Natural or fashion colors",
    duration: "10 mins",
    price: "LKR 900.00",
    reviews: "4.5 (456 Reviews)",
    image: "/hs3.png",
  },
  {
    name: "Hair Treatment",
    description: "Anti-dandruff & scalp care",
    duration: "45 mins",
    price: "LKR 2500.00",
    reviews: "4.3 (21 Reviews)",
    image: "/hs4.png",
  },
];

const HairStyling = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="haircut-page">
        {/* Hero Section */}
        <section className="haircut-hero">
          <h1>Hair Styling & Grooming</h1>
          <p>Expert grooming tailored for your style and confidence</p>
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
                <p>{card.duration} | {card.price}</p>
                <p>{card.reviews}</p>
                <div className="haircut-book-btn">Book Now</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HairStyling;
