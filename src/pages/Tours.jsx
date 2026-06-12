import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiX, FiChevronDown, FiSliders } from 'react-icons/fi';
import { toursAPI } from '../utils/api';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';
import LoadingSpinner from '../components/LoadingSpinner';

const Tours = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [tours, setTours] = useState([]);
  const [filters, setFilters] = useState({ regions: [], categories: [], difficulties: [], priceRange: { min: 0, max: 5000 }, durationRange: { min: 1, max: 30 } });
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const sortOptions = [
    { value: '', label: t('tours.sort.recommended') },
    { value: 'price_asc', label: t('tours.sort.priceAsc') },
    { value: 'price_desc', label: t('tours.sort.priceDesc') },
    { value: 'duration_asc', label: t('tours.sort.durationAsc') },
    { value: 'duration_desc', label: t('tours.sort.durationDesc') },
    { value: 'rating', label: t('tours.sort.rating') },
  ];

  const [activeFilters, setActiveFilters] = useState({
    search: searchParams.get('search') || '',
    region: '', category: '', difficulty: '',
    minPrice: '', maxPrice: '', minDuration: '', maxDuration: '', sort: '',
  });

  useEffect(() => {
    toursAPI.getFilters().then((res) => setFilters(res.data)).catch(() => {});
  }, []);

  const loadTours = useCallback(async () => {
    setLoading(true);
    try {
      const params = { ...activeFilters, page, limit: 9 };
      Object.keys(params).forEach((k) => { if (!params[k]) delete params[k]; });
      const res = await toursAPI.getAll(params);
      setTours(res.data || []);
      setTotal(res.total || 0);
      setPages(res.pages || 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [activeFilters, page]);

  useEffect(() => { loadTours(); }, [loadTours]);

  const updateFilter = (key, value) => {
    setActiveFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setActiveFilters({ search: '', region: '', category: '', difficulty: '', minPrice: '', maxPrice: '', minDuration: '', maxDuration: '', sort: '' });
    setPage(1);
  };

  const activeCount = Object.entries(activeFilters).filter(([k, v]) => v && k !== 'sort').length;

  return (
    <>
      <SEO
        title="Morocco Tours & Excursions – All Itineraries"
        description="Browse all our Morocco tours: Imperial Cities, Sahara Desert, Atlas Mountains, coastal road trips, and custom adventures."
        url="/tours"
      />

      {/* Hero */}
      <div className="relative h-64 md:h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1476174354040-fb3ee61b5c76?w=1920" alt="Morocco Tours" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('tours.hero.label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2">{t('tours.hero.title')}</h1>
          <p className="text-white/80">{t('tours.hero.available', { count: total })}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              placeholder={t('tours.search')}
              value={activeFilters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
              className="input-field text-sm py-2 flex-1 max-w-xs"
            />
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <select value={activeFilters.sort} onChange={(e) => updateFilter('sort', e.target.value)} className="input-field text-sm py-2 pr-8 appearance-none cursor-pointer">
                  {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${showFilters || activeCount > 0 ? 'bg-primary-700 text-white border-primary-700' : 'border-gray-200 text-gray-600 hover:border-gray-400'}`}
              >
                <FiSliders size={16} />
                {t('tours.filters')}
                {activeCount > 0 && (
                  <span className="bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{activeCount}</span>
                )}
              </button>
              {activeCount > 0 && (
                <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors">
                  <FiX size={14} /> {t('tours.clear')}
                </button>
              )}
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 animate-slide-down">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.region')}</label>
                <select value={activeFilters.region} onChange={(e) => updateFilter('region', e.target.value)} className="input-field text-sm py-2">
                  <option value="">{t('tours.allRegions')}</option>
                  {filters.regions.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.category')}</label>
                <select value={activeFilters.category} onChange={(e) => updateFilter('category', e.target.value)} className="input-field text-sm py-2">
                  <option value="">{t('tours.allCategories')}</option>
                  {filters.categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.difficulty')}</label>
                <select value={activeFilters.difficulty} onChange={(e) => updateFilter('difficulty', e.target.value)} className="input-field text-sm py-2">
                  <option value="">{t('tours.allLevels')}</option>
                  {['Easy', 'Moderate', 'Challenging'].map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.minPrice')}</label>
                <input type="number" placeholder="$0" value={activeFilters.minPrice} onChange={(e) => updateFilter('minPrice', e.target.value)} className="input-field text-sm py-2" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.maxPrice')}</label>
                <input type="number" placeholder="$5000" value={activeFilters.maxPrice} onChange={(e) => updateFilter('maxPrice', e.target.value)} className="input-field text-sm py-2" />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.maxDays')}</label>
                <input type="number" placeholder="30" value={activeFilters.maxDuration} onChange={(e) => updateFilter('maxDuration', e.target.value)} className="input-field text-sm py-2" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <section className="py-14 bg-sand-50 min-h-[50vh]">
        <div className="container-custom">
          {loading ? (
            <LoadingSpinner text={t('tours.loading')} />
          ) : tours.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">{t('tours.noResults')}</p>
              <button onClick={clearFilters} className="btn-primary">{t('tours.clearFilters')}</button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {tours.map((tour) => <TourCard key={tour._id} tour={tour} />)}
              </div>
              {pages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
                    <button key={p} onClick={() => setPage(p)} className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${p === page ? 'bg-primary-700 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>{p}</button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Tours;
