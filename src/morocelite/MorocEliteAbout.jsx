import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const MorocEliteAbout = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-moroc-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl shadow-moroc-black/[0.12]">
              <img src="https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1000&q=85" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 w-48 h-48 border border-moroc-gold/45 rounded-sm -z-10 hidden sm:block" aria-hidden />
          </Reveal>
          <Reveal delayMs={100} className="order-1 lg:order-2">
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.about.label')}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium mb-8 leading-tight tracking-tight">
              {t('home.about.title')}
            </h2>
            <div className="font-moroc text-moroc-black/65 space-y-5 text-sm md:text-base leading-relaxed">
              <p>{t('home.about.p1')}</p>
              <p>{t('home.about.p2')}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default MorocEliteAbout;
