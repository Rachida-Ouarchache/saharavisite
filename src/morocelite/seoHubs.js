/** SEO hub pages — only routes with real, useful content linked to existing circuits. */

export const SEO_HUBS = [
  {
    slug: 'luxury-morocco-tours',
    title: 'Luxury Morocco Tours & Private Journeys',
    metaTitle: 'Luxury Morocco Tours | Private Sahara Journeys | Sahara Visite',
    description:
      'Luxury Morocco tours with private guides, boutique riads and Sahara desert camps. Tailor-made itineraries from Marrakech, Fes and Casablanca.',
    h1: 'Luxury Morocco Tours',
    intro:
      'Sahara Visite designs private luxury journeys across Morocco — imperial cities, Atlas valleys and the Sahara — with exceptional stays and local experts.',
    circuits: [
      'casablanca-rabat-meknes-fes-marrakech',
      'marrakech-merzouga-4-jours',
      'circuit-essaouira',
    ],
    related: [
      { to: '/tours', label: 'All journeys' },
      { to: '/destinations', label: 'Destinations' },
      { to: '/contact', label: 'Plan Your Journey' },
    ],
  },
  {
    slug: 'private-morocco-tours',
    title: 'Private Morocco Tours',
    metaTitle: 'Private Morocco Tours | Tailor-Made Itineraries | Sahara Visite',
    description:
      'Travel Morocco privately with a dedicated driver-guide. Flexible private Morocco tours through Marrakech, Fes, Chefchaouen and the Sahara.',
    h1: 'Private Morocco Tours',
    intro:
      'Every Sahara Visite journey is private by design. You set the pace; our local team handles logistics, stays and experiences.',
    circuits: [
      'marrakech-fes',
      'circuit-chefchaouen',
      'marrakech-merzouga-3-jours',
    ],
    related: [
      { to: '/tours', label: 'Explore Journeys' },
      { to: '/about', label: 'About Sahara Visite' },
      { to: '/contact', label: 'Talk to a Morocco Expert' },
    ],
  },
  {
    slug: 'morocco-desert-tours',
    title: 'Morocco Desert Tours',
    metaTitle: 'Morocco Desert Tours | Merzouga & Erg Chebbi | Sahara Visite',
    description:
      'Morocco desert tours from Marrakech, Fes and Casablanca. Merzouga dunes, camel treks and nights in Sahara camps.',
    h1: 'Morocco Desert Tours',
    intro:
      'Cross the High Atlas, follow the Route of a Thousand Kasbahs and spend the night among the dunes of Erg Chebbi or Erg Chigaga.',
    circuits: [
      'marrakech-merzouga-3-jours',
      'marrakech-merzouga-4-jours',
      'fes-merzouga',
      'marrakech-erg-chigaga',
    ],
    related: [
      { to: '/destinations/merzouga-sahara', label: 'Merzouga & Sahara' },
      { to: '/circuits/marrakech-merzouga-3-jours', label: 'Marrakech–Sahara 3 days' },
      { to: '/contact', label: 'Plan Your Journey' },
    ],
  },
  {
    slug: 'sahara-desert-tours',
    title: 'Sahara Desert Tours from Morocco',
    metaTitle: 'Sahara Desert Tours | Luxury Camps & Camel Treks | Sahara Visite',
    description:
      'Sahara desert tours with camel treks, luxury bivouacs and private 4x4. Depart from Marrakech, Fes or Casablanca.',
    h1: 'Sahara Desert Tours',
    intro:
      'The Sahara is the soul of a Morocco journey. We time arrivals for sunset, choose camps for atmosphere, and keep the experience private.',
    circuits: [
      'marrakech-merzouga-3-jours',
      'casablanca-merzouga',
      'fes-merzouga',
    ],
    related: [
      { to: '/morocco-desert-tours', label: 'Morocco desert tours' },
      { to: '/blog/camel-trekking-sahara-what-to-expect', label: 'Camel trekking guide' },
      { to: '/contact', label: 'Design My Trip' },
    ],
  },
  {
    slug: 'marrakech-tours',
    title: 'Marrakech Tours & Day Trips',
    metaTitle: 'Marrakech Tours | Atlas, Essaouira & Sahara | Sahara Visite',
    description:
      'Private Marrakech tours, Atlas day trips, Essaouira and Sahara extensions. Start your Morocco journey in Marrakech with local experts.',
    h1: 'Marrakech Tours',
    intro:
      'Marrakech is the natural gateway. From the medina to the Atlas, Aït Ben Haddou, Essaouira and the Sahara — we build private itineraries around your stay.',
    circuits: [
      'excursion-ourika-journee',
      'excursion-ouzoud',
      'excursion-ait-ben-haddou',
      'excursion-essaouira',
      'marrakech-merzouga-3-jours',
    ],
    related: [
      { to: '/destinations/marrakech', label: 'Marrakech destination' },
      { to: '/blog/ultimate-guide-visiting-marrakech-2025', label: 'Marrakech travel guide' },
      { to: '/contact', label: 'Plan Your Journey' },
    ],
  },
  {
    slug: 'marrakech-sahara-tour',
    title: 'Marrakech to Sahara Tour',
    metaTitle: 'Marrakech Sahara Tour | 3 & 4 Day Desert Journeys | Sahara Visite',
    description:
      'Marrakech to Sahara tours in 3 or 4 days: Tizi n’Tichka, Aït Ben Haddou, Dades and Merzouga dunes with private transport.',
    h1: 'Marrakech to Sahara Tour',
    intro:
      'The classic Marrakech–Sahara route: High Atlas, kasbahs, gorges and Erg Chebbi. Choose 3 days for a focused desert weekend or 4 days for a deeper southern Morocco journey.',
    circuits: ['marrakech-merzouga-3-jours', 'marrakech-merzouga-4-jours'],
    related: [
      { to: '/circuits/marrakech-merzouga-3-jours', label: '3-day Marrakech–Merzouga' },
      { to: '/circuits/marrakech-merzouga-4-jours', label: '4-day Marrakech–Merzouga' },
      { to: '/sahara-desert-tours', label: 'All Sahara tours' },
    ],
  },
];

export function getSeoHub(slug) {
  return SEO_HUBS.find((h) => h.slug === slug);
}
