import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import TourCard from '../components/TourCard';
import { useLocalizedCircuits } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';

const HOME_FEATURED_SLUGS = [
  'marrakech-merzouga-3-jours',
  'casablanca-rabat-meknes-fes-marrakech',
  'circuit-chefchaouen',
  'circuit-essaouira',
];

const FeaturedExperiences = () => {
  const { t } = useTranslation();
  const allCircuits = useLocalizedCircuits();

  const experiences = useMemo(() => {
    const bySlug = Object.fromEntries(allCircuits.map((c) => [c.slug, c]));
    const picked = HOME_FEATURED_SLUGS.map((slug) => bySlug[slug]).filter(Boolean);
    if (picked.length >= 4) return picked.slice(0, 4);
    const featured = allCircuits.filter((c) => c.featured);
    const rest = allCircuits.filter((c) => !picked.some((p) => p.slug === c.slug));
    return [...picked, ...featured, ...rest].slice(0, 4);
  }, [allCircuits]);

  const cards = useMemo(() => experiences.map(circuitToTourCard), [experiences]);

  return (
    <section id="journeys" className="bg-moroc-ivory py-20 md:py-28" aria-labelledby="journeys-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.experiences.label')}
          </p>
          <h2
            id="journeys-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
          >
            {t('home.experiences.title')}
          </h2>
          <p className="mt-6 font-moroc text-moroc-black/55 text-sm md:text-base leading-relaxed">
            {t('home.experiences.subtitle')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 max-w-7xl mx-auto [perspective:1200px]">
          {cards.map((tour, index) => (
            <TourCard key={tour.slug} tour={tour} featuredLabel={index === 0} />
          ))}
        </Reveal>

        <Reveal delayMs={120} className="text-center mt-12 md:mt-16">
          <Link
            to="/tours"
            className="inline-flex items-center justify-center min-h-11 px-7 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:-translate-y-0.5"
          >
            {t('home.experiences.viewAll')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
