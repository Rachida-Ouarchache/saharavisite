import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiClock, FiUsers, FiStar, FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';

const difficultyColor = {
  Easy: 'bg-green-100 text-green-700',
  Moderate: 'bg-amber-100 text-amber-700',
  Challenging: 'bg-red-100 text-red-700',
};

const TourCard = ({ tour }) => {
  const { t } = useTranslation();
  const {
    title, slug, shortDescription, price, discountPrice,
    duration, groupSize, rating, ratingsCount, region,
    coverImage, difficulty, category, featured, startDates, destinations,
  } = tour;

  const availabilityLabel = startDates?.length ? t('tourCard.scheduledDepartures') : t('tourCard.allYear');
  const fromLocation = destinations?.[0]?.name || region;
  const toLocation = destinations?.length > 1 ? destinations[destinations.length - 1]?.name : region;

  return (
    <article className="card group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={coverImage || 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=600'}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {featured && <span className="badge bg-gold-500 text-white">{t('tourCard.featured')}</span>}
          <span className={`badge ${difficultyColor[difficulty]}`}>{difficulty}</span>
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 text-right shadow-md">
          {discountPrice ? (
            <>
              <div className="text-xs text-gray-400 line-through">${price}</div>
              <div className="text-primary-700 font-bold text-lg leading-tight">${discountPrice}</div>
            </>
          ) : (
            <div className="text-primary-700 font-bold text-lg leading-tight">
              {t('tourCard.fromPrice', { price })}
            </div>
          )}
          <div className="text-gray-400 text-[10px]">{t('tourCard.perPerson')}</div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">{category}</span>
          <span className="flex items-center gap-1 text-xs text-gray-500"><FiMapPin size={11} />{region}</span>
        </div>
        <h3 className="font-serif text-lg text-primary-700 font-semibold mb-2 group-hover:text-gold-500 transition-colors leading-snug">
          <Link to={`/tours/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{shortDescription}</p>

        <div className="space-y-2.5 text-sm text-gray-600 border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center gap-2"><FiClock className="text-gold-500" size={14} /><span>{duration} {t('tourCard.days')}</span></div>
          <div className="flex items-center gap-2"><FiCalendar className="text-gold-500" size={14} /><span>{t('tourCard.availability')} {availabilityLabel}</span></div>
          <div className="flex items-center gap-2"><FiMapPin className="text-gold-500" size={14} /><span>{fromLocation}</span></div>
          <div className="flex items-center gap-2"><FiMapPin className="text-gold-500" size={14} /><span>{toLocation}</span></div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3 mb-4">
          <span className="flex items-center gap-1"><FiUsers className="text-gold-400" size={14} />{t('tourCard.maxPax', { count: groupSize })}</span>
          <span className="flex items-center gap-1">
            <FiStar className="text-gold-400 fill-current" size={14} />
            {rating.toFixed(1)}
            <span className="text-gray-400">({ratingsCount})</span>
          </span>
        </div>

        <Link to={`/tours/${slug}`} className="btn-primary w-full justify-center text-sm">
          {t('tourCard.viewTour')} <FiArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default TourCard;
