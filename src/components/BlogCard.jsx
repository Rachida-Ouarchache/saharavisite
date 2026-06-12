import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiEye, FiArrowRight, FiCalendar } from 'react-icons/fi';
import { format } from 'date-fns';

const categoryColor = {
  'Travel Tips': 'bg-blue-100 text-blue-700',
  'Destinations': 'bg-green-100 text-green-700',
  'Culture': 'bg-purple-100 text-purple-700',
  'Food': 'bg-orange-100 text-orange-700',
  'Adventure': 'bg-red-100 text-red-700',
  'Photography': 'bg-pink-100 text-pink-700',
};

const BlogCard = ({ post }) => {
  const { title, slug, excerpt, category, coverImage, author, readTime, views, createdAt, featured } = post;

  return (
    <article className="card group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={coverImage || `https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=600`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="badge bg-gold-500 text-white">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category */}
        <div className="mb-3">
          <span className={`badge ${categoryColor[category] || 'bg-gray-100 text-gray-700'}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg text-primary-700 font-semibold mb-2 group-hover:text-gold-500 transition-colors leading-snug flex-1">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <FiCalendar size={12} />
              {createdAt ? format(new Date(createdAt), 'MMM d, yyyy') : '—'}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={12} />
              {readTime} min read
            </span>
          </div>
          <span className="flex items-center gap-1">
            <FiEye size={12} />
            {(views || 0).toLocaleString()}
          </span>
        </div>

        {/* Author + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-bold">
              {author?.name?.charAt(0) || 'T'}
            </div>
            <span className="text-xs text-gray-600 font-medium">{author?.name || 'Sahara Visite'}</span>
          </div>
          <Link
            to={`/blog/${slug}`}
            className="text-gold-500 hover:text-gold-600 text-sm font-semibold flex items-center gap-1 transition-colors"
          >
            Read <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
