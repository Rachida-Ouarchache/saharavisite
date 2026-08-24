import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-moroc-ivory text-primary-900 antialiased">
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>
    <Navbar />
    <main id="main-content" className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
