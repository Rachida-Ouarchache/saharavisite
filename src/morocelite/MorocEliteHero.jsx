import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { heroMotion } from '../components/3d/heroMotion';

const HERO_POSTER = '/hero-sahara.jpg?v=4';
const HERO_VIDEO = '/hero-sahara.mp4?v=4';

const MorocEliteHero = () => {
  const { t } = useTranslation();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  const photoRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const canPlayVideo = window.matchMedia(
      '(min-width: 1024px) and (pointer: fine) and (hover: hover)'
    );
    const saveData = navigator.connection?.saveData;
    const applyPrefs = () => {
      setReduceMotion(motion.matches);
      setUseVideo(canPlayVideo.matches && !motion.matches && !saveData);
    };
    applyPrefs();
    motion.addEventListener?.('change', applyPrefs);
    canPlayVideo.addEventListener?.('change', applyPrefs);
    return () => {
      motion.removeEventListener?.('change', applyPrefs);
      canPlayVideo.removeEventListener?.('change', applyPrefs);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero || !useVideo) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.08 }
    );
    obs.observe(hero);
    const onVis = () => {
      if (document.hidden) video.pause();
      else video.play().catch(() => {});
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      obs.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [useVideo]);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let raf = 0;
    const apply = () => {
      const y = window.scrollY;
      const h = window.innerHeight || 1;
      const scroll = Math.min(1, Math.max(0, y / h));
      heroMotion.scroll = scroll;

      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (photoRef.current && !reduceMotion && !useVideo && isDesktop) {
        const x = heroMotion.mx * 3;
        const ty = heroMotion.my * 2 + scroll * 10;
        photoRef.current.style.transform = `translate3d(${x}px, ${ty}px, 0) scale(1.04)`;
      } else if (photoRef.current) {
        photoRef.current.style.transform = 'none';
      }
      if (contentRef.current) {
        if (!isDesktop || reduceMotion) {
          contentRef.current.style.opacity = '1';
          contentRef.current.style.transform = 'none';
        } else {
          const fade = 1 - Math.min(1, scroll * 1.35);
          contentRef.current.style.opacity = String(fade);
          contentRef.current.style.transform = `translate3d(0, ${scroll * -12}px, 0)`;
        }
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    const onMove = (e) => {
      if (reduceMotion) return;
      const rect = hero.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      heroMotion.mx = Math.max(-1, Math.min(1, nx));
      heroMotion.my = Math.max(-1, Math.min(1, ny));
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    hero.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      hero.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduceMotion, useVideo]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-[100svh] h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0B0A08]"
      aria-labelledby="hero-heading"
    >
      <Helmet>
        <link rel="preload" as="image" href={HERO_POSTER} type="image/jpeg" fetchpriority="high" />
      </Helmet>

      <div className="absolute inset-0 z-0" aria-hidden>
        <div ref={photoRef} className="absolute inset-0">
          <img
            src={HERO_POSTER}
            alt={t('home.hero.imageAlt')}
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {useVideo ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={HERO_POSTER}
              aria-hidden
              onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
            >
              <source src={HERO_VIDEO} type="video/mp4" />
            </video>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/55 sm:from-black/20 sm:to-black/40" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 text-center pt-16 pb-24 sm:pt-24 sm:pb-24 will-change-[opacity,transform]"
      >
        <h1
          id="hero-heading"
          className="font-serif text-[#F5F0E8] font-medium leading-[1.1] sm:leading-[0.98] mb-4 sm:mb-6 opacity-0 animate-fade-in-up text-shadow mx-auto"
          style={{ animationDelay: '0.15s', fontSize: 'clamp(1.85rem, 7vw, 6.4rem)' }}
        >
          {t('home.hero.title')}
        </h1>
        <p
          className="font-moroc text-[0.9375rem] sm:text-lg md:text-xl text-white/90 max-w-[20.5rem] sm:max-w-2xl mx-auto font-light mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-in-up drop-shadow"
          style={{ animationDelay: '0.28s' }}
        >
          {t('home.hero.subtitle')}
        </p>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-[16.5rem] sm:max-w-none mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="#journeys"
            className="inline-flex items-center justify-center min-h-11 sm:min-h-12 px-5 sm:px-10 py-3 text-[0.7rem] sm:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#0B0B0A] bg-[#C9A66B] border border-[#C9A66B] shadow-gold transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A66B]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0A]"
          >
            {t('home.hero.ctaPrimary')}
          </a>
          <Link
            to="/contact"
            className="glass-lux inline-flex items-center justify-center min-h-11 sm:min-h-12 px-5 sm:px-10 py-3 text-[0.7rem] sm:text-sm font-semibold tracking-[0.1em] sm:tracking-[0.14em] uppercase text-[#F5F0E8] transition-all duration-500 ease-premium hover:border-[#C9A66B] hover:text-[#C9A66B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A66B]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0A]"
          >
            {t('home.hero.ctaSecondary')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MorocEliteHero;
