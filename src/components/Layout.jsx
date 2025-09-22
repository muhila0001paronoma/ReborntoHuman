import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

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

