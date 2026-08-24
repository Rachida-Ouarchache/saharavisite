import React, { useMemo } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { useLocalizedCircuits } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';
import { getSeoHub } from '../morocelite/seoHubs';
import { buildBreadcrumbLd, buildLocalBusinessLd } from '../utils/circuitJsonLd';

const SeoHubPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '').split('/')[0];
  const hub = getSeoHub(slug);
  const allCircuits = useLocalizedCircuits();

  const cards = useMemo(() => {
    if (!hub) return [];
    const bySlug = Object.fromEntries(allCircuits.map((c) => [c.slug, c]));
    return hub.circuits.map((s) => bySlug[s]).filter(Boolean).map(circuitToTourCard);
  }, [hub, allCircuits]);

  if (!hub) return <Navigate to="/tours" replace />;

  const jsonLd = [
    buildLocalBusinessLd(),
    buildBreadcrumbLd([
      { name: 'Home', url: '/' },
      { name: hub.h1, url: `/${hub.slug}` },
    ]),
  ];

  return (
    <div className="min-h-screen bg-moroc-ivory">
      <SEO
        title={hub.metaTitle}
        description={hub.description}
        url={`/${hub.slug}`}
        noSuffix
        jsonLd={jsonLd}
      />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <header className="relative bg-moroc-black pt-28 pb-16 md:pt-32 md:pb-20">
          <div className="container-custom max-w-3xl">
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">Sahara Visite</p>
            <h1 className="font-serif text-4xl md:text-5xl text-moroc-white font-medium mb-5">{hub.h1}</h1>
            <p className="font-moroc text-white/70 text-base md:text-lg leading-relaxed">{hub.intro}</p>
          </div>
        </header>

        <section className="py-16 md:py-24">
          <div className="container-custom">
            <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-10">Journeys</h2>
            {cards.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cards.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            ) : (
              <p className="text-moroc-black/60">
                <Link to="/tours" className="text-moroc-gold underline">
                  Explore our journeys
                </Link>
              </p>
            )}

            {hub.related?.length > 0 && (
              <nav className="mt-14 pt-10 border-t border-moroc-black/10" aria-label="Related pages">
                <h2 className="font-serif text-xl text-moroc-black mb-5">Continue exploring</h2>
                <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  {hub.related.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-sm font-semibold tracking-wide uppercase text-moroc-gold hover:text-moroc-black transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="mt-14 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center min-h-12 px-8 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeoHubPage;
