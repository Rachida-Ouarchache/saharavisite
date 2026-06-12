import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const { t } = useTranslation();
  const reviews = t('home.testimonials.reviews', { returnObjects: true });

  return (
    <section className="bg-moroc-charcoal py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.testimonials.label')}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium tracking-tight">
            {t('home.testimonials.title')}
          </h2>
        </Reveal>

        <Reveal delayMs={70} className="grid md:grid-cols-3 gap-8 md:gap-10">
          {Array.isArray(reviews) && reviews.map((r) => (
            <blockquote key={r.name} className="bg-moroc-black/40 border border-white/[0.08] p-9 md:p-10 rounded-sm hover:border-moroc-gold/35 hover:-translate-y-1 hover:shadow-lg hover:shadow-moroc-black/30 transition-all duration-500 ease-premium">
              <div className="flex gap-1 text-moroc-gold mb-6" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => <FaStar key={i} className="w-4 h-4" />)}
              </div>
              <p className="font-moroc text-white/85 text-sm md:text-base leading-relaxed mb-8">"{r.quote}"</p>
              <footer>
                <cite className="not-italic font-serif text-lg text-moroc-white">{r.name}</cite>
                <p className="font-moroc text-xs text-white/45 mt-1 uppercase tracking-wider">{r.place}</p>
              </footer>
            </blockquote>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
