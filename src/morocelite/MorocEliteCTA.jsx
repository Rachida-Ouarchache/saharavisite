import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MorocEliteCTA = () => {
  const { t } = useTranslation();

  return (
    <section
      id="plan"
      className="relative py-20 md:py-28 bg-moroc-black overflow-hidden"
      aria-labelledby="plan-cta-heading"
    >
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/dc3uvcobc/image/upload/f_auto,q_auto,w_1600/v1775053542/pixelraw-desert-4944794_1920_csvuni.jpg)',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-moroc-black/85" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.cta.label')}</p>
        <h2
          id="plan-cta-heading"
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium tracking-tight mb-6 leading-tight"
        >
          {t('home.cta.title')}
        </h2>
        <p className="font-moroc text-white/65 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          {t('home.cta.desc')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center min-h-12 px-10 py-3.5 text-sm font-semibold tracking-[0.14em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-moroc-black"
          >
            {t('cta.planJourney')}
          </Link>
          <Link
            to="/tours"
            className="inline-flex w-full sm:w-auto items-center justify-center min-h-12 px-10 py-3.5 text-sm font-semibold tracking-[0.14em] uppercase text-moroc-white border border-white/35 transition-all duration-500 ease-premium hover:border-moroc-gold hover:text-moroc-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/30 focus-visible:ring-offset-2 focus-visible:ring-offset-moroc-black"
          >
            {t('cta.exploreJourneys')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MorocEliteCTA;
