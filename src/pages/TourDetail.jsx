import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FiClock, FiUsers, FiStar, FiMapPin, FiCheck, FiX,
  FiChevronDown, FiArrowRight, FiGlobe,
} from 'react-icons/fi';
import { toursAPI } from '../utils/api';
import SEO from '../components/SEO';
import TestimonialCard from '../components/TestimonialCard';
import LoadingSpinner from '../components/LoadingSpinner';

const difficultyColor = { Easy: 'bg-green-100 text-green-700', Moderate: 'bg-amber-100 text-amber-700', Challenging: 'bg-red-100 text-red-700' };

const TourDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [openDay, setOpenDay] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await toursAPI.getBySlug(slug);
        setTour(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return <LoadingSpinner fullScreen />;
  if (!tour) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">{t('tourDetail.notFound')}</h2>
        <Link to="/tours" className="btn-primary">{t('tourDetail.backToTours')}</Link>
      </div>
    </div>
  );

  const allImages = [tour.coverImage, ...(tour.images || [])].filter(Boolean);
  const reviews = tour.reviews || [];

  const tabs = [
    { id: 'overview', label: t('tourDetail.tabs.overview') },
    { id: 'itinerary', label: t('tourDetail.tabs.itinerary') },
    { id: 'includes', label: t('tourDetail.tabs.includes') },
    { id: 'reviews', label: t('tourDetail.tabs.reviews', { count: reviews.length }) },
  ];

  return (
    <>
      <SEO
        title={tour.seo?.metaTitle || `${tour.title} – Morocco Tour`}
        description={tour.seo?.metaDescription || tour.shortDescription}
        image={tour.coverImage}
        url={`/tours/${slug}`}
        type="product"
      />

      {/* Hero Image Gallery */}
      <div className="relative h-72 md:h-[480px] overflow-hidden mt-16 md:mt-0">
        <img src={allImages[activeImage]} alt={tour.title} className="w-full h-full object-cover transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-4 flex gap-2">
            {allImages.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`w-14 h-10 rounded overflow-hidden border-2 transition-all ${i === activeImage ? 'border-gold-400 scale-105' : 'border-white/40'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
        <div className="absolute top-4 left-4 flex gap-2">
          {tour.featured && <span className="badge bg-gold-500 text-white">{t('tourDetail.featured')}</span>}
          <span className={`badge ${difficultyColor[tour.difficulty]}`}>{tour.difficulty}</span>
        </div>
      </div>

      {/* Title Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-5">
          <nav className="text-sm text-gray-400 mb-2">
            <Link to="/" className="hover:text-gold-500">{t('tourDetail.breadHome')}</Link>
            <span className="mx-2">/</span>
            <Link to="/tours" className="hover:text-gold-500">{t('tourDetail.breadTours')}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{tour.title}</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl text-primary-700 font-bold">{tour.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                <span className="flex items-center gap-1"><FiMapPin size={14} className="text-gold-400" />{tour.region}</span>
                <span className="flex items-center gap-1"><FiClock size={14} className="text-gold-400" />{tour.duration} {t('tourDetail.days')}</span>
                <span className="flex items-center gap-1"><FiUsers size={14} className="text-gold-400" />{t('tourDetail.maxPax', { count: tour.groupSize })}</span>
                <span className="flex items-center gap-1">
                  <FiStar size={14} className="text-gold-500 fill-current" />
                  <strong>{tour.rating?.toFixed(1)}</strong>
                  <span className="text-gray-400">({tour.ratingsCount} {t('tourDetail.reviews')})</span>
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary-700">${tour.discountPrice || tour.price}</div>
              <div className="text-gray-400 text-sm">{t('tourDetail.perPerson')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[64px] z-20">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? 'border-gold-500 text-gold-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 bg-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">

              {activeTab === 'overview' && (
                <>
                  <div className="bg-white rounded-2xl p-8 shadow-card">
                    <h2 className="font-serif text-2xl text-primary-700 font-bold mb-4">{t('tourDetail.overview')}</h2>
                    <p className="text-gray-600 leading-relaxed">{tour.description}</p>
                  </div>
                  {tour.highlights?.length > 0 && (
                    <div className="bg-white rounded-2xl p-8 shadow-card">
                      <h2 className="font-serif text-xl text-primary-700 font-bold mb-5">{t('tourDetail.highlights')}</h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                            <FiCheck className="text-gold-500 mt-0.5 flex-shrink-0" size={16} />{h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {tour.mapCoordinates?.lat && (
                    <div className="bg-white rounded-2xl p-6 shadow-card">
                      <h2 className="font-serif text-xl text-primary-700 font-bold mb-4">{t('tourDetail.map')}</h2>
                      <div className="rounded-xl overflow-hidden h-64">
                        <iframe title="Tour Map" src={`https://maps.google.com/maps?q=${tour.mapCoordinates.lat},${tour.mapCoordinates.lng}&z=${tour.mapZoom || 7}&output=embed`} className="w-full h-full border-0" loading="lazy" />
                      </div>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'itinerary' && (
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <h2 className="font-serif text-2xl text-primary-700 font-bold mb-6">{t('tourDetail.itinerary')}</h2>
                  <div className="space-y-3">
                    {tour.itinerary?.map((day) => (
                      <div key={day.day} className="border border-gray-100 rounded-xl overflow-hidden">
                        <button onClick={() => setOpenDay(openDay === day.day ? null : day.day)} className="w-full flex items-center justify-between p-5 text-left hover:bg-sand-50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gold-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{day.day}</div>
                            <div>
                              <span className="text-xs text-gray-400">{t('tourDetail.day', { day: day.day })}</span>
                              <div className="font-semibold text-primary-700">{day.title}</div>
                            </div>
                          </div>
                          <FiChevronDown className={`text-gray-400 transition-transform ${openDay === day.day ? 'rotate-180' : ''}`} size={18} />
                        </button>
                        {openDay === day.day && (
                          <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">{day.description}</p>
                            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                              {day.accommodation && <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md">🏨 {day.accommodation}</span>}
                              {day.meals && <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md">🍽️ {day.meals}</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'includes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-8 shadow-card">
                    <h2 className="font-serif text-xl text-primary-700 font-bold mb-5 flex items-center gap-2">
                      <FiCheck className="text-green-500" /> {t('tourDetail.included')}
                    </h2>
                    <ul className="space-y-3">
                      {tour.included?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <FiCheck className="text-green-500 flex-shrink-0 mt-0.5" size={16} />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-card">
                    <h2 className="font-serif text-xl text-primary-700 font-bold mb-5 flex items-center gap-2">
                      <FiX className="text-red-400" /> {t('tourDetail.notIncluded')}
                    </h2>
                    <ul className="space-y-3">
                      {tour.excluded?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                          <FiX className="text-red-400 flex-shrink-0 mt-0.5" size={16} />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                    <div className="text-6xl font-bold text-primary-700 mb-1">{tour.rating?.toFixed(1)}</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((s) => (
                        <FiStar key={s} size={20} className={s <= Math.round(tour.rating) ? 'text-gold-500 fill-current' : 'text-gray-200'} />
                      ))}
                    </div>
                    <p className="text-gray-500">{t('tourDetail.basedOn', { count: tour.ratingsCount })}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.map((r) => <TestimonialCard key={r._id} review={r} />)}
                  </div>
                </div>
              )}
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-card p-6 sticky top-32">
                <div className="text-center mb-5 pb-5 border-b border-gray-100">
                  <div className="text-4xl font-bold text-primary-700 mb-1">${tour.discountPrice || tour.price}</div>
                  {tour.discountPrice && <div className="text-gray-400 text-sm line-through">${tour.price}</div>}
                  <div className="text-gray-500 text-sm">{t('tourDetail.perPerson')}</div>
                </div>
                <div className="space-y-3 mb-6 text-sm">
                  {[
                    { icon: <FiClock size={15} className="text-gold-400" />, label: t('tourDetail.booking.duration'), value: t('tourDetail.booking.daysCount', { count: tour.duration }) },
                    { icon: <FiUsers size={15} className="text-gold-400" />, label: t('tourDetail.booking.groupSize'), value: t('tourDetail.booking.maxPeople', { count: tour.groupSize }) },
                    { icon: <FiGlobe size={15} className="text-gold-400" />, label: t('tourDetail.booking.languages'), value: tour.languages?.join(', ') },
                    { icon: <FiMapPin size={15} className="text-gold-400" />, label: t('tourDetail.booking.region'), value: tour.region },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="flex items-center gap-2 text-gray-500">{icon} {label}</span>
                      <span className="text-gray-700 font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/contact?tour=${tour.slug}`} className="btn-primary w-full justify-center mb-3">
                  {t('tourDetail.bookTour')} <FiArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary w-full justify-center text-sm">
                  {t('tourDetail.askQuestion')}
                </Link>
                <p className="text-center text-xs text-gray-400 mt-4">{t('tourDetail.freeCancellation')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;
