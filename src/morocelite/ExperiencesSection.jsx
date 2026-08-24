import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import SeoImage from '../components/SeoImage';
import { HOME_EXPERIENCES } from './homeContent';

const ExperiencesSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="bg-moroc-ivory py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.experienceBlocks.label')}
          </p>
          <h2
            id="experiences-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
          >
            {t('home.experienceBlocks.title')}
          </h2>
          <p className="mt-5 font-moroc text-moroc-black/55 text-sm md:text-base leading-relaxed">
            {t('home.experienceBlocks.subtitle')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {HOME_EXPERIENCES.map((item) => (
            <article
              key={item.key}
              className="group overflow-hidden border border-moroc-black/[0.06] bg-white flex flex-col h-full"
            >
              <Link
                to={item.to}
                className="relative aspect-[16/10] overflow-hidden block bg-moroc-sand"
                aria-label={t(`home.experienceBlocks.items.${item.key}.title`)}
              >
                <SeoImage
                  src={item.image}
                  alt=""
                  width={900}
                  height={560}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </Link>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <h3 className="font-serif text-xl text-moroc-black mb-2 group-hover:text-moroc-gold transition-colors duration-500">
                  <Link to={item.to}>{t(`home.experienceBlocks.items.${item.key}.title`)}</Link>
                </h3>
                <p className="font-moroc text-sm text-moroc-black/55 leading-relaxed mb-5 flex-1">
                  {t(`home.experienceBlocks.items.${item.key}.desc`)}
                </p>
                <Link
                  to={item.to}
                  className="text-xs font-semibold tracking-widest uppercase text-moroc-gold border-b border-moroc-gold pb-0.5 self-start hover:text-moroc-black hover:border-moroc-black transition-colors duration-500"
                >
                  {t('home.experienceBlocks.cta')}
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default ExperiencesSection;
