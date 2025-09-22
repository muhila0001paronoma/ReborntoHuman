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
  { name: "Express Facial", description: "Quick refresh", duration: "20 mins", price: "LKR 2000.00", reviews: "4.7 (103 Reviews)", image: "/f1.png" },
  { name: "Deep Cleansing Facial", description: "Removes dirt & blackheads", duration: "45 mins", price: "LKR 3000.00", reviews: "4.8 (14 Reviews)", image: "/f2.png" },
  { name: "Anti-aging Facial", description: "Hydration + Rejuvenation", duration: "60 mins", price: "LKR 4350.00", reviews: "4.8 (8 Reviews)", image: "/f3.png" },
  { name: "Gold Facial", description: "Luxury glowing treatment", duration: "80 mins", price: "LKR 5500.00", reviews: "4.0 (2 Reviews)", image: "/f4.png" },
  { name: "Face Mask Treatment", description: "Brightening / hydration mask", duration: "20 mins", price: "LKR 1500.00", reviews: "4.5 (5 Reviews)", image: "/f5.png" },
];

const Facial = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="haircut-page">
        <section className="haircut-hero">
          <h1>Facial & Skin Care Services</h1>
          <p>Expert facial and skincare tailored for your confidence and glow</p>
          <button className="haircut-hero-btn">Book Appointment</button>
        </section>

        <div className="haircut-content">
          {/* Sidebar with active highlighting */}
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
      </div>
    </Layout>
  );
};

export default Facial;
