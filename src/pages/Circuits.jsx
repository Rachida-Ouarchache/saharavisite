import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SeoImage from '../components/SeoImage';
import TourCard from '../components/TourCard';
import { CIRCUIT_CATEGORIES, circuitMatchesCategory } from '../circuits/categories';
import { useLocalizedCircuits } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';
import { buildBreadcrumbLd, buildOrganizationLd, buildLocalBusinessLd } from '../utils/circuitJsonLd';
import { SITE_URL } from '../utils/siteConfig';

const Circuits = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);
  const [searchParams, setSearchParams] = useSearchParams();
  const catFromUrl = searchParams.get('cat');
  const [activeCategory, setActiveCategory] = useState(
    CIRCUIT_CATEGORIES.some((c) => c.id === catFromUrl) ? catFromUrl : 'all'
  );

  useEffect(() => {
    if (CIRCUIT_CATEGORIES.some((c) => c.id === catFromUrl)) {
      setActiveCategory(catFromUrl);
    } else if (!catFromUrl) {
      setActiveCategory('all');
    }
  }, [catFromUrl]);

  const selectCategory = (id) => {
    setActiveCategory(id);
    if (id === 'all') setSearchParams({});
    else setSearchParams({ cat: id });
  };

  const allCircuits = useLocalizedCircuits();
  const circuits = useMemo(() => {
    if (activeCategory === 'all') return allCircuits;
    return allCircuits.filter((c) => circuitMatchesCategory(c, activeCategory));
  }, [allCircuits, activeCategory]);

  const cards = useMemo(() => circuits.map(circuitToTourCard), [circuits]);

  const categoryLabel = (cat) => {
    if (lang === 'en') return cat.labelEn;
    if (lang === 'ar') return cat.labelAr;
    return cat.labelFr;
  };

  const breadcrumbs = [
    { name: t('circuitsPage.home'), url: '/' },
    { name: t('circuitsPage.breadcrumb'), url: '/circuits' },
  ];

  const jsonLd = [
    buildOrganizationLd(),
    buildLocalBusinessLd(),
    buildBreadcrumbLd(breadcrumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: t('circuitsPage.seoTitle'),
      description: t('circuitsPage.seoDescription'),
      url: `${SITE_URL}/circuits`,
      isPartOf: { '@type': 'WebSite', name: 'Sahara Visite', url: SITE_URL },
    },
  ];

  return (
    <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
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
        url="/circuits"
        jsonLd={jsonLd}
      />

      <Navbar />

      <main className="bg-moroc-white">
        <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <SeoImage
            src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1600&q=80"
            alt={t('circuitsPage.heroAlt')}
            title={t('circuitsPage.title')}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/30 via-moroc-black/45 to-moroc-black/75" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14">
            <div className="text-white max-w-3xl">
              <p className="text-moroc-gold text-xs uppercase tracking-[0.24em] mb-3">{t('circuitsPage.label')}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                {t('circuitsPage.title')}
              </h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">{t('circuitsPage.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-moroc-black/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-moroc-gold transition-colors">{t('circuitsPage.home')}</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-moroc-black" aria-current="page">{t('circuitsPage.breadcrumb')}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label={t('circuitsPage.categories')}>
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === 'all'}
                onClick={() => selectCategory('all')}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-moroc-black text-white border-moroc-black'
                    : 'bg-transparent text-moroc-black/70 border-moroc-black/15 hover:border-moroc-gold'
                }`}
              >
                {t('circuitsPage.all')}
              </button>
              {CIRCUIT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => selectCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase border transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-moroc-black text-white border-moroc-black'
                      : 'bg-transparent text-moroc-black/70 border-moroc-black/15 hover:border-moroc-gold'
                  }`}
                >
                  {categoryLabel(cat)}
                </button>
              ))}
            </div>

            <p className="text-sm text-moroc-black/55 mb-8">
              {t('circuitsPage.count', { count: cards.length })}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {cards.map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Circuits;
