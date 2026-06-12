import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MorocEliteCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 md:py-36 bg-moroc-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=2000&q=80)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-moroc-black/88" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-moroc-white font-medium mb-8 leading-tight">
          {t('home.cta.title')}
        </h2>
        <p className="font-moroc text-white/65 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
          {t('home.cta.desc')}
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center min-h-12 px-12 py-4 text-sm font-semibold tracking-[0.18em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:text-moroc-black hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus:ring-2 focus:ring-moroc-gold/40 focus:ring-offset-2 focus:ring-offset-moroc-black">
          {t('home.cta.btn')}
        </Link>
      </div>
    </section>
  );
};

export default MorocEliteCTA;
