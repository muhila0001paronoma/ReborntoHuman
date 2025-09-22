import React from 'react';
import Navbar from './Navbar';
import Footer from './layout/Footer';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

