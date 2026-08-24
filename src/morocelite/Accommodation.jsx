import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import SeoImage from '../components/SeoImage';
import { HOME_ACCOMMODATION } from './homeContent';

const Accommodation = () => {
  const { t } = useTranslation();

  return (
    <section
      id="accommodation"
      aria-labelledby="stay-heading"
      className="bg-moroc-ivory py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.accommodation.label')}
          </p>
          <h2
            id="stay-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
          >
            {t('home.accommodation.title')}
          </h2>
          <p className="mt-5 font-moroc text-moroc-black/55 text-sm md:text-base leading-relaxed">
            {t('home.accommodation.subtitle')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HOME_ACCOMMODATION.map((item) => (
            <article key={item.key} className="group relative aspect-[3/4] overflow-hidden">
              <SeoImage
                src={item.image}
                alt={t(`home.accommodation.items.${item.key}.title`)}
                width={700}
                height={900}
                className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moroc-black/80 via-moroc-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
                <h3 className="font-serif text-xl text-moroc-white mb-2">
                  {t(`home.accommodation.items.${item.key}.title`)}
                </h3>
                <p className="font-moroc text-xs sm:text-sm text-white/70 leading-relaxed">
                  {t(`home.accommodation.items.${item.key}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal delayMs={100} className="text-center mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-gold border-b border-moroc-gold hover:text-moroc-black hover:border-moroc-black transition-colors duration-500"
          >
            {t('cta.talkExpert')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Accommodation;
