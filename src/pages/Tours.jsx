import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiX, FiChevronDown, FiSliders } from 'react-icons/fi';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';
import { CIRCUIT_CATEGORIES, CIRCUIT_TAGS, circuitMatchesCategory, getTagLabel } from '../circuits/categories';
import { useLocalizedCircuits, useFilterOptions } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';
import { buildBreadcrumbLd, buildOrganizationLd, buildLocalBusinessLd } from '../utils/circuitJsonLd';
import { SITE_URL } from '../utils/siteConfig';

const Tours = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [sort, setSort] = useState('');
  const catFromUrl = searchParams.get('cat') || '';
  const [category, setCategory] = useState(
    CIRCUIT_CATEGORIES.some((c) => c.id === catFromUrl) ? catFromUrl : ''
  );
  const [departureCity, setDepartureCity] = useState('');
  const [dayBucket, setDayBucket] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  const allCircuits = useLocalizedCircuits();
  const { departureCities, dayBuckets } = useFilterOptions();

  useEffect(() => {
    if (CIRCUIT_CATEGORIES.some((c) => c.id === catFromUrl)) setCategory(catFromUrl);
    else if (!catFromUrl) setCategory('');
  }, [catFromUrl]);

  const categoryLabel = (cat) => {
    if (lang === 'en') return cat.labelEn;
    if (lang === 'ar') return cat.labelAr;
    return cat.labelFr;
  };

  const updateCategory = (value) => {
    setCategory(value);
    const next = {};
    if (value) next.cat = value;
    if (search) next.search = search;
    setSearchParams(next);
  };

  const toggleTag = (tagId) => {
    setActiveTags((prev) => (prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]));
  };

  const filtered = useMemo(() => {
    let list = [...allCircuits];
    if (category) list = list.filter((c) => circuitMatchesCategory(c, category));
    if (departureCity) list = list.filter((c) => c.departureCity === departureCity);
    if (dayBucket) {
      const bucket = dayBuckets.find((b) => b.id === dayBucket);
      if (bucket) list = list.filter((c) => bucket.test(c.days));
    }
    if (activeTags.length) list = list.filter((c) => activeTags.every((tag) => (c.tags || []).includes(tag)));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.title?.toLowerCase().includes(q) ||
          c.shortDescription?.toLowerCase().includes(q) ||
          c.from?.toLowerCase().includes(q) ||
          c.to?.toLowerCase().includes(q) ||
          c.categoryLabel?.toLowerCase().includes(q) ||
          (c.keywords || []).some((k) => k.toLowerCase().includes(q))
      );
    }
    if (sort === 'price_asc') list.sort((a, b) => a.fromPrice - b.fromPrice);
    else if (sort === 'price_desc') list.sort((a, b) => b.fromPrice - a.fromPrice);
    else if (sort === 'rating') list.sort((a, b) => (b.rating?.value || 0) - (a.rating?.value || 0));
    else if (sort === 'duration_asc') list.sort((a, b) => (a.days || 0) - (b.days || 0));
    else if (sort === 'duration_desc') list.sort((a, b) => (b.days || 0) - (a.days || 0));
    return list;
  }, [allCircuits, category, departureCity, dayBucket, activeTags, search, sort, dayBuckets]);

  const cards = useMemo(() => filtered.map(circuitToTourCard), [filtered]);

  const clearFilters = () => {
    setSearch('');
    setCategory('');
    setDepartureCity('');
    setDayBucket('');
    setActiveTags([]);
    setSort('');
    setSearchParams({});
  };

  const activeCount = [search, category, departureCity, dayBucket, ...activeTags].filter(Boolean).length;

  const sortOptions = [
    { value: '', label: t('tours.sort.recommended') },
    { value: 'price_asc', label: t('tours.sort.priceAsc') },
    { value: 'price_desc', label: t('tours.sort.priceDesc') },
    { value: 'duration_asc', label: t('tours.sort.durationAsc') },
    { value: 'duration_desc', label: t('tours.sort.durationDesc') },
    { value: 'rating', label: t('tours.sort.rating') },
  ];

  const jsonLd = [
    buildOrganizationLd(),
    buildLocalBusinessLd(),
    buildBreadcrumbLd([
      { name: t('circuitsPage.home'), url: '/' },
      { name: t('tours.hero.title'), url: '/tours' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t('circuitsPage.seoTitle'),
      description: t('circuitsPage.seoDescription'),
      url: `${SITE_URL}/tours`,
    },
  ];

  return (
    <>
      <SEO
        title={t('circuitsPage.seoTitle')}
        description={t('circuitsPage.seoDescription')}
        keywords={[
          'circuit Maroc',
          'voyage Maroc',
          'circuit désert Maroc',
          'Morocco Tours',
          'Sahara Visite',
          'excursion Maroc',
        ]}
        url="/tours"
        jsonLd={jsonLd}
      />

      <div className="relative h-64 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476174354040-fb3ee61b5c76?w=1920"
          alt={t('tours.hero.title')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('tours.hero.label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-2">{t('tours.hero.title')}</h1>
          <p className="text-white/80">{t('tours.hero.available', { count: cards.length })}</p>
        </div>
      </div>

      {/* SEO category hub links — internal linking to the 10 thematic/departure pages */}
      <div className="bg-sand-50 border-b border-gray-100 py-6">
        <div className="container-custom">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">{t('tours.exploreByCategory')}</p>
          <div className="flex flex-wrap gap-2">
            {CIRCUIT_CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to={`/categories/${c.slug}`}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded-lg border border-gray-200 text-gray-600 bg-white hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                {categoryLabel(c)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-30 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            <input
              type="text"
              placeholder={t('tours.search')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field text-sm py-2 flex-1 max-w-xs"
            />
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="input-field text-sm py-2 pr-8 appearance-none cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                  showFilters || activeCount > 0
                    ? 'bg-primary-700 text-white border-primary-700'
                    : 'border-gray-200 text-gray-600 hover:border-gray-400'
                }`}
              >
                <FiSliders size={16} />
                {t('tours.filters')}
                {activeCount > 0 && (
                  <span className="bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {activeCount}
                  </span>
                )}
              </button>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                >
                  <FiX size={14} /> {t('tours.clear')}
                </button>
              )}
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-5 animate-slide-down">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.category')}</label>
                  <select
                    value={category}
                    onChange={(e) => updateCategory(e.target.value)}
                    className="input-field text-sm py-2"
                  >
                    <option value="">{t('tours.allCategories')}</option>
                    {CIRCUIT_CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {categoryLabel(c)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.departureCity')}</label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="input-field text-sm py-2"
                  >
                    <option value="">{t('tours.allCities')}</option>
                    {departureCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase mb-1 block">{t('tours.days')}</label>
                  <select
                    value={dayBucket}
                    onChange={(e) => setDayBucket(e.target.value)}
                    className="input-field text-sm py-2"
                  >
                    <option value="">{t('tours.allDurations')}</option>
                    {dayBuckets.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase mb-2 block">{t('tours.themes')}</label>
                <div className="flex flex-wrap gap-2">
                  {CIRCUIT_TAGS.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => toggleTag(tag.id)}
                      className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide rounded-lg border ${
                        activeTags.includes(tag.id)
                          ? 'bg-primary-700 text-white border-primary-700'
                          : 'border-gray-200 text-gray-600 hover:border-gold-400'
                      }`}
                    >
                      {getTagLabel(tag.id)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="py-14 bg-moroc-white min-h-[50vh]">
        <div className="container-custom">
          {cards.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">{t('tours.noResults')}</p>
              <button type="button" onClick={clearFilters} className="btn-primary">
                {t('tours.clearFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Tours;
