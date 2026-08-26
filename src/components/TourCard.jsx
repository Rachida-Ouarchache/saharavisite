import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiClock, FiMapPin } from 'react-icons/fi';
import SeoImage from './SeoImage';
import Tilt3D from './Tilt3D';
import { useCurrency } from '../context/CurrencyContext';
import { SHOW_CIRCUIT_PRICES } from '../circuits/pricing';

/**
 * Unified circuit card — homepage Featured Journeys + /tours grids.
 */
const TourCard = ({ tour, featuredLabel = false }) => {
  const { t } = useTranslation();
  const { format } = useCurrency();
  const {
    title,
    slug,
    href,
    shortDescription,
    duration,
    durationLabel,
    coverImage,
    fromLocation,
    toLocation,
    region,
    destinations,
    fromPrice,
    price,
  } = tour;

  const detailPath = href || `/circuits/${slug}`;
  const durationText =
    durationLabel ||
    (duration != null && typeof duration === 'number' ? `${duration} ${t('tourCard.days')}` : duration) ||
    '';
  const from = fromLocation || destinations?.[0]?.name || '';
  const to =
    toLocation || (destinations?.length > 1 ? destinations[destinations.length - 1]?.name : from) || '';
  const routeLabel = from && to ? `${from} → ${to}` : region || from || to;
  const displayPrice = SHOW_CIRCUIT_PRICES ? (fromPrice ?? price) : null;

  return (
    <Tilt3D className="h-full">
    <article className="group bg-white border border-moroc-black/[0.06] overflow-hidden flex flex-col h-full shadow-card hover:shadow-card-hover transition-shadow duration-500">
      <Link
        to={detailPath}
        className="block relative aspect-[4/5] overflow-hidden bg-moroc-sand"
        aria-label={title}
      >
        <SeoImage
          src={coverImage || 'https://res.cloudinary.com/dc3uvcobc/image/upload/f_auto,q_auto,w_800/v1775053542/pixelraw-desert-4944794_1920_csvuni.jpg'}
          alt=""
          width={800}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-moroc-black/0 group-hover:bg-moroc-black/15 transition-colors duration-500" />
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

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-serif text-xl text-moroc-black mb-2 group-hover:text-moroc-gold transition-colors duration-500 leading-snug">
          <Link to={detailPath}>{title}</Link>
        </h3>

        {routeLabel && (
          <p className="font-moroc text-xs text-moroc-muted mb-3 flex items-center gap-1.5">
            <FiMapPin className="text-moroc-gold shrink-0" size={12} aria-hidden />
            {routeLabel}
          </p>
        )}

        {shortDescription && (
          <p className="font-moroc text-sm text-moroc-black/55 leading-relaxed mb-5 line-clamp-3">
            {shortDescription}
          </p>
        )}

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between gap-3 text-xs font-moroc text-moroc-black/65">
            {durationText && (
              <span className="inline-flex items-center gap-1.5">
                <FiClock className="text-moroc-gold shrink-0" size={13} aria-hidden />
                {durationText} · {t('tourCard.privateJourney')}
              </span>
            )}
            {displayPrice != null && (
              <span className="font-semibold text-moroc-black whitespace-nowrap">
                {t('tourCard.from', { defaultValue: 'from' })} {format(displayPrice)}
              </span>
            )}
          </div>

          <Link
            to={detailPath}
            className="text-xs font-semibold tracking-widest uppercase text-moroc-gold border-b border-moroc-gold pb-0.5 self-start hover:text-moroc-black hover:border-moroc-black transition-colors duration-500 ease-premium inline-block"
          >
            {t('tourCard.discover')}
          </Link>
        </div>
      </div>
    </article>
    </Tilt3D>
  );
};

export default TourCard;
