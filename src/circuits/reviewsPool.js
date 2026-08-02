/**
 * Curated, reusable customer-review pool. Deterministically assigned per
 * circuit (by slug) so pages stay stable across renders while avoiding
 * hand-writing reviews for every single circuit.
 */

const NAMES = [
  { name: 'Claire M.', nationality: 'France' },
  { name: 'Thomas B.', nationality: 'Belgique' },
  { name: 'Sophie L.', nationality: 'Suisse' },
  { name: 'Marc D.', nationality: 'France' },
  { name: 'Isabelle R.', nationality: 'Québec' },
  { name: 'Julien P.', nationality: 'France' },
  { name: 'Emma W.', nationality: 'Royaume-Uni' },
  { name: 'Laura G.', nationality: 'Espagne' },
  { name: 'Ahmed K.', nationality: 'Maroc' },
  { name: 'Nadia S.', nationality: 'France' },
];

const COMMENT_TEMPLATES = [
  (h1) => `${h1} a dépassé nos attentes : chauffeur ponctuel, étapes bien choisies et guide passionné. Nous recommandons sans hésiter.`,
  (h1) => `Très belle organisation pour ${h1.toLowerCase()}. Rythme parfait, hébergements propres et confortables, service client réactif avant et pendant le séjour.`,
  (h1) => `Un souvenir marquant. ${h1} nous a permis de vraiment découvrir le Maroc authentique, loin des pièges à touristes.`,
  (h1) => `Rapport qualité-prix excellent pour ${h1.toLowerCase()}. Petit bémol sur un transfert un peu long, mais l'équipe a été très professionnelle.`,
  (h1) => `Nous avons adoré chaque étape de ${h1.toLowerCase()}. Le guide connaissait parfaitement l'histoire et les anecdotes locales.`,
  (h1) => `Voyage en famille très réussi grâce à ${h1.toLowerCase()} : rythme adapté aux enfants et équipe toujours à l'écoute.`,
];

const TITLE_TEMPLATES = [
  'Expérience inoubliable',
  'Organisation impeccable',
  'À refaire sans hésiter',
  'Guide exceptionnel',
  'Parfait pour découvrir le Maroc',
  'Très bon rapport qualité-prix',
];

function hashString(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * @param {{ slug: string, h1: string, category?: string }} meta
 * @param {number} count
 */
export function generateReviews(meta, count = 3) {
  const seed = hashString(meta.slug || meta.h1 || 'circuit');
  const reviews = [];
  for (let i = 0; i < count; i += 1) {
    const person = NAMES[(seed + i * 3) % NAMES.length];
    const comment = COMMENT_TEMPLATES[(seed + i * 5) % COMMENT_TEMPLATES.length](meta.h1 || meta.title || 'ce circuit');
    const title = TITLE_TEMPLATES[(seed + i * 7) % TITLE_TEMPLATES.length];
    const rating = [5, 5, 5, 4][((seed + i) % 4)];
    reviews.push({
      name: person.name,
      nationality: person.nationality,
      rating,
      title,
      comment,
      travelDate: new Date(2024, (seed + i * 2) % 12, 5).toISOString(),
    });
  }
  return reviews;
}
