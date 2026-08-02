import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiClock, FiCalendar, FiMapPin } from 'react-icons/fi';

/**
 * Unified circuit card — same visual language as the homepage FeaturedExperiences.
 * Used on /tours, category hubs, home, and related-circuit grids.
 */
const TourCard = ({ tour, featuredLabel = false }) => {
  const { t } = useTranslation();
  const {
    title,
    slug,
    href,
    shortDescription,
    duration,
    durationLabel,
    coverImage,
    availability,
    fromLocation,
    toLocation,
    region,
    destinations,
    startDates,
  } = tour;

  const detailPath = href || `/circuits/${slug}`;
  const durationText =
    durationLabel || (duration != null && typeof duration === 'number' ? `${duration} ${t('tourCard.days')}` : duration) || '';
  const availabilityLabel =
    availability ||
    (startDates?.length ? t('tourCard.scheduledDepartures') : t('tourCard.allYear'));
  const from = fromLocation || destinations?.[0]?.name || '';
  const to =
    toLocation ||
    (destinations?.length > 1 ? destinations[destinations.length - 1]?.name : from) ||
    '';
  const routeLabel = from && to ? `${from} → ${to}` : region || from || to;

  return (
    <article className="group bg-moroc-white border border-moroc-black/[0.06] rounded-sm overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 ease-premium hover:-translate-y-2 flex flex-col h-full">
      <Link to={detailPath} className="block relative aspect-[4/5] overflow-hidden bg-[#EDE8E0]">
        <img
          src={coverImage || 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=800'}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-moroc-black/0 group-hover:bg-moroc-black/20 transition-colors duration-500" />
        {featuredLabel && (
          <span className="absolute top-3 left-3 bg-moroc-gold text-moroc-black text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
            {t('home.experiences.mainCircuit')}
          </span>
        )}
        {durationText && (
          <span className="absolute top-3 right-3 bg-moroc-black/70 text-white text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 backdrop-blur-sm">
            {durationText}
          </span>
        )}
      </Link>

      <div className="p-7 md:p-8 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-moroc-black mb-3 group-hover:text-moroc-gold transition-colors duration-500 ease-premium leading-snug">
          <Link to={detailPath}>{title}</Link>
        </h3>
        {shortDescription && (
          <p className="font-moroc text-sm text-moroc-black/55 leading-relaxed mb-6 line-clamp-3">
            {shortDescription}
          </p>
        )}

        <div className="space-y-2 mb-6 mt-auto">
          {durationText && (
            <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
              <FiClock className="text-moroc-gold shrink-0" size={13} />
              <span>{durationText}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
            <FiCalendar className="text-moroc-gold shrink-0" size={13} />
            <span>{availabilityLabel}</span>
          </div>
          {routeLabel && (
            <div className="flex items-center gap-2 text-xs font-moroc text-moroc-black/65">
              <FiMapPin className="text-moroc-gold shrink-0" size={13} />
              <span>{routeLabel}</span>
            </div>
          )}
        </div>

        <Link
          to={detailPath}
          className="text-xs font-semibold tracking-widest uppercase text-moroc-gold border-b border-moroc-gold pb-0.5 self-start hover:text-moroc-black hover:border-moroc-black transition-colors duration-500 ease-premium"
        >
          {t('home.experiences.viewCircuit')}
        </Link>
      </div>
    </article>
  );
};

export default TourCard;
