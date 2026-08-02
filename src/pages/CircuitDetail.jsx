import React, { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FiCalendar,
  FiCheck,
  FiClock,
  FiGlobe,
  FiHelpCircle,
  FiMapPin,
  FiTrendingUp,
  FiUser,
  FiUsers,
  FiX,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SeoImage from '../components/SeoImage';
import TestimonialCard from '../components/TestimonialCard';
import TourCard from '../components/TourCard';
import CurrencySwitcher from '../components/CurrencySwitcher';
import { useCurrency } from '../context/CurrencyContext';
import { useLocalizedCircuit, useSimilarCircuits, useNearbyExcursions } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';
import { generateReviews } from '../circuits/reviewsPool';
import { buildCircuitSchemas } from '../utils/circuitJsonLd';
import { bookingsAPI } from '../utils/api';
import { getCountries } from '../utils/countries';

const BADGE_COLORS = {
  Bestseller: 'bg-moroc-gold text-moroc-black',
  Nouveau: 'bg-blue-500 text-white',
  Populaire: 'bg-rose-500 text-white',
};

const CircuitDetail = () => {
  const { t, i18n } = useTranslation();
  const { format } = useCurrency();
  const { slug } = useParams();
  const circuit = useLocalizedCircuit(slug);
  const countries = useMemo(() => getCountries(i18n.language), [i18n.language]);
  const similar = useSimilarCircuits(circuit, 4);
  const nearbyExcursions = useNearbyExcursions(circuit, 3);
  const reviews = useMemo(() => (circuit ? generateReviews(circuit, 3) : []), [circuit]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [readProgress, setReadProgress] = useState(0);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    startDate: '',
    adults: 2,
    children: 0,
    specialRequests: '',
  });

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0;
      setReadProgress(pct);
      setShowStickyCta(scrollTop > 480);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  const breadcrumbs = useMemo(() => {
    if (!circuit) return [];
    return [
      { name: t('circuitsPage.home'), url: '/' },
      { name: t('circuitsPage.breadcrumb'), url: '/circuits' },
      { name: circuit.categoryLabel, url: `/circuits?cat=${circuit.category}` },
      { name: circuit.title, url: `/circuits/${circuit.slug}` },
    ];
  }, [circuit, t]);

  const jsonLd = useMemo(() => {
    if (!circuit) return [];
    return buildCircuitSchemas(circuit, breadcrumbs);
  }, [circuit, breadcrumbs]);

  const longParagraphs = useMemo(() => {
    if (!circuit?.longDescription) return [];
    if (Array.isArray(circuit.longDescription)) return circuit.longDescription;
    return String(circuit.longDescription)
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
  }, [circuit]);

  if (!circuit) return <Navigate to="/circuits" replace />;

  const estimatedTotal =
    Number(form.adults) * circuit.fromPrice + Number(form.children) * Math.round(circuit.fromPrice * 0.5);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = {
        ...form,
        tourName: circuit.title,
        adults: Number(form.adults),
        children: Number(form.children),
      };
      const res = await bookingsAPI.create(payload);
      setSuccess(res);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nationality: '',
        startDate: '',
        adults: 2,
        children: 0,
        specialRequests: '',
      });
    } catch (err) {
      setError(err?.message || t('circuitsPage.errorSubmit'));
    } finally {
      setLoading(false);
    }
  };

  const gallery = circuit.gallery || [circuit.image];

  return (
    <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
      <SEO
        title={circuit.metaTitle || circuit.title}
        description={circuit.metaDescription || circuit.shortDescription}
        keywords={circuit.keywords}
        image={circuit.image}
        url={`/circuits/${circuit.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[60]" aria-hidden="true">
        <div
          className="h-full bg-moroc-gold transition-[width] duration-150 ease-linear"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <Navbar />

      <main className="bg-moroc-white">
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SeoImage
            src={circuit.image}
            alt={circuit.imageAlt || circuit.h1}
            title={circuit.imageTitle || circuit.h1}
            width={circuit.imageWidth || 1400}
            height={circuit.imageHeight || 900}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/30 via-moroc-black/45 to-moroc-black/75" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
            <div className="text-white max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <p className="text-moroc-gold text-xs uppercase tracking-[0.24em]">
                  {circuit.categoryLabel} · Sahara Visite
                </p>
                {circuit.badge && (
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ${BADGE_COLORS[circuit.badge] || 'bg-moroc-gold text-moroc-black'}`}>
                    {circuit.badge}
                  </span>
                )}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                {circuit.h1}
              </h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">{circuit.shortDescription}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-moroc-black/55">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((item, i) => (
                  <li key={item.url} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden="true">/</span>}
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-moroc-black" aria-current="page">
                        {item.name}
                      </span>
                    ) : (
                      <Link to={item.url} className="hover:text-moroc-gold transition-colors">
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* AI-search quick answer block: short paragraph + scannable facts */}
            {circuit.aiAnswer && (
              <div className="mb-10 bg-[#FAF7F2] border-l-4 border-moroc-gold p-6 md:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-moroc-gold mb-2 font-semibold">
                  {t('circuitsPage.quickAnswer')}
                </p>
                <p className="text-moroc-black/80 leading-relaxed mb-4">{circuit.aiAnswer.quickAnswer}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-moroc-black/70">
                  {circuit.aiAnswer.facts.map((fact) => (
                    <li key={fact} className="flex items-start gap-2">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-moroc-gold flex-shrink-0" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
              <article className="bg-white border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm">
                <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                  {t('circuitsPage.sections.intro')}
                </h2>
                <p className="text-moroc-black/70 leading-relaxed mb-10">{circuit.intro}</p>

                {gallery.length > 1 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.gallery')}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                      {gallery.slice(0, 6).map((src, i) => (
                        <button
                          key={src + i}
                          type="button"
                          onClick={() => setLightbox(src)}
                          className="relative aspect-[4/3] overflow-hidden group focus:outline-none focus:ring-2 focus:ring-moroc-gold"
                        >
                          <SeoImage
                            src={src}
                            alt={`${circuit.h1} — photo ${i + 1}`}
                            width={700}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                  {t('circuitsPage.overview')}
                </h2>
                <div className="space-y-4 text-moroc-black/70 leading-relaxed mb-10">
                  {longParagraphs.slice(0, 3).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                  {t('circuitsPage.highlights')}
                </h2>
                <ul className="space-y-3 mb-10">
                  {(circuit.highlights || []).map((point) => (
                    <li key={point} className="flex items-start gap-3 text-moroc-black/75">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-moroc-gold flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {(circuit.whyChoose || []).length > 0 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.whyChoose')}
                    </h2>
                    <ul className="space-y-3 mb-10">
                      {circuit.whyChoose.map((reason) => (
                        <li key={reason} className="flex items-start gap-3 text-moroc-black/75">
                          <FiCheck className="text-moroc-gold mt-1 flex-shrink-0" size={15} />
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-5">
                    <h3 className="font-serif text-lg text-moroc-black mb-3">{t('circuitsPage.included')}</h3>
                    <ul className="space-y-2 text-sm text-moroc-black/75">
                      {(circuit.included || []).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <FiCheck className="text-moroc-gold" size={14} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-5">
                    <h3 className="font-serif text-lg text-moroc-black mb-3">{t('circuitsPage.notIncluded')}</h3>
                    <ul className="space-y-2 text-sm text-moroc-black/75">
                      {(circuit.excluded || []).map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-moroc-gold mt-0.5">-</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                  {t('circuitsPage.itinerary')}
                </h2>
                <div className="relative space-y-4 mb-10 pl-6 border-l-2 border-moroc-gold/30">
                  {(circuit.itinerary || []).map((step) => (
                    <div key={step.day} className="relative border border-moroc-black/[0.08] p-4">
                      <span className="absolute -left-[31px] top-4 w-3 h-3 rounded-full bg-moroc-gold border-2 border-white shadow" />
                      <p className="text-xs uppercase tracking-[0.18em] text-moroc-gold mb-1">
                        {t('circuitsPage.day', { day: step.day })}
                      </p>
                      <h3 className="font-serif text-lg text-moroc-black mb-1">{step.title}</h3>
                      <p className="text-sm text-moroc-black/70">{step.text}</p>
                    </div>
                  ))}
                </div>

                {circuit.mapEmbedUrl && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.map')}
                    </h2>
                    <div className="mb-10 border border-moroc-black/[0.08]">
                      <iframe
                        title={`Carte — ${circuit.h1}`}
                        src={circuit.mapEmbedUrl}
                        className="w-full h-72 md:h-96 border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </>
                )}

                {circuit.placesVisited?.sites?.length > 0 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.placesVisited')}
                    </h2>
                    <p className="text-moroc-black/70 leading-relaxed mb-4">{circuit.placesVisited.summary}</p>
                    <ul className="flex flex-wrap gap-2 mb-10">
                      {circuit.placesVisited.sites.map((site) => (
                        <li
                          key={site}
                          className="text-xs font-semibold tracking-wide uppercase px-3 py-1.5 border border-moroc-black/15 text-moroc-black/70"
                        >
                          {site}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {longParagraphs.length > 3 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.guide')}
                    </h2>
                    <div className="space-y-4 text-moroc-black/70 leading-relaxed mb-10">
                      {longParagraphs.slice(3).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </>
                )}

                {(circuit.practical || []).length > 0 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.practical')}
                    </h2>
                    <ul className="space-y-2 mb-10 text-moroc-black/75">
                      {circuit.practical.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-moroc-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {circuit.whenToGo && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.whenToGo')}
                    </h2>
                    <p className="text-moroc-black/70 leading-relaxed mb-10">{circuit.whenToGo}</p>
                  </>
                )}

                {(circuit.tips || []).length > 0 && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.tips')}
                    </h2>
                    <ul className="space-y-2 mb-10 text-moroc-black/75">
                      {circuit.tips.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-moroc-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {circuit.conclusion && (
                  <>
                    <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">
                      {t('circuitsPage.sections.conclusion')}
                    </h2>
                    <p className="text-moroc-black/70 leading-relaxed">{circuit.conclusion}</p>
                  </>
                )}
              </article>

              <aside className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm h-fit lg:sticky lg:top-24">
                <h2 className="font-serif text-2xl text-moroc-black mb-6">{t('circuitsPage.tripDetails')}</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-moroc-black/80">
                    <FiClock className="text-moroc-gold" size={17} />
                    <span>{circuit.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-moroc-black/80">
                    <FiCalendar className="text-moroc-gold" size={17} />
                    <span>
                      {t('circuitsPage.availability')} {circuit.availability}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-moroc-black/80">
                    <FiMapPin className="text-moroc-gold" size={17} />
                    <span>
                      {t('circuitsPage.from')} {circuit.from}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-moroc-black/80">
                    <FiMapPin className="text-moroc-gold" size={17} />
                    <span>
                      {t('circuitsPage.to')} {circuit.to}
                    </span>
                  </div>
                  {circuit.type && (
                    <div className="flex items-center gap-3 text-moroc-black/80">
                      <FiUsers className="text-moroc-gold" size={17} />
                      <span>{circuit.type}</span>
                    </div>
                  )}
                  {circuit.difficulty && (
                    <div className="flex items-center gap-3 text-moroc-black/80">
                      <FiTrendingUp className="text-moroc-gold" size={17} />
                      <span>{circuit.difficulty}</span>
                    </div>
                  )}
                  {(circuit.languages || []).length > 0 && (
                    <div className="flex items-center gap-3 text-moroc-black/80">
                      <FiGlobe className="text-moroc-gold" size={17} />
                      <span>{circuit.languages.join(', ')}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 border-t border-moroc-black/[0.08] pt-6">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <p className="text-xs uppercase tracking-[0.18em] text-moroc-black/50">
                      {t('circuitsPage.fromPrice')}
                    </p>
                    <CurrencySwitcher />
                  </div>
                  <p className="font-serif text-3xl text-moroc-black">{format(circuit.fromPrice)}</p>
                  <p className="text-sm text-moroc-black/60">{t('circuitsPage.perAdult')}</p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3">
                  <a
                    href="#reservation"
                    className="inline-flex w-full items-center justify-center min-h-11 px-5 py-2.5 text-sm font-semibold tracking-[0.1em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold transition-all duration-300 hover:bg-moroc-gold-hover hover:-translate-y-0.5"
                  >
                    {t('circuitsPage.bookCta')}
                  </a>
                  <Link
                    to={`/contact?circuit=${circuit.slug}`}
                    className="inline-flex w-full items-center justify-center min-h-11 px-5 py-2.5 text-sm font-semibold tracking-[0.1em] uppercase text-moroc-black bg-transparent border border-moroc-black/20 transition-all duration-300 hover:border-moroc-gold hover:text-moroc-gold"
                  >
                    {t('circuitsPage.quoteCta')}
                  </Link>
                </div>

                {(circuit.destinations || []).length > 0 && (
                  <div className="mt-8 border-t border-moroc-black/[0.08] pt-6">
                    <h3 className="font-serif text-lg text-moroc-black mb-3">{t('circuitsPage.destinations')}</h3>
                    <ul className="space-y-2 text-sm">
                      {circuit.destinations.map((d) => (
                        <li key={d.path || d.name}>
                          {d.path ? (
                            <Link to={d.path} className="text-moroc-black/70 hover:text-moroc-gold transition-colors">
                              {d.name}
                            </Link>
                          ) : (
                            <span className="text-moroc-black/70">{d.name}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(circuit.blogLinks || []).length > 0 && (
                  <div className="mt-8 border-t border-moroc-black/[0.08] pt-6">
                    <h3 className="font-serif text-lg text-moroc-black mb-3">{t('circuitsPage.blog')}</h3>
                    <ul className="space-y-2 text-sm">
                      {circuit.blogLinks.map((b) => (
                        <li key={b.path}>
                          <Link to={b.path} className="text-moroc-black/70 hover:text-moroc-gold transition-colors">
                            {b.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>

            {(circuit.faq || []).length > 0 && (
              <section className="mt-12 md:mt-16 bg-white border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-serif text-2xl md:text-3xl text-moroc-black mb-2 flex items-center gap-3">
                  <FiHelpCircle className="text-moroc-gold" size={28} aria-hidden />
                  {t('circuitsPage.faq')}
                </h2>
                <p className="text-moroc-black/60 mb-7">{t('circuitsPage.faqIntro')}</p>
                <div className="space-y-3">
                  {circuit.faq.map((item, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={item.question} className="border border-moroc-black/[0.08]">
                        <button
                          type="button"
                          className="w-full text-left px-4 py-4 flex items-start justify-between gap-4"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        >
                          <h3 className="font-serif text-lg text-moroc-black">{item.question}</h3>
                          <span className="text-moroc-gold text-xl leading-none" aria-hidden>
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-sm text-moroc-black/70 leading-relaxed">{item.answer}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {reviews.length > 0 && (
              <section className="mt-12 md:mt-16" aria-labelledby="reviews-heading">
                <h2 id="reviews-heading" className="font-serif text-2xl md:text-3xl text-moroc-black mb-8">
                  {t('circuitsPage.sections.reviews')}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <TestimonialCard key={`${review.name}-${review.travelDate}`} review={review} />
                  ))}
                </div>
              </section>
            )}

            {similar.length > 0 && (
              <section className="mt-12 md:mt-16" aria-labelledby="similar-heading">
                <h2 id="similar-heading" className="font-serif text-2xl md:text-3xl text-moroc-black mb-8">
                  {t('circuitsPage.similar')}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {similar.map((item) => (
                    <TourCard key={item.slug} tour={circuitToTourCard(item)} />
                  ))}
                </div>
              </section>
            )}

            {nearbyExcursions.length > 0 && (
              <section className="mt-12 md:mt-16" aria-labelledby="nearby-heading">
                <h2 id="nearby-heading" className="font-serif text-2xl md:text-3xl text-moroc-black mb-8">
                  {t('circuitsPage.sections.nearbyExcursions')}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {nearbyExcursions.map((item) => (
                    <TourCard key={item.slug} tour={circuitToTourCard(item)} />
                  ))}
                </div>
              </section>
            )}

            <section
              id="reservation"
              className="mt-12 md:mt-16 bg-white border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm scroll-mt-24"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-2">
                {t('circuitsPage.reservation.title')}
              </h2>
              <p className="text-moroc-black/65 mb-7">{t('circuitsPage.reservation.desc')}</p>

              {success ? (
                <div className="bg-[#F5F9F1] border border-green-200 p-6">
                  <p className="text-green-700 font-medium mb-1">{t('circuitsPage.success.text')}</p>
                  <p className="text-sm text-green-700/90">
                    {t('circuitsPage.success.confirmation')}{' '}
                    <span className="font-semibold">{success.data?.confirmationNumber}</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-[#FFF1F1] border border-red-200 p-4 text-sm text-red-700">{error}</div>
                  )}

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-moroc-black/60 mb-3 flex items-center gap-2">
                      <FiUser size={14} className="text-moroc-gold" /> {t('circuitsPage.form.personalInfo')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder={t('circuitsPage.form.firstNamePlaceholder')} className="input-field" />
                      <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder={t('circuitsPage.form.lastNamePlaceholder')} className="input-field" />
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t('circuitsPage.form.emailPlaceholder')} className="input-field" />
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder={t('circuitsPage.form.phonePlaceholder')} className="input-field" />
                      <select
                        name="nationality"
                        value={form.nationality}
                        onChange={handleChange}
                        className="input-field sm:col-span-2"
                        aria-label={t('circuitsPage.form.nationalityPlaceholder')}
                      >
                        <option value="">{t('circuitsPage.form.nationalityPlaceholder')}</option>
                        {countries.map(({ code, name }) => (
                          <option key={code} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-moroc-black/60 mb-3 flex items-center gap-2">
                      <FiCalendar size={14} className="text-moroc-gold" /> {t('circuitsPage.form.tripDetails')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="input-field" />
                      <div className="grid grid-cols-2 gap-3">
                        <select name="adults" value={form.adults} onChange={handleChange} className="input-field" aria-label={t('circuitsPage.form.adults')}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                            <option key={n} value={n}>
                              {n} {t('circuitsPage.form.adults')}
                            </option>
                          ))}
                        </select>
                        <select name="children" value={form.children} onChange={handleChange} className="input-field" aria-label={t('circuitsPage.form.children')}>
                          {[0, 1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n} {t('circuitsPage.form.children')}
                            </option>
                          ))}
                        </select>
                      </div>
                      <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange} rows={4} className="input-field resize-none sm:col-span-2" placeholder={t('circuitsPage.form.specialRequestsPlaceholder')} />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-4 flex items-center justify-between">
                    <p className="text-sm text-moroc-black/70">{t('circuitsPage.form.estimatedTotal')}</p>
                    <p className="font-serif text-2xl text-moroc-black">{format(estimatedTotal)}</p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 hover:bg-moroc-gold-hover hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? t('circuitsPage.form.submitting') : t('circuitsPage.form.submitBtn')}
                  </button>
                </form>
              )}
            </section>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky mobile CTA bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-moroc-black/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 flex items-center gap-3 transition-transform duration-300 lg:hidden ${
          showStickyCta ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Link
          to={`/contact?circuit=${circuit.slug}`}
          className="flex-1 inline-flex items-center justify-center min-h-11 px-3 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-white border border-white/30"
        >
          {t('circuitsPage.quoteCta')}
        </Link>
        <a
          href="#reservation"
          className="flex-1 inline-flex items-center justify-center min-h-11 px-3 py-2 text-xs font-semibold tracking-[0.08em] uppercase text-moroc-black bg-moroc-gold"
        >
          {t('circuitsPage.bookCta')}
        </a>
      </div>

      {/* Gallery lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-5 right-5 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label={t('circuitsPage.sections.closeGallery')}
          >
            <FiX size={28} />
          </button>
          <img src={lightbox} alt={circuit.h1} className="max-h-[85vh] max-w-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default CircuitDetail;
