import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import circuits, {
  getCircuitBySlug,
  getCircuitsByCategory,
  getSimilarCircuits,
} from './circuitsData';
import { getCircuitI18n } from './i18nCircuits';
import { getCategoryLabel, getCategoryById, circuitMatchesCategory } from './categories';

export function useLocalizedCircuits(categoryId) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);

  return useMemo(() => {
    const list = categoryId ? getCircuitsByCategory(categoryId) : circuits;
    return list.map((c) => localizeCircuit(c, lang));
  }, [categoryId, lang]);
}

/** Circuits belonging to one of the 10 SEO categories (multi-membership aware). */
export function useCircuitsForCategoryId(categoryId) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);

  return useMemo(() => {
    if (!categoryId) return [];
    const list = circuits.filter((c) => circuitMatchesCategory(c, categoryId));
    return list.map((c) => localizeCircuit(c, lang));
  }, [categoryId, lang]);
}

export function useLocalizedCircuit(slug) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);

  return useMemo(() => {
    const circuit = getCircuitBySlug(slug);
    if (!circuit) return null;
    return localizeCircuit(circuit, lang);
  }, [slug, lang]);
}

export function useSimilarCircuits(circuit, limit = 4) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);

  return useMemo(() => {
    if (!circuit) return [];
    return getSimilarCircuits(circuit, limit).map((c) => localizeCircuit(c, lang));
  }, [circuit, limit, lang]);
}

/** Day-trip excursions departing from the same city — internal-linking helper. */
export function useNearbyExcursions(circuit, limit = 3) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);

  return useMemo(() => {
    if (!circuit) return [];
    const list = circuits.filter(
      (c) =>
        c.slug !== circuit.slug &&
        (c.category === 'excursions' || c.days === 1) &&
        c.departureCity === circuit.departureCity
    );
    return list.slice(0, limit).map((c) => localizeCircuit(c, lang));
  }, [circuit, limit, lang]);
}

/** Distinct filter option sets computed from the live dataset. */
export function useFilterOptions() {
  return useMemo(() => {
    const departureCities = [...new Set(circuits.map((c) => c.departureCity).filter(Boolean))].sort();
    const dayBuckets = [
      { id: '1', label: '1 jour', test: (d) => d === 1 },
      { id: '2-3', label: '2 à 3 jours', test: (d) => d >= 2 && d <= 3 },
      { id: '4-6', label: '4 à 6 jours', test: (d) => d >= 4 && d <= 6 },
      { id: '7-9', label: '7 à 9 jours', test: (d) => d >= 7 && d <= 9 },
      { id: '10+', label: '10 jours et plus', test: (d) => d >= 10 },
    ];
    return { departureCities, dayBuckets };
  }, []);
}

function localizeCircuit(circuit, lang) {
  if (lang === 'fr') {
    return { ...circuit, categoryLabel: getCategoryLabel(circuit.category, lang) };
  }
  const overlay = getCircuitI18n(circuit.slug, lang) || {};
  return {
    ...circuit,
    title: overlay.title || circuit.title,
    h1: overlay.title || circuit.h1,
    metaTitle: overlay.metaTitle || overlay.title || circuit.metaTitle,
    metaDescription: overlay.metaDescription || circuit.metaDescription,
    shortDescription: overlay.shortDescription || circuit.shortDescription,
    categoryLabel: getCategoryLabel(circuit.category, lang),
  };
}

export { getCategoryLabel, getCategoryById, getCircuitsByCategory };
