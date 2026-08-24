import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiCompass, FiUsers, FiMap, FiAward } from 'react-icons/fi';
import Reveal from '../components/Reveal';

const ICONS = [FiCompass, FiUsers, FiMap, FiAward];
const KEYS = ['tailor', 'private', 'experts', 'luxury'];

const WhySaharaVisite = () => {
  const { t } = useTranslation();

  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative bg-moroc-ivory py-20 md:py-28 border-b border-moroc-black/[0.04]"
    >
      <div className="zellige-pattern absolute inset-0 opacity-[0.045] pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.why.label')}
          </p>
          <h2
            id="why-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
          >
            {t('home.why.title')}
          </h2>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {KEYS.map((key, i) => {
            const Icon = ICONS[i];
            return (
              <article key={key} className="text-center sm:text-left group">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-moroc-gold/35 text-moroc-gold mb-5 group-hover:bg-moroc-gold group-hover:text-moroc-black transition-colors duration-500 ease-premium">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="font-serif text-xl text-moroc-black mb-3">
                  {t(`home.why.features.${key}.title`)}
                </h3>
                <p className="font-moroc text-sm text-moroc-black/60 leading-relaxed">
                  {t(`home.why.features.${key}.text`)}
                </p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default WhySaharaVisite;
