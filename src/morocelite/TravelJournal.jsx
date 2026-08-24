import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import Reveal from '../components/Reveal';
import SeoImage from '../components/SeoImage';
import { blogAPI } from '../utils/api';

const TravelJournal = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancelled = false;
    blogAPI
      .getAll({ limit: 3 })
      .then((res) => {
        const list = res?.data ?? res;
        if (!cancelled) setPosts(Array.isArray(list) ? list : []);
      })
      .catch(() => {
        if (!cancelled) setPosts([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!Array.isArray(posts) || !posts.length) return null;

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="bg-moroc-sand/30 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
              {t('home.journal.label')}
            </p>
            <h2
              id="journal-heading"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-black font-medium tracking-tight"
            >
              {t('home.journal.title')}
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-semibold tracking-widest uppercase text-moroc-gold border-b border-moroc-gold pb-0.5 self-start hover:text-moroc-black hover:border-moroc-black transition-colors"
          >
            {t('home.journal.viewAll')}
          </Link>
        </Reveal>

        <Reveal delayMs={80} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.slice(0, 3).map((post) => (
            <article key={post.slug || post._id} className="group flex flex-col">
              <Link to={`/blog/${post.slug}`} className="relative aspect-[16/10] overflow-hidden mb-5 block">
                <SeoImage
                  src={post.coverImage}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              {post.category && (
                <span className="text-[10px] uppercase tracking-[0.2em] text-moroc-gold mb-2 font-semibold">
                  {post.category}
                </span>
              )}
              <h3 className="font-serif text-xl text-moroc-black mb-2 group-hover:text-moroc-gold transition-colors">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.excerpt && (
                <p className="font-moroc text-sm text-moroc-black/55 leading-relaxed mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                {post.createdAt && (
                  <time className="text-xs text-moroc-muted" dateTime={post.createdAt}>
                    {format(new Date(post.createdAt), 'MMM d, yyyy')}
                  </time>
                )}
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-semibold tracking-widest uppercase text-moroc-gold hover:text-moroc-black transition-colors"
                >
                  {t('home.journal.readMore')}
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default TravelJournal;
