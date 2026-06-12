import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { destinationsAPI } from '../utils/api';
import DestinationCard from '../components/DestinationCard';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

const Destinations = () => {
  const { t } = useTranslation();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState('All');
  const [search, setSearch] = useState('');

  const regions = [
    { value: 'All', labelKey: 'destinations.regions.all' },
    { value: 'South', labelKey: 'destinations.regions.south' },
    { value: 'North', labelKey: 'destinations.regions.north' },
    { value: 'Atlantic Coast', labelKey: 'destinations.regions.atlantic' },
    { value: 'Imperial Cities', labelKey: 'destinations.regions.imperial' },
  ];

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const params = {};
        if (region !== 'All') params.region = region;
        if (search) params.search = search;
        const res = await destinationsAPI.getAll(params);
        setDestinations(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [region, search]);

  return (
    <>
      <SEO
        title="Morocco Destinations – Cities, Deserts & Mountains"
        description="Explore Morocco's most stunning destinations: Marrakech, Fes, Sahara Desert, Chefchaouen, Atlas Mountains, Essaouira and more."
        url="/destinations"
      />

      <div className="relative h-72 md:h-80 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=1920" alt="Morocco Destinations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('destinations.hero.label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">{t('destinations.hero.title')}</h1>
          <p className="text-white/80 text-lg">{t('destinations.hero.subtitle')}</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-xs">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder={t('destinations.search')}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-9 py-2 text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {regions.map(({ value, labelKey }) => (
                <button
                  key={value}
                  onClick={() => setRegion(value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${region === value ? 'bg-primary-700 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-14 bg-sand-50">
        <div className="container-custom">
          {loading ? (
            <LoadingSpinner text={t('destinations.loading')} />
          ) : destinations.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">{t('destinations.noResults')}</p>
            </div>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-6">{t('destinations.count', { count: destinations.length })}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {destinations.map((dest) => <DestinationCard key={dest._id} destination={dest} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Destinations;
