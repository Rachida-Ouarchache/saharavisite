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
    <section id="experiences" className="bg-moroc-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.experiences.label')}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight">
            {t('home.experiences.title')}
          </h2>
          <p className="mt-6 font-moroc text-moroc-black/55 text-sm md:text-base leading-relaxed">
            {t('home.experiences.subtitle')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {cards.map((tour, index) => (
            <TourCard key={tour.slug} tour={tour} featuredLabel={index === 0} />
          ))}
        </Reveal>

        <Reveal delayMs={120} className="text-center mt-12 md:mt-16">
          <Link
            to="/tours"
            className="inline-flex items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:-translate-y-0.5"
          >
            {t('home.experiences.viewAll', { defaultValue: 'Voir tous les circuits' })}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
