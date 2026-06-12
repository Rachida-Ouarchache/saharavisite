import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const HERO_IMAGE = 'https://res.cloudinary.com/dc3uvcobc/image/upload/v1775053542/pixelraw-desert-4944794_1920_csvuni.jpg';

const MorocEliteHero = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const parallax = scrollY * 0.35;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${parallax}px)` }} aria-hidden>
        <img src={HERO_IMAGE} alt="Morocco luxury travel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-moroc-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/20 via-transparent to-moroc-black/65" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 lg:pt-32 pb-20">
        <p className="text-moroc-gold text-xs sm:text-sm uppercase tracking-[0.35em] mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {t('home.hero.label')}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-moroc-white font-medium leading-tight mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          {t('home.hero.title')}
        </h1>
        <p className="font-moroc text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {t('home.hero.subtitle')}
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
          <a
            href="#experiences"
            className="inline-flex items-center justify-center min-h-12 px-10 py-3.5 text-sm font-semibold tracking-[0.18em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:text-moroc-black hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus:ring-2 focus:ring-moroc-gold/40 focus:ring-offset-2 focus:ring-offset-moroc-black"
          >
            {t('home.hero.cta')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="w-px h-12 bg-gradient-to-b from-moroc-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default MorocEliteHero;
