import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import HairStyling from './services/HairStyling';
import Facial from './services/Facial';
import BeardShaving from './services/BeardShaving';
import SpecialGrooming from './services/SpecialGrooming';
import Haircut from './services/Haircut';
import OurPackages from './services/OurPackages';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import BookAppointment from './components/BookAppointment';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hairstyling" element={<HairStyling />} />
        <Route path="/facials" element={<Facial />} />
        <Route path="/beard-shaving" element={<BeardShaving />} />
        <Route path="/grooming" element={<SpecialGrooming />} />
        <Route path="/haircut" element={<Haircut />} />
        <Route path="/haircuts" element={<Haircut />} />
        <Route path="/packages" element={<OurPackages />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;



