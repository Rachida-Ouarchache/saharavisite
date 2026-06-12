import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-white text-primary-900 antialiased">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
