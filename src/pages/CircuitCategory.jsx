import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiClock, FiMapPin } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SeoImage from '../components/SeoImage';
import TourCard from '../components/TourCard';
import { CIRCUIT_CATEGORIES, getCategoryBySlug } from '../circuits/categories';
import { useCircuitsForCategoryId } from '../circuits/useLocalizedCircuit';
import { circuitToTourCard } from '../circuits/toTourCard';
import { buildBreadcrumbLd, buildOrganizationLd, buildLocalBusinessLd } from '../utils/circuitJsonLd';
import { SITE_URL } from '../utils/siteConfig';

const CircuitCategory = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const circuits = useCircuitsForCategoryId(category?.id);
  const cards = useMemo(() => circuits.map(circuitToTourCard), [circuits]);

  const label = (cat) => {
    if (!cat) return '';
    if (lang === 'en') return cat.labelEn;
    if (lang === 'ar') return cat.labelAr;
    return cat.labelFr;
  };

  const breadcrumbs = useMemo(() => {
    if (!category) return [];
    return [
      { name: t('circuitsPage.home'), url: '/' },
      { name: t('circuitsPage.breadcrumb'), url: '/tours' },
      { name: label(category), url: `/categories/${category.slug}` },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, t, lang]);

  const jsonLd = useMemo(() => {
    if (!category) return [];
    return [
      buildOrganizationLd(),
      buildLocalBusinessLd(),
      buildBreadcrumbLd(breadcrumbs),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: category.seoTitle,
        description: category.description,
        url: `${SITE_URL}/categories/${category.slug}`,
        isPartOf: { '@type': 'WebSite', name: 'Sahara Visite', url: SITE_URL },
      },
    ];
  }, [category, breadcrumbs]);

  if (!category) return <Navigate to="/tours" replace />;

  const otherCategories = CIRCUIT_CATEGORIES.filter((c) => c.id !== category.id);

  return (
    <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
      <SEO
        title={category.seoTitle}
        description={category.description}
        keywords={[label(category), 'circuit Maroc', 'Sahara Visite', 'Morocco Tours']}
        image={category.image}
        url={`/categories/${category.slug}`}
        jsonLd={jsonLd}
      />

      <Navbar />

      <main className="bg-moroc-white">
        <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <SeoImage
            src={category.image}
            alt={label(category)}
            title={label(category)}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/30 via-moroc-black/45 to-moroc-black/75" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-14">
            <div className="text-white max-w-3xl">
              <p className="text-moroc-gold text-xs uppercase tracking-[0.24em] mb-3">Sahara Visite</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
                {label(category)}
              </h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">{category.description}</p>
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

            <p className="text-sm text-moroc-black/55 mb-8">
              {t('circuitsPage.count', { count: cards.length })}
            </p>

            {cards.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-moroc-black/50 text-lg mb-4">{t('tours.noResults')}</p>
                <Link to="/tours" className="btn-primary">
                  {t('tours.clearFilters')}
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cards.map((tour) => (
                  <TourCard key={tour.slug} tour={tour} />
                ))}
              </div>
            )}

            <div className="mt-16 pt-10 border-t border-moroc-black/[0.08]">
              <p className="text-xs font-semibold text-moroc-black/50 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FiMapPin className="text-moroc-gold" size={14} /> {t('tours.exploreByCategory')}
              </p>
              <div className="flex flex-wrap gap-2">
                {otherCategories.map((c) => (
                  <Link
                    key={c.id}
                    to={`/categories/${c.slug}`}
                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wide border border-moroc-black/15 text-moroc-black/70 hover:border-moroc-gold hover:text-moroc-gold transition-colors flex items-center gap-1.5"
                  >
                    <FiClock className="opacity-60" size={11} />
                    {label(c)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CircuitCategory;
