/**
 * Circuit category taxonomy — inspired by the *organization* of leading Morocco
 * tour operator sites (departure-city hubs + thematic hubs), never their copy,
 * images or code. A circuit can legitimately belong to several categories at
 * once (e.g. a Marrakech departure that is also a "Désert Sahara" circuit),
 * which powers the internal-linking / maillage interne strategy.
 *
 * Each category owns: id, slug, SEO title, short description, cover image
 * and a `match(circuit)` predicate used to build its grid dynamically —
 * no content duplication needed across pages.
 */

export const CIRCUIT_CATEGORIES = [
  {
    id: 'depuis-marrakech',
    slug: 'circuits-depuis-marrakech',
    labelFr: 'Circuits depuis Marrakech',
    labelEn: 'Tours from Marrakech',
    labelAr: 'جولات انطلاقاً من مراكش',
    seoTitle: 'Circuits depuis Marrakech – Désert, Atlas, Essaouira | Sahara Visite',
    description:
      "Tous les circuits Maroc au départ de Marrakech : Sahara, Haut Atlas, côte Atlantique, villes impériales et excursions à la journée. Formules privées, en groupe ou 100% sur mesure.",
    image: 'https://images.unsplash.com/photo-1597212720158-6b1a48b3f8f5?w=1600&q=80',
    match: (c) => c.departureCity === 'Marrakech',
  },
  {
    id: 'depuis-casablanca',
    slug: 'circuits-depuis-casablanca',
    labelFr: 'Circuits depuis Casablanca',
    labelEn: 'Tours from Casablanca',
    labelAr: 'جولات انطلاقاً من الدار البيضاء',
    seoTitle: 'Circuits depuis Casablanca – Villes impériales & Sahara | Sahara Visite',
    description:
      "Circuits Maroc au départ de Casablanca : villes impériales, traversée vers le Sahara, côte Atlantique et escapades culturelles depuis l'aéroport Mohammed V.",
    image: 'https://images.unsplash.com/photo-1577147443647-de2258e0d0c5?w=1600&q=80',
    match: (c) => c.departureCity === 'Casablanca',
  },
  {
    id: 'depuis-fes',
    slug: 'circuits-depuis-fes',
    labelFr: 'Circuits depuis Fès',
    labelEn: 'Tours from Fes',
    labelAr: 'جولات انطلاقاً من فاس',
    seoTitle: 'Circuits depuis Fès – Sahara, Moyen Atlas & Villes Impériales | Sahara Visite',
    description:
      "Circuits Maroc au départ de Fès : la route vers le Sahara par le Moyen Atlas et le Ziz, les villes impériales voisines et les excursions culturelles autour de la médina UNESCO.",
    image: 'https://images.unsplash.com/photo-1548922620-9d0e5c58c1f6?w=1600&q=80',
    match: (c) => c.departureCity === 'Fès',
  },
  {
    id: 'depuis-tanger',
    slug: 'circuits-depuis-tanger',
    labelFr: 'Circuits depuis Tanger',
    labelEn: 'Tours from Tangier',
    labelAr: 'جولات انطلاقاً من طنجة',
    seoTitle: 'Circuits depuis Tanger – Nord du Maroc & Grand Sud | Sahara Visite',
    description:
      "Circuits Maroc au départ de Tanger : Chefchaouen, Tétouan, Rif et Nord marocain, ou grande traversée vers les villes impériales et le désert du Sahara.",
    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1600&q=80',
    match: (c) => c.departureCity === 'Tanger',
  },
  {
    id: 'excursions',
    slug: 'excursions-journee',
    labelFr: "Excursions d'une journée",
    labelEn: 'Day Trips',
    labelAr: 'رحلات يومية',
    seoTitle: "Excursions d'une journée au Maroc – Sans changer d'hôtel | Sahara Visite",
    description:
      "Des excursions à la journée depuis Marrakech, Agadir, Fès ou Tanger : vallées de l'Atlas, cascades, médinas côtières et sites UNESCO, avec retour à votre hébergement le soir même.",
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80',
    match: (c) => c.category === 'excursions' || c.days === 1,
  },
  {
    id: 'desert-sahara',
    slug: 'circuits-desert-sahara',
    labelFr: 'Circuits Désert Sahara',
    labelEn: 'Sahara Desert Tours',
    labelAr: 'جولات الصحراء',
    seoTitle: 'Circuits Désert Sahara Maroc – Merzouga & Erg Chigaga | Sahara Visite',
    description:
      "Voyages dans le Sahara marocain : dunes de Merzouga et d'Erg Chigaga, bivouacs berbères, 4x4, kasbahs du Sud et vallées du Draa, du Todra et du Dadès.",
    image: 'https://images.unsplash.com/photo-1559586616-361e18714958?w=1600&q=80',
    match: (c) => c.category === 'desert' || c.category === 'sud',
  },
  {
    id: 'villes-imperiales',
    slug: 'circuits-villes-imperiales',
    labelFr: 'Circuits Villes Impériales',
    labelEn: 'Imperial Cities Tours',
    labelAr: 'جولات المدن الإمبراطورية',
    seoTitle: 'Circuits Villes Impériales du Maroc – Fès, Meknès, Rabat | Sahara Visite',
    description:
      "Circuits culturels dans les villes impériales du Maroc : médinas UNESCO de Fès et Meknès, monuments royaux de Rabat, ruines romaines de Volubilis et ruelles ocre de Marrakech.",
    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1600&q=80',
    match: (c) => c.category === 'imperial',
  },
  {
    id: 'nord-maroc',
    slug: 'circuits-nord-maroc',
    labelFr: 'Circuits Nord du Maroc',
    labelEn: 'Northern Morocco Tours',
    labelAr: 'جولات شمال المغرب',
    seoTitle: 'Circuits Nord du Maroc – Chefchaouen, Tanger, Rif | Sahara Visite',
    description:
      "Circuits dans le Nord du Maroc : la ville bleue de Chefchaouen, les cascades d'Akchour, Tanger et le détroit de Gibraltar, Tétouan et Asilah.",
    image: 'https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1600&q=80',
    match: (c) => c.category === 'nord',
  },
  {
    id: 'cote-atlantique',
    slug: 'circuits-cote-atlantique',
    labelFr: 'Circuits Côte Atlantique',
    labelEn: 'Atlantic Coast Tours',
    labelAr: 'جولات الساحل الأطلسي',
    seoTitle: 'Circuits Côte Atlantique Maroc – Essaouira, Agadir | Sahara Visite',
    description:
      "Circuits sur la côte Atlantique marocaine : médina venteuse d'Essaouira, baie d'Agadir, cité portugaise d'El Jadida et lagune ostréicole d'Oualidia.",
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80',
    match: (c) => c.category === 'atlantique',
  },
  {
    id: 'sur-mesure',
    slug: 'voyages-sur-mesure',
    labelFr: 'Voyages sur mesure',
    labelEn: 'Tailor-Made Trips',
    labelAr: 'رحلات مخصصة',
    seoTitle: 'Voyages sur mesure au Maroc – Circuits 100% personnalisés | Sahara Visite',
    description:
      "Créez votre voyage Maroc sur mesure : rythme, hébergements, durée et centres d'intérêt adaptés à vos envies (lune de miel, famille, luxe, aventure, budget).",
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80',
    match: (c) => c.type === 'Sur mesure' || c.customizable === true,
  },
];

/** Thematic filter tags (independent from categories, used in the filters UI). */
export const CIRCUIT_TAGS = [
  { id: 'desert', labelFr: 'Désert' },
  { id: 'montagne', labelFr: 'Montagne' },
  { id: 'mer', labelFr: 'Mer' },
  { id: 'culture', labelFr: 'Culture' },
  { id: 'famille', labelFr: 'Famille' },
  { id: 'couple', labelFr: 'Couple' },
  { id: 'luxe', labelFr: 'Luxe' },
  { id: 'budget', labelFr: 'Budget' },
  { id: 'aventure', labelFr: 'Aventure' },
];

/** Maps legacy internal category ids (still stored on each circuit for
 * similar-circuit grouping) to the new public-facing SEO category id, for
 * display purposes only. */
const LEGACY_TO_NEW = {
  desert: 'desert-sahara',
  sud: 'desert-sahara',
  imperial: 'villes-imperiales',
  nord: 'nord-maroc',
  atlantique: 'cote-atlantique',
  excursions: 'excursions',
};

const LEGACY_FALLBACK_LABELS = {
  atlas: { fr: 'Atlas & Montagne', en: 'Atlas & Mountains', ar: 'الأطلس والجبال' },
};

export function getCategoryLabel(categoryId, lang = 'fr') {
  const resolvedId = LEGACY_TO_NEW[categoryId] || categoryId;
  const cat = CIRCUIT_CATEGORIES.find((c) => c.id === resolvedId);
  if (!cat) {
    const fallback = LEGACY_FALLBACK_LABELS[categoryId];
    if (fallback) return fallback[lang] || fallback.fr;
    return categoryId;
  }
  if (lang === 'en') return cat.labelEn;
  if (lang === 'ar') return cat.labelAr;
  return cat.labelFr;
}

export function getCategoryById(categoryId) {
  return CIRCUIT_CATEGORIES.find((c) => c.id === categoryId) || null;
}

export function getCategoryBySlug(slug) {
  return CIRCUIT_CATEGORIES.find((c) => c.slug === slug) || null;
}

/** Returns every new-taxonomy category id a circuit belongs to. */
export function getCircuitCategoryIds(circuit) {
  if (!circuit) return [];
  return CIRCUIT_CATEGORIES.filter((cat) => cat.match(circuit)).map((cat) => cat.id);
}

export function circuitMatchesCategory(circuit, categoryId) {
  const cat = getCategoryById(categoryId);
  return cat ? !!cat.match(circuit) : false;
}

export function getTagLabel(tagId) {
  const tag = CIRCUIT_TAGS.find((t) => t.id === tagId);
  return tag ? tag.labelFr : tagId;
}
