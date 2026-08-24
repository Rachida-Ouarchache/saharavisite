import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import SeoImage from '../components/SeoImage';
import Tilt3D from '../components/Tilt3D';
import { HOME_DESTINATIONS } from './homeContent';

const TopDestinations = () => {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="bg-moroc-sand/40 py-20 md:py-28" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
              {t('home.destinations.label')}
            </p>
            <h2
              id="destinations-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
            >
              {t('home.destinations.title')}
            </h2>
          </div>
          <p className="font-moroc text-moroc-black/55 max-w-md text-sm md:text-base leading-relaxed">
            {t('home.destinations.desc')}
          </p>
        </Reveal>

        <Reveal delayMs={70} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 [perspective:1200px]">
          {HOME_DESTINATIONS.map((d) => (
            <Tilt3D key={d.slug} max={4.5}>
            <Link
              to={d.to}
              data-cursor
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden block bg-moroc-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold focus-visible:ring-offset-2"
              aria-label={t(`home.destinations.items.${d.slug}.name`, { defaultValue: d.name })}
            >
              <SeoImage
                src={d.image}
                alt=""
                width={800}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-moroc-black/75 via-moroc-black/15 to-transparent" />
              <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                <span className="font-serif text-lg sm:text-2xl text-moroc-white tracking-wide group-hover:text-moroc-gold transition-colors duration-500">
                  {t(`home.destinations.items.${d.slug}.name`, { defaultValue: d.name })}
                </span>
              </div>
            </Link>
            </Tilt3D>
          ))}
        </Reveal>

        <Reveal delayMs={100} className="text-center mt-10 md:mt-14">
          <Link
            to="/destinations"
            className="inline-flex items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black border border-moroc-black/15 hover:border-moroc-gold hover:text-moroc-gold transition-all duration-500 ease-premium"
          >
            {t('home.destinations.viewAll')}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default TopDestinations;
