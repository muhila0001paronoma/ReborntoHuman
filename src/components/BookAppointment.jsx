import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [expandedServices, setExpandedServices] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceCategories = [
    {
      name: "Haircuts",
      services: [
        { name: "Classic Haircut", description: "Professional Haircut with styling finish", duration: "30 mins", price: "LKR 1500.00", reviews: "4.8 (120 Reviews)", image: "/h1.png" },
        { name: "Taper Fade Haircut", description: "Modern low/high fade for sharp look", duration: "40 mins", price: "LKR 1900.00", reviews: "4.6 (43 Reviews)", image: "/h2.png" },
        { name: "Undercut", description: "Trendy undercut with style finish and trendy Look", duration: "40 mins", price: "LKR 2200.00", reviews: "4.5 (230 Reviews)", image: "/h3.png" },
        { name: "Scissor Cut", description: "Layered scissor cut for natural style", duration: "45 mins", price: "LKR 3000.00", reviews: "4.3 (21 Reviews)", image: "/h4.png" },
        { name: "Buzz Cut", description: "Simple clean clipper cut", duration: "20 mins", price: "LKR 1000.00", reviews: "4.5 (423 Reviews)", image: "/h5.png" },
      ]
    },
    {
      name: "Hair Styling & Grooming",
      services: [
        { name: "Hairwash & Blow dry", description: "Refresh & style finish", duration: "20 mins", price: "LKR 800.00", reviews: "4.4 (239 Reviews)", image: "/hs1.png" },
        { name: "Hair Styling", description: "Event-ready look", duration: "15 mins", price: "LKR 750.00", reviews: "4.6 (54 Reviews)", image: "/hs2.png" },
        { name: "Hair Coloring", description: "Natural or fashion colors", duration: "10 mins", price: "LKR 900.00", reviews: "4.5 (456 Reviews)", image: "/hs3.png" },
        { name: "Hair Treatment", description: "Anti-dandruff & scalp care", duration: "45 mins", price: "LKR 2500.00", reviews: "4.3 (21 Reviews)", image: "/hs4.png" },
      ]
    },
    {
      name: "Facial & Skin Care",
      services: [
        { name: "Express Facial", description: "Quick refresh", duration: "20 mins", price: "LKR 2000.00", reviews: "4.7 (103 Reviews)", image: "/f1.png" },
        { name: "Cleansing Facial", description: "Removes dirt & blackheads", duration: "45 mins", price: "LKR 3000.00", reviews: "4.8 (14 Reviews)", image: "/f2.png" },
        { name: "Anti-aging Facial", description: "Hydration + Rejuvenation", duration: "60 mins", price: "LKR 4350.00", reviews: "4.8 (8 Reviews)", image: "/f3.png" },
        { name: "Gold Facial", description: "Luxury glowing treatment", duration: "80 mins", price: "LKR 5500.00", reviews: "4.0 (2 Reviews)", image: "/f4.png" },
        { name: "Face Mask Treatment", description: "Brightening / hydration mask", duration: "20 mins", price: "LKR 1500.00", reviews: "4.5 (5 Reviews)", image: "/f5.png" },
      ]
    },
    {
      name: "Beard Shaving",
      services: [
        { name: "Beard Trimming & Styling", description: "Clean shape & trim", duration: "20 mins", price: "LKR 1000.00", reviews: "4.8 (120 Reviews)", image: "/b1.png" },
        { name: "Beard Styling & Grooming", description: "Lineup & contour styling", duration: "30 mins", price: "LKR 1500.00", reviews: "4.6 (43 Reviews)", image: "/b2.png" },
        { name: "Beard & Moustache Pack", description: "Full beard grooming", duration: "40 mins", price: "LKR 1800.00", reviews: "4.5 (230 Reviews)", image: "/b3.png" },
        { name: "Hot Towel Shave and Care", description: "Traditional shave with hot towel", duration: "30 mins", price: "LKR 1200.00", reviews: "4.3 (21 Reviews)", image: "/b4.png" },
        { name: "Luxury Shave", description: "Shave + skincare treatment", duration: "40 mins", price: "LKR 3500.00", reviews: "4.5 (423 Reviews)", image: "/b5.png" },
        { name: "Beard Colouring", description: "Style & coverage colouring", duration: "30 mins", price: "LKR 1500.00", reviews: "4.4 (50 Reviews)", image: "/b6.png" },
      ]
    },
    {
      name: "Special Grooming",
      services: [
        { name: "Head Massage with Oil", description: "Relaxing scalp massage", duration: "20 mins", price: "LKR 1200.00", reviews: "4.7 (58 Reviews)", image: "/g1.png" },
        { name: "Shoulder & Neck Massage", description: "Stress relief", duration: "20 mins", price: "LKR 1500.00", reviews: "4.8 (14 Reviews)", image: "/g2.png" },
        { name: "Ear & Nose Grooming", description: "Waxing / Trimming", duration: "15 mins", price: "LKR 750.00", reviews: "4.3 (80 Reviews)", image: "/g3.png" },
        { name: "Eyebrow Shaping and Waxing", description: "Threading / trimming", duration: "10 mins", price: "LKR 600.00", reviews: "3.5 (35 Reviews)", image: "/g4.png" },
      ]
    },
    {
      name: "Our Packages",
      services: [
        { name: "Quick Fix Combo", description: "Haircut + Beard Trim", duration: "35 mins", price: "LKR 2500.00", reviews: "4.7 (15 Reviews)", image: "/p1.png" },
        { name: "Premium Combo", description: "Haircut + Beard Styling + Wash", duration: "75 mins", price: "LKR 3500.00", reviews: "4.8 (25 Reviews)", image: "/p2.png" },
        { name: "Luxury Pack", description: "Haircut + Beard Shaving + Facial", duration: "90 mins", price: "LKR 6000.00", reviews: "5.0 (3 Reviews)", image: "/p3.png" },
        { name: "Wedding Pack", description: "Full groom styling (trial + event)", duration: "150 mins", price: "LKR 13800.00", reviews: "4.0 (1 Reviews)", image: "/p4.png" },
      ]
    }
  ];

  const barbers = [
    { name: "John", position: "Senior Barber", experience: "5 yrs", image: "/br1.png" },
    { name: "Mark", position: "Stylist", experience: "3 yrs", image: "/br2.png" },
    { name: "David", position: "Master Barber", experience: "7 yrs", image: "/br3.png" },
    { name: "Alex", position: "Junior Barber", experience: "1 yr", image: "/br1.png" }
  ];

  const times = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM"];

  const toggleService = (serviceName) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  const toggleServiceSelection = (service) => {
    setSelectedServices(prev => {
      const isSelected = prev.some(s => s.name === service.name);
      if (isSelected) return prev.filter(s => s.name !== service.name);
      return [...prev, service];
    });
  };

  const isServiceSelected = (service) => {
    return selectedServices.some(s => s.name === service.name);
  };

  const confirmAppointment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setSelectedServices([]);
      setSelectedBarber(null);
      setSelectedDate("");
      setSelectedTime("");
    }, 3000);
  };

  return (
    <div className="popup-overlay p-6 relative">
      <div className="popup-content bg-gray-900 text-white p-6 rounded-lg max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Book Appointment</h1>
          <Link to="/" className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold hover:bg-gray-200 transition-all duration-300">×</Link>
        </div>

        <p className="text-lg font-medium mb-6 text-gray-300">Step {step} of 4</p>

        {/* STEP 1: Service Selection */}
        {step === 1 && (
          <div>
            {selectedServices.length > 0 && (
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <h3 className="text-white font-semibold mb-2">Selected Services ({selectedServices.length})</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map((service, index) => (
                    <span key={index} className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                      {service.name} - {service.price}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] bg-gray-600 flex-1"></div>
                    <span className="text-lg font-semibold px-4 py-2 bg-white text-black rounded-full">{category.name}</span>
                    <button onClick={() => toggleService(category.name)} className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold hover:bg-gray-200 transition-all duration-300">{expandedServices[category.name] ? '−' : '+'}</button>
                    <div className="h-[1px] bg-gray-600 flex-1"></div>
                  </div>

                  {expandedServices[category.name] && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.services.map((service, serviceIndex) => {
                        const isSelected = isServiceSelected(service);
                        return (
                          <div key={serviceIndex} className={`service-card border p-3 rounded-lg ${isSelected ? 'border-red-500' : 'border-gray-600'}`}>
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-24 h-24 object-cover rounded-full mx-auto mb-2"
                            />
                            <h3 className="font-semibold">{service.name}</h3>
                            <p className="text-sm text-gray-300">{service.description}</p>
                            <p className="text-sm mt-1">{service.duration} | {service.price}</p>
                            <p className="text-yellow-400 mt-1">⭐ {service.reviews}</p>
                            <button
                              onClick={() => toggleServiceSelection(service)}
                              className={`w-full mt-3 py-2 rounded-lg font-semibold ${
                                isSelected ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-black hover:bg-gray-200"
                              }`}
                            >
                              {isSelected ? "Deselect" : "Select"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Barber Selection */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 2 - Select Barber</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {barbers.map((barber, index) => (
                <div key={index} className={`bg-gray-800 p-4 rounded-lg flex flex-col items-center border ${selectedBarber?.name === barber.name ? "border-green-500" : "border-gray-600"}`}>
                  <img src={barber.image} alt={barber.name} className="w-32 h-32 object-cover rounded-full mb-2"/>
                  <h3 className="font-semibold">{barber.name}</h3>
                  <p className="text-sm text-gray-300">{barber.position}</p>
                  <p className="text-sm text-gray-400">{barber.experience}</p>
                  <button
                    onClick={() => setSelectedBarber(barber)}
                    className={`mt-3 w-full py-2 rounded-lg font-semibold ${
                      selectedBarber?.name === barber.name ? "bg-green-500 text-white" : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    {selectedBarber?.name === barber.name ? "Selected" : "Select"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Date & Time */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 3 - Select Date & Time</h2>
            <input
              type="date"
              className="mb-4 p-2 rounded-lg bg-gray-800 border border-gray-600 w-full"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {times.map((time, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg text-center cursor-pointer border ${
                    selectedTime === time ? "bg-green-500 text-white border-green-500" : "bg-gray-800 border-gray-600"
                  }`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: Review & Confirm */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Step 4 - Review & Confirm</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Selected Services:</h3>
                <ul className="list-disc ml-6">
                  {selectedServices.map((s, i) => (
                    <li key={i}>{s.name} - {s.price}</li>
                  ))}
                </ul>
              </div>
              <p><span className="font-semibold">Barber:</span> {selectedBarber?.name}</p>
              <p><span className="font-semibold">Date:</span> {selectedDate}</p>
              <p><span className="font-semibold">Time:</span> {selectedTime}</p>
            </div>
            <button
              className="mt-6 w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 flex items-center justify-center gap-2"
              onClick={confirmAppointment}
            >
              ✅ Confirm Appointment
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-600">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-lg text-base font-semibold"
            >
              Back
            </button>
          )}
          {step < 4 && (
            <button
              onClick={() => setStep(step + 1)}
              className={`ml-auto bg-white text-black px-6 py-2 rounded-lg text-base font-semibold hover:bg-gray-200`}
              disabled={
                (step === 1 && selectedServices.length === 0) ||
                (step === 2 && !selectedBarber) ||
                (step === 3 && (!selectedDate || !selectedTime))
              }
            >
              Next →
            </button>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-light bg-green-100 text-black p-6 rounded-lg flex flex-col items-center gap-2">
            <span className="text-4xl">✅</span>
            <h3 className="text-2xl font-bold">Appointment Successful!</h3>
            <p>Your appointment has been booked successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}