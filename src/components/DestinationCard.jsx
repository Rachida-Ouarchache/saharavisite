import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

const DestinationCard = ({ destination }) => {
  const { name, slug, region, shortDescription, coverImage } = destination;

  return (
    <article className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer aspect-[3/4]">
      <img
        src={coverImage || `https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=600`}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold mb-1">
          <FiMapPin size={12} />
          {region}
        </div>
        <h3 className="font-serif text-2xl text-white font-bold mb-2 text-shadow">{name}</h3>
        <p className="text-white/75 text-sm leading-relaxed mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {shortDescription}
        </p>
        <Link
          to={`/destinations/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gold-500 hover:bg-gold-600 px-4 py-2 rounded-lg transition-colors"
        >
          Explore <FiArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
};

export default DestinationCard;
