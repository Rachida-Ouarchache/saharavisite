import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMapPin, FiSun, FiInfo, FiArrowRight } from 'react-icons/fi';
import { destinationsAPI, toursAPI } from '../utils/api';
import SEO from '../components/SEO';
import TourCard from '../components/TourCard';
import LoadingSpinner from '../components/LoadingSpinner';

const DestinationDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [relatedTours, setRelatedTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await destinationsAPI.getBySlug(slug);
        setDestination(res.data);
        const tours = await toursAPI.getAll({ region: res.data.region, limit: 3 });
        setRelatedTours(tours.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) return <LoadingSpinner fullScreen />;
  if (!destination) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">{t('destinationDetail.notFound')}</h2>
        <Link to="/destinations" className="btn-primary">{t('destinationDetail.backTo')}</Link>
      </div>
    </div>
  );

  const allImages = [destination.coverImage, ...(destination.images || [])].filter(Boolean);

  return (
    <>
      <SEO
        title={destination.seo?.metaTitle || `${destination.name} – Morocco Travel Guide`}
        description={destination.seo?.metaDescription || destination.shortDescription}
        image={destination.coverImage}
        url={`/destinations/${slug}`}
      />

      <div className="relative h-80 md:h-[500px] overflow-hidden">
        <img src={allImages[activeImage] || destination.coverImage} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold mb-2">
            <FiMapPin size={14} />{destination.region}, {destination.country}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-shadow mb-3">{destination.name}</h1>
          <p className="text-white/80 text-lg max-w-2xl">{destination.shortDescription}</p>
        </div>
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {allImages.map((img, i) => (
              <button key={i} onClick={() => setActiveImage(i)} className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === activeImage ? 'border-gold-400 scale-110' : 'border-white/40 hover:border-white'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white border-b border-gray-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gold-500 transition-colors">{t('destinationDetail.breadHome')}</Link>
            <span>/</span>
            <Link to="/destinations" className="hover:text-gold-500 transition-colors">{t('destinationDetail.breadDest')}</Link>
            <span>/</span>
            <span className="text-primary-700 font-medium">{destination.name}</span>
          </nav>
        </div>
      </div>

      <div className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-serif text-2xl text-primary-700 font-bold mb-4">{t('destinationDetail.about', { name: destination.name })}</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">{destination.description}</p>
              </div>

              {destination.highlights?.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <h2 className="font-serif text-2xl text-primary-700 font-bold mb-5">{t('destinationDetail.highlights')}</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {destination.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {destination.attractions?.length > 0 && (
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <h2 className="font-serif text-2xl text-primary-700 font-bold mb-5">{t('destinationDetail.attractions')}</h2>
                  <div className="space-y-4">
                    {destination.attractions.map((attr, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-sand-50 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                        <div>
                          <h3 className="font-semibold text-primary-700 mb-1">{attr.name}</h3>
                          <p className="text-gray-500 text-sm">{attr.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {destination.mapCoordinates?.lat && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h2 className="font-serif text-2xl text-primary-700 font-bold mb-4">{t('destinationDetail.location')}</h2>
                  <div className="rounded-xl overflow-hidden h-64 bg-gray-100">
                    <iframe title={`Map of ${destination.name}`} src={`https://maps.google.com/maps?q=${destination.mapCoordinates.lat},${destination.mapCoordinates.lng}&z=9&output=embed`} className="w-full h-full border-0" loading="lazy" />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {destination.climate && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-semibold text-primary-700 mb-4 flex items-center gap-2">
                    <FiSun className="text-gold-500" /> {t('destinationDetail.whenToVisit')}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-green-50 rounded-lg p-3">
                      <span className="font-semibold text-green-700">{t('destinationDetail.bestTime')} </span>
                      <span className="text-gray-600">{destination.climate.bestTime}</span>
                    </div>
                    {destination.climate.summer && (
                      <div className="bg-amber-50 rounded-lg p-3">
                        <span className="font-semibold text-amber-700">{t('destinationDetail.summer')} </span>
                        <span className="text-gray-600">{destination.climate.summer}</span>
                      </div>
                    )}
                    {destination.climate.winter && (
                      <div className="bg-blue-50 rounded-lg p-3">
                        <span className="font-semibold text-blue-700">{t('destinationDetail.winter')} </span>
                        <span className="text-gray-600">{destination.climate.winter}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {destination.practicalInfo?.tips?.length > 0 && (
                <div className="bg-white rounded-2xl p-6 shadow-card">
                  <h3 className="font-semibold text-primary-700 mb-4 flex items-center gap-2">
                    <FiInfo className="text-gold-500" /> {t('destinationDetail.practicalTips')}
                  </h3>
                  <ul className="space-y-2">
                    {destination.practicalInfo.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold-500 mt-0.5 flex-shrink-0">→</span>{tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-primary-700 rounded-2xl p-6 text-white text-center">
                <h3 className="font-serif text-xl font-bold mb-2">{t('destinationDetail.cta.title', { name: destination.name })}</h3>
                <p className="text-primary-200 text-sm mb-4">{t('destinationDetail.cta.desc')}</p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  {t('destinationDetail.cta.btn')} <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedTours.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-title">{t('destinationDetail.relatedTours', { name: destination.name })}</h2>
              <Link to="/tours" className="text-gold-500 hover:text-gold-600 font-semibold text-sm flex items-center gap-1">
                {t('destinationDetail.allTours')} <FiArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((tour) => <TourCard key={tour._id} tour={tour} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DestinationDetail;
