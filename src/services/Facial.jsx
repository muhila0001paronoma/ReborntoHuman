import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer";

// Import images
import f1Image from "../assets/images/f1.png";
import f2Image from "../assets/images/f2.png";
import f3Image from "../assets/images/f3.png";
import f4Image from "../assets/images/f4.png";
import f5Image from "../assets/images/f5.png";

const servicesList = [
  "Haircuts",
  "Beard Shaving",
  "Hair Styling & Grooming",
  "Facial & Skin Care",
  "Special Grooming",
  "Our Packages",
];

const serviceCards = [
  { name: "Express Facial", description: "Quick refresh", duration: "20 mins", price: "LKR 2000.00", reviews: "4.7 (103 Reviews)", image: f1Image },
  { name: "Deep Cleansing Facial", description: "Removes dirt & blackheads", duration: "45 mins", price: "LKR 3000.00", reviews: "4.8 (14 Reviews)", image: f2Image },
  { name: "Anti-aging Facial", description: "Hydration + Rejuvenation", duration: "60 mins", price: "LKR 4350.00", reviews: "4.8 (8 Reviews)", image: f3Image },
  { name: "Gold Facial", description: "Luxury glowing treatment", duration: "80 mins", price: "LKR 5500.00", reviews: "4.0 (2 Reviews)", image: f4Image },
  { name: "Face Mask Treatment", description: "Brightening / hydration mask", duration: "20 mins", price: "LKR 1500.00", reviews: "4.5 (5 Reviews)", image: f5Image },
];

const Facial = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="text-center py-10 px-8">
        <h1 
          className="text-4xl font-bold mb-3"
          style={{
            fontFamily: 'Poetsen One',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '100%',
            letterSpacing: '0%'
          }}
        >
          Facial & Skin Care Services
        </h1>
        <p 
          className="text-xl text-gray-300 mb-4"
          style={{ 
            fontFamily: 'Poppins',
            fontWeight: 300,
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '150%',
            letterSpacing: '0%'
          }}
        >
          Expert facial and skincare tailored for your confidence and glow
        </p>
        <button 
          className="px-6 py-3 text-base font-semibold bg-white text-black rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:-translate-y-0.5"
          style={{ fontFamily: 'Poppins' }}
        >
          Book Appointment
        </button>
      </section>

      <div className="flex flex-col lg:flex-row p-8 gap-8">
        {/* Sidebar with active highlighting */}
        <aside className="flex flex-col gap-3 min-w-48 lg:min-w-48">
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
                className={`text-xl px-4 py-2 border-l-4 border-transparent cursor-pointer text-white no-underline transition-all duration-300 block hover:translate-x-2 hover:border-yellow-400 hover:ml-4 hover:bg-yellow-400/30 ${
                  isActive 
                    ? 'bg-yellow-400/30 border-l-4 border-yellow-400 font-semibold ml-4 translate-x-2 text-yellow-400' 
                    : ''
                }`}
                style={{ fontFamily: 'Poppins' }}
              >
                {service}
              </Link>
            );
          })}
        </aside>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
          {serviceCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-black/60 border-2 border-white rounded-2xl p-4 text-center flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/20 min-h-[350px]"
            >
              <div className="w-30 h-30 mx-auto mb-4 flex justify-center items-center overflow-hidden rounded-full bg-gray-900">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 
                className="text-xl mb-2"
                style={{ fontFamily: 'Poppins' }}
              >
                {card.name}
              </h3>
              <p 
                className="text-sm mb-1 text-gray-300"
                style={{ fontFamily: 'Poppins' }}
              >
                {card.description}
              </p>
              <p 
                className="text-sm mb-1 text-gray-300"
                style={{ fontFamily: 'Poppins' }}
              >
                {card.duration} | {card.price}
              </p>
              <p 
                className="text-sm mb-1 text-gray-300"
                style={{ fontFamily: 'Poppins' }}
              >
                {card.reviews}
              </p>
              <button 
                className="mt-auto px-3 py-2 bg-white text-black font-semibold rounded-lg cursor-pointer text-sm transition-all duration-300 hover:bg-yellow-400 hover:text-black transform hover:-translate-y-0.5"
                style={{ fontFamily: 'Poppins' }}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Facial;
