import React, { Suspense, lazy } from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Luxury from '../components/Luxury';
import MorocEliteHero from '../morocelite/MorocEliteHero';
import TrustBar from '../morocelite/TrustBar';
import WhySaharaVisite from '../morocelite/WhySaharaVisite';
import FeaturedExperiences from '../morocelite/FeaturedExperiences';
import TopDestinations from '../morocelite/TopDestinations';
import ExperiencesSection from '../morocelite/ExperiencesSection';
import HowItWorks from '../morocelite/HowItWorks';
import Testimonials from '../morocelite/Testimonials';
import Accommodation from '../morocelite/Accommodation';
import TravelJournal from '../morocelite/TravelJournal';
import MorocEliteCTA from '../morocelite/MorocEliteCTA';
import { buildLocalBusinessLd, buildOrganizationLd } from '../utils/circuitJsonLd';

const JourneyMap = lazy(() => import('../morocelite/JourneyMap'));

const MorocEliteHome = () => (
  <div className="min-h-screen bg-moroc-ivory font-moroc text-moroc-black antialiased">
    <a href="#main-content" className="skip-link">
      Skip to content
    </a>
    <SEO
      title="Luxury Morocco Tours & Private Sahara Journeys | Sahara Visite"
      description="Discover Morocco through private luxury journeys, Sahara desert tours and tailor-made experiences from Marrakech, Casablanca and beyond."
      url="/"
      noSuffix
      keywords={[
        'Luxury Morocco Tours',
        'Private Morocco Tours',
        'Sahara Desert Tours',
        'Marrakech Sahara Tour',
        'Tailor-made Morocco',
      ]}
      jsonLd={[buildOrganizationLd(), buildLocalBusinessLd()]}
    />
    <Navbar />
    <Luxury />
    <main id="main-content">
      <MorocEliteHero />
      <TrustBar />
      <WhySaharaVisite />
      <FeaturedExperiences />
      <TopDestinations />
      <ExperiencesSection />
      <HowItWorks />
      <Suspense fallback={<section className="bg-[#0D0C0A] min-h-[70vh]" aria-hidden />}>
        <JourneyMap />
      </Suspense>
      <Testimonials />
      <Accommodation />
      <TravelJournal />
      <MorocEliteCTA />
    </main>
    <Footer />
  </div>
);

export default MorocEliteHome;
