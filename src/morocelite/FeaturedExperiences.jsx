import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import Reveal from '../components/Reveal';
import { useLocalizedExperiences } from './useLocalizedExperiences';

const FeaturedExperiences = () => {
  const { t } = useTranslation();
  const experiences = useLocalizedExperiences();

  return (
    <section id="experiences" className="bg-moroc-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.experiences.label')}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight">
            {t('home.experiences.title')}
          </h2>
          <p className="mt-6 font-moroc text-moroc-black/55 text-sm md:text-base leading-relaxed">
            {t('home.experiences.subtitle')}
          </p>
        </Reveal>

        <Reveal delayMs={80} className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {experiences.map((item, index) => (
            <article key={item.slug} className="group bg-moroc-white border border-moroc-black/[0.06] rounded-sm overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 ease-premium hover:-translate-y-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EDE8E0]">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-moroc-black/0 group-hover:bg-moroc-black/20 transition-colors duration-500" />
                {index === 0 && (
                  <span className="absolute top-3 left-3 bg-moroc-gold text-moroc-black text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                    {t('home.experiences.mainCircuit')}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-moroc-black/70 text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 backdrop-blur-sm">
                  {item.duration}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-serif text-xl text-moroc-black mb-3 group-hover:text-moroc-gold transition-colors duration-500 ease-premium leading-snug">
                  {item.title}
                </h3>
                <p className="font-moroc text-sm text-moroc-black/55 leading-relaxed mb-6 line-clamp-3">{item.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
                    <FiClock className="text-moroc-gold shrink-0" size={13} /><span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
                    <FiCalendar className="text-moroc-gold shrink-0" size={13} /><span>{item.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
                    <FiMapPin className="text-moroc-gold shrink-0" size={13} /><span>{item.from} → {item.to}</span>
                  </div>
                </div>
                <Link to={`/experiences/${item.slug}`} className="text-xs font-semibold tracking-widest uppercase text-moroc-gold border-b border-moroc-gold pb-0.5 hover:text-moroc-black hover:border-moroc-black transition-colors duration-500 ease-premium">
                  {t('home.experiences.viewCircuit')}
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
