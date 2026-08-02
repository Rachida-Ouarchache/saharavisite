import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';

const destinations = [
  {
    key: 'marrakechMerzouga',
    to: '/circuits/marrakech-merzouga-3-jours',
    image: 'https://res.cloudinary.com/dc3uvcobc/image/upload/v1775672669/a_different_perspective-marrakech-4500910_1280_xwftus.jpg',
  },
  {
    key: 'fesMerzouga',
    to: '/circuits/fes-merzouga',
    image: 'https://res.cloudinary.com/dc3uvcobc/image/upload/v1775673144/nike159-merzouga-4686151_640_wg12xk.jpg',
  },
  {
    key: 'chefchaouenAkchour',
    to: '/circuits/circuit-akchour',
    image: 'https://res.cloudinary.com/dc3uvcobc/image/upload/v1775672670/travelurdream-morocco-3814316_1280_g6gac4.jpg',
  },
  {
    key: 'villesImperiales',
    to: '/circuits/casablanca-rabat-meknes-fes-marrakech',
    image: 'https://res.cloudinary.com/dc3uvcobc/image/upload/v1775672669/monlaw-morocco-3794306_640_wsjcrz.jpg',
  },
];

const TopDestinations = () => {
  const { t } = useTranslation();

  return (
    <section id="destinations" className="bg-moroc-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.destinations.label')}</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight">
              {t('home.destinations.title')}
            </h2>
          </div>
          <p className="font-moroc text-moroc-black/55 max-w-md text-sm md:text-base leading-relaxed">
            {t('home.destinations.desc')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {destinations.map((d) => {
            const name = t(`home.destinations.cards.${d.key}.name`);
            const description = t(`home.destinations.cards.${d.key}.description`);
            const alt = t(`home.destinations.cards.${d.key}.alt`);

            return (
              <Link
                key={d.key}
                to={d.to}
                title={description}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm block focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold focus-visible:ring-offset-2"
              >
                <img src={d.image} alt={alt} className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-moroc-black/35 group-hover:bg-moroc-black/50 transition-colors duration-500 ease-premium" />
                <div className="absolute inset-0 flex items-end p-7 md:p-9">
                  <span className="font-serif text-2xl md:text-3xl text-moroc-white tracking-wide group-hover:text-moroc-gold transition-colors duration-500 ease-premium">
                    {name}
                  </span>
                </div>
              </Link>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default TopDestinations;
