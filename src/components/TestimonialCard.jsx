import React from 'react';
import { FiStar } from 'react-icons/fi';
import { format } from 'date-fns';

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FiStar
        key={star}
        size={16}
        className={star <= rating ? 'text-gold-500 fill-current' : 'text-gray-200'}
      />
    ))}
  </div>
);

const TestimonialCard = ({ review }) => {
  const { name, nationality, rating, title, comment, travelDate, tour } = review;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
      {/* Rating */}
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={rating} />
        {travelDate && (
          <span className="text-xs text-gray-400">
            {format(new Date(travelDate), 'MMM yyyy')}
          </span>
        )}
      </div>

      {/* Quote */}
      <div className="flex-1">
        {title && (
          <h4 className="font-semibold text-primary-700 mb-2 text-sm">{title}</h4>
        )}
        <p className="text-gray-600 text-sm leading-relaxed italic relative">
          <span className="absolute -top-1 -left-1 text-gold-300 text-3xl font-serif leading-none">"</span>
          <span className="pl-3">{comment}</span>
          <span className="text-gold-300 text-3xl font-serif leading-none ml-1">"</span>
        </p>
      </div>

      {/* Author */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-primary-700 text-sm">{name}</p>
          <p className="text-gray-400 text-xs">
            {nationality}
            {tour && <span className="ml-1 text-gold-500">· {tour.title}</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
