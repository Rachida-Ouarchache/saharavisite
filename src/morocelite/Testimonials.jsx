import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaStar } from 'react-icons/fa';
import Reveal from '../components/Reveal';
import { reviewsAPI } from '../utils/api';

/**
 * Displays only real reviews from the API.
 * Never invents testimonials — shows a trust placeholder when none exist.
 */
const Testimonials = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    reviewsAPI
      .getTestimonials()
      .then((res) => {
        const list = res.data || res || [];
        if (!cancelled) setReviews(Array.isArray(list) ? list : []);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      })
      .finally(() => {
        if (!cancelled) setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!loaded) return null;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="bg-moroc-charcoal py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.testimonials.label')}
          </p>
          <h2
            id="reviews-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium tracking-tight"
          >
            {t('home.testimonials.title')}
          </h2>
        </Reveal>

        {reviews.length > 0 ? (
          <Reveal delayMs={70} className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.slice(0, 6).map((r) => (
              <blockquote
                key={r._id || `${r.name}-${r.createdAt}`}
                className="border border-white/[0.08] bg-moroc-black/30 p-8 md:p-9"
              >
                {typeof r.rating === 'number' && (
                  <div className="flex gap-1 text-moroc-gold mb-5" aria-label={`${r.rating} / 5`}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar
                        key={i}
                        className={`w-3.5 h-3.5 ${i <= r.rating ? 'opacity-100' : 'opacity-25'}`}
                        aria-hidden
                      />
                    ))}
                  </div>
                )}
                <p className="font-moroc text-white/85 text-sm leading-relaxed mb-7">
                  &ldquo;{r.comment || r.text || r.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic font-serif text-lg text-moroc-white">
                    {r.name || r.author}
                  </cite>
                  {(r.country || r.nationality || r.place) && (
                    <p className="font-moroc text-xs text-white/45 mt-1 uppercase tracking-wider">
                      {r.country || r.nationality || r.place}
                    </p>
                  )}
                  {r.createdAt && (
                    <time className="block text-[11px] text-white/35 mt-2" dateTime={r.createdAt}>
                      {new Date(r.createdAt).toLocaleDateString()}
                    </time>
                  )}
                </footer>
              </blockquote>
            ))}
          </Reveal>
        ) : (
          <Reveal delayMs={70} className="max-w-xl mx-auto text-center border border-white/10 px-8 py-12">
            <p className="font-moroc text-white/70 text-sm leading-relaxed mb-4">
              {t('home.testimonials.empty')}
            </p>
            <p className="font-moroc text-xs text-white/40 uppercase tracking-[0.2em]">
              {t('home.testimonials.comingSoon')}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
