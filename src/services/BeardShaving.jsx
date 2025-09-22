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
  { name: "Beard Trim", description: "Clean shape & trim", duration: "20 mins", price: "LKR 1000.00", reviews: "4.8 (120 Reviews)", image: "/b1.png" },
  { name: "Beard Styling", description: "Lineup & contour styling", duration: "30 mins", price: "LKR 1500.00", reviews: "4.6 (43 Reviews)", image: "/b2.png" },
  { name: "Beard & Moustache Pack", description: "Full beard grooming", duration: "40 mins", price: "LKR 1800.00", reviews: "4.5 (230 Reviews)", image: "/b3.png" },
  { name: "Hot Towel Shave", description: "Traditional shave with hot towel", duration: "30 mins", price: "LKR 1200.00", reviews: "4.3 (21 Reviews)", image: "/b4.png" },
  { name: "Luxury Shave", description: "Shave + skincare treatment", duration: "40 mins", price: "LKR 3500.00", reviews: "4.5 (423 Reviews)", image: "/b5.png" },
  { name: "Beard Colouring", description: "Style & coverage colouring", duration: "30 mins", price: "LKR 1500.00", reviews: "4.4 (50 Reviews)", image: "/b1.png" },
];

const BeardShaving = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="haircut-page">
        <section className="haircut-hero">
          <h1>Beard Shaving Services</h1>
          <p>Expert beard grooming tailored for your style and confidence</p>
          <button className="haircut-hero-btn">Book Appointment</button>
        </section>

        <div className="haircut-content">
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

export default BeardShaving;
