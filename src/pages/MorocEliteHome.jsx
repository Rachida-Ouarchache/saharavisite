import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import MorocEliteHero from '../morocelite/MorocEliteHero';
import FeaturedExperiences from '../morocelite/FeaturedExperiences';
import MorocEliteAbout from '../morocelite/MorocEliteAbout';
import WhyChooseUs from '../morocelite/WhyChooseUs';
import TopDestinations from '../morocelite/TopDestinations';
import Testimonials from '../morocelite/Testimonials';
import MorocEliteCTA from '../morocelite/MorocEliteCTA';
import MorocEliteFooter from '../morocelite/MorocEliteFooter';

const MorocEliteHome = () => (
  <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
    <Helmet>
      <title>Sahara Visite – Luxury Morocco Journeys</title>
      <meta
        name="description"
        content="Sahara Visite crafts exclusive luxury travel in Morocco-private tours, desert camps, and bespoke itineraries."
      />
    </Helmet>
    <Navbar />
    <main>
      <MorocEliteHero />
      <FeaturedExperiences />
      <MorocEliteAbout />
      <WhyChooseUs />
      <TopDestinations />
      <Testimonials />
      <MorocEliteCTA />
    </main>
    <MorocEliteFooter />
  </div>
);

export default MorocEliteHome;
