import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const STEPS = ['tell', 'design', 'travel'];

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="bg-moroc-charcoal py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.howItWorks.label')}
          </p>
          <h2
            id="how-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium tracking-tight"
          >
            {t('home.howItWorks.title')}
          </h2>
        </Reveal>

        <Reveal delayMs={70} className="grid md:grid-cols-3 gap-10 md:gap-12">
          {STEPS.map((key, index) => (
            <article key={key} className="text-center md:text-left">
              <span className="font-moroc text-moroc-gold/80 text-xs tracking-[0.25em] uppercase mb-4 block">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-2xl text-moroc-white mb-3">
                {t(`home.howItWorks.steps.${key}.title`)}
              </h3>
              <p className="font-moroc text-sm text-white/55 leading-relaxed">
                {t(`home.howItWorks.steps.${key}.text`)}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
