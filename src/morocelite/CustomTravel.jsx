import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiCompass, FiEdit3, FiSun } from 'react-icons/fi';
import { GiPathDistance } from 'react-icons/gi';
import Reveal from '../components/Reveal';

const STEP_ICONS = [FiCompass, GiPathDistance, FiEdit3, FiSun];

const CustomTravel = () => {
  const { t } = useTranslation();

  const steps = t('home.customTravel.steps', { returnObjects: true });
  const benefits = t('home.customTravel.benefits', { returnObjects: true });

  return (
    <section
      id="voyage-sur-mesure"
      aria-labelledby="custom-travel-heading"
      className="bg-moroc-white py-24 md:py-32 border-y border-moroc-black/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center mb-20 md:mb-28">
          <Reveal className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl shadow-moroc-black/[0.12]">
              <img
                src="https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1000&q=85"
                alt={t('home.customTravel.imageAlt')}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-4 md:right-8 w-48 h-48 border border-moroc-gold/45 rounded-sm -z-10 hidden sm:block"
              aria-hidden
            />
          </Reveal>
          <Reveal delayMs={100} className="order-1 lg:order-2">
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
              {t('home.customTravel.label')}
            </p>
            <h2
              id="custom-travel-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium mb-8 leading-tight tracking-tight"
            >
              {t('home.customTravel.title')}
            </h2>
            <p className="font-moroc text-moroc-black/65 text-sm md:text-base leading-relaxed">
              {t('home.customTravel.description')}
            </p>
          </Reveal>
        </div>

        <Reveal delayMs={60} className="mb-20 md:mb-28">
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-moroc-charcoal py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium text-center tracking-tight mb-16 md:mb-24">
                {t('home.customTravel.howItWorks')}
              </h3>
              <ol
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
                aria-label={t('home.customTravel.stepsAriaLabel')}
              >
                {Array.isArray(steps) &&
                  steps.map((step, index) => {
                    const Icon = STEP_ICONS[index];
                    return (
                      <li key={step.title} className="text-center lg:text-left group px-2 sm:px-0">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-moroc-gold/40 text-moroc-gold mb-5 mx-auto lg:mx-0 group-hover:bg-moroc-gold group-hover:text-moroc-black group-hover:border-moroc-gold transition-all duration-500 ease-premium">
                          <Icon className="w-6 h-6" aria-hidden />
                        </div>
                        <span
                          className="block font-moroc text-[10px] uppercase tracking-[0.25em] text-moroc-gold/80 mb-2"
                          aria-hidden
                        >
                          {t('home.customTravel.stepLabel', { number: index + 1 })}
                        </span>
                        <h4 className="font-serif text-lg md:text-xl text-moroc-white mb-3">{step.title}</h4>
                        <p className="font-moroc text-sm text-white/55 leading-relaxed">{step.text}</p>
                      </li>
                    );
                  })}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="mb-20 md:mb-28">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium text-center tracking-tight mb-16 md:mb-24">
            {t('home.customTravel.whyChoose')}
          </h3>
          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5 max-w-5xl mx-auto"
            aria-label={t('home.customTravel.benefitsAriaLabel')}
          >
            {Array.isArray(benefits) &&
              benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 font-moroc text-sm text-moroc-black/70">
                  <FiCheck className="w-5 h-5 text-moroc-gold shrink-0 mt-0.5" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delayMs={140}>
          <div
            className="relative max-w-4xl mx-auto bg-moroc-charcoal border border-moroc-gold/30 rounded-sm px-6 py-12 md:px-12 md:py-14 text-center overflow-hidden"
            role="region"
            aria-labelledby="custom-travel-cta-heading"
          >
            <div
              className="absolute inset-0 opacity-[0.07] bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1509023469722-087a5d2169b7?auto=format&fit=crop&w=1200&q=80)',
              }}
              aria-hidden
            />
            <div className="relative z-10">
              <h3
                id="custom-travel-cta-heading"
                className="font-serif text-xl md:text-2xl text-moroc-gold uppercase tracking-[0.12em] mb-3"
              >
                {t('home.customTravel.cta.sectionTitle')}
              </h3>
              <p className="font-serif text-2xl md:text-3xl text-moroc-white font-medium mb-4 leading-tight">
                {t('home.customTravel.cta.title')}
              </p>
              <p className="font-moroc text-white/65 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                {t('home.customTravel.cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-12 w-full sm:w-auto px-10 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus:ring-2 focus:ring-moroc-gold/40 focus:ring-offset-2 focus:ring-offset-moroc-charcoal"
                  aria-label={t('home.customTravel.cta.createTripAria')}
                >
                  {t('home.customTravel.cta.createTrip')}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-12 w-full sm:w-auto px-10 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase text-moroc-white border border-white/35 transition-all duration-500 ease-premium hover:border-moroc-gold hover:text-moroc-gold focus:outline-none focus:ring-2 focus:ring-moroc-gold/30 focus:ring-offset-2 focus:ring-offset-moroc-charcoal"
                  aria-label={t('home.customTravel.cta.quoteAria')}
                >
                  {t('home.customTravel.cta.quote')}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CustomTravel;
