import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import MorocEliteNavbar from '../morocelite/MorocEliteNavbar';
import MorocEliteFooter from '../morocelite/MorocEliteFooter';
import { useLocalizedExperience } from '../morocelite/useLocalizedExperiences';

function normalizeActivityImages(act, fallbackUrl) {
  if (Array.isArray(act.images) && act.images.length > 0) return act.images.filter(Boolean);
  if (typeof act.image === 'string' && act.image) return [act.image];
  return [fallbackUrl];
}

const ActivityCard = ({ act, fallbackImage }) => {
  const { t } = useTranslation();
  const images = normalizeActivityImages(act, fallbackImage);
  const [activeIdx, setActiveIdx] = useState(0);
  const safeIdx = Math.min(activeIdx, Math.max(0, images.length - 1));
  const mainSrc = images[safeIdx] || fallbackImage;

  return (
    <li className="bg-white border border-moroc-black/[0.08] shadow-sm overflow-hidden flex flex-col">
      <div className="bg-[#EDE8E0]">
        <div className="aspect-[16/10] relative">
          <img key={mainSrc} src={mainSrc} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-moroc-black/35 via-transparent to-transparent pointer-events-none" />
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 p-2.5 md:p-3 bg-[#FAF7F2] border-t border-moroc-black/[0.06] overflow-x-auto">
            {images.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                onClick={() => setActiveIdx(i)}
                aria-label={t('experienceActivities.photoLabel', { n: i + 1, total: images.length, title: act.title })}
                aria-current={i === safeIdx ? 'true' : undefined}
                className={`relative shrink-0 w-[4.5rem] h-14 sm:w-24 sm:h-16 rounded-sm overflow-hidden ring-2 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold focus-visible:ring-offset-2 ${i === safeIdx ? 'ring-moroc-gold shadow-sm' : 'ring-transparent opacity-80 hover:opacity-100'}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h2 className="font-serif text-xl md:text-2xl text-moroc-black mb-2">{act.title}</h2>
        <p className="text-moroc-black/70 leading-relaxed text-sm md:text-base flex-1">{act.description}</p>
      </div>
    </li>
  );
};

const ExperienceActivities = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const experience = useLocalizedExperience(slug);
  if (!experience) return <Navigate to="/" replace />;
  const activities = experience.activities ?? [];

  return (
    <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
      <Helmet>
        <title>Activities — {experience.title} | Sahara Visite</title>
        <meta name="description" content={`Curated activities for ${experience.title}. ${experience.description}`} />
      </Helmet>
      <MorocEliteNavbar />
      <main className="bg-moroc-white">
        <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <img src={experience.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/35 via-moroc-black/50 to-moroc-black/80" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-12">
            <div className="text-white max-w-3xl">
              <p className="text-moroc-gold text-xs uppercase tracking-[0.24em] mb-3">{t('experienceActivities.activities')}</p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3">{experience.title}</h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">{t('experienceActivities.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/experiences/${experience.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-moroc-black/70 hover:text-moroc-gold transition-colors mb-10">
              <FiArrowLeft size={16} />{t('experienceActivities.backToTrip')}
            </Link>
            {activities.length === 0 ? (
              <p className="text-moroc-black/65">{t('experienceActivities.noActivities')}</p>
            ) : (
              <ul className="grid gap-6 md:grid-cols-2">
                {activities.map((act) => <ActivityCard key={act.title} act={act} fallbackImage={experience.image} />)}
              </ul>
            )}
            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-6 md:p-8 bg-[#FAF7F2] border border-moroc-black/[0.08] shadow-sm">
              <div>
                <p className="font-serif text-xl md:text-2xl text-moroc-black mb-1">{t('experienceActivities.cta.title')}</p>
                <p className="text-sm md:text-base text-moroc-black/65 max-w-xl">{t('experienceActivities.cta.desc')}</p>
              </div>
              <Link to={`/experiences/${experience.slug}#reservation`} className="inline-flex shrink-0 items-center justify-center gap-2 min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover">
                {t('experienceActivities.cta.btn')}<FiChevronRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <MorocEliteFooter />
    </div>
  );
};

export default ExperienceActivities;
