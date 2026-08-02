/**
 * Lightweight geographic reference for Moroccan cities & sites.
 * Used to auto-generate map embeds and geo entities for SEO / AI-search
 * (Google AI Overview, ChatGPT, Perplexity, etc.) without any external API key.
 */

export const MOROCCO_CITIES = {
  Marrakech: { lat: 31.6295, lng: -7.9811, region: 'Maroc central' },
  Casablanca: { lat: 33.5731, lng: -7.5898, region: 'Côte Atlantique' },
  Rabat: { lat: 34.0209, lng: -6.8417, region: 'Côte Atlantique' },
  Fès: { lat: 34.0331, lng: -5.0003, region: 'Maroc du Nord-Est' },
  Meknès: { lat: 33.8935, lng: -5.5473, region: 'Maroc du Nord-Est' },
  Tanger: { lat: 35.7595, lng: -5.834, region: 'Nord du Maroc' },
  Tétouan: { lat: 35.5785, lng: -5.3684, region: 'Nord du Maroc' },
  Chefchaouen: { lat: 35.1688, lng: -5.2636, region: 'Nord du Maroc' },
  Asilah: { lat: 35.4667, lng: -6.0333, region: 'Nord du Maroc' },
  Akchour: { lat: 35.2865, lng: -5.1667, region: 'Nord du Maroc' },
  Larache: { lat: 35.1933, lng: -6.1561, region: 'Nord du Maroc' },
  Martil: { lat: 35.6167, lng: -5.2833, region: 'Nord du Maroc' },
  Merzouga: { lat: 31.0993, lng: -4.0128, region: 'Désert du Sahara' },
  'Erg Chigaga': { lat: 30.0, lng: -6.316, region: 'Désert du Sahara' },
  "M'Hamid": { lat: 29.8281, lng: -5.7239, region: 'Désert du Sahara' },
  Zagora: { lat: 30.3315, lng: -5.8378, region: 'Vallée du Draa' },
  Ouarzazate: { lat: 30.9189, lng: -6.8934, region: 'Porte du désert' },
  'Aït Ben Haddou': { lat: 31.0472, lng: -7.1319, region: 'Porte du désert' },
  Todra: { lat: 31.5833, lng: -5.5833, region: 'Vallée du Todra' },
  Dadès: { lat: 31.4972, lng: -5.9895, region: 'Vallée du Dadès' },
  Essaouira: { lat: 31.5085, lng: -9.7595, region: 'Côte Atlantique' },
  Agadir: { lat: 30.4278, lng: -9.5981, region: 'Côte Atlantique' },
  'El Jadida': { lat: 33.2549, lng: -8.5061, region: 'Côte Atlantique' },
  Oualidia: { lat: 32.7333, lng: -9.05, region: 'Côte Atlantique' },
  'Sidi Ifni': { lat: 29.3797, lng: -10.1728, region: 'Côte Atlantique' },
  Mirleft: { lat: 29.5833, lng: -10.05, region: 'Côte Atlantique' },
  Imlil: { lat: 31.1364, lng: -7.9169, region: 'Haut Atlas' },
  Oukaïmeden: { lat: 31.2, lng: -7.85, region: 'Haut Atlas' },
  Toubkal: { lat: 31.0595, lng: -7.9151, region: 'Haut Atlas' },
  Ourika: { lat: 31.3833, lng: -7.7667, region: 'Haut Atlas' },
  Ouzoud: { lat: 32.0056, lng: -6.7222, region: 'Moyen Atlas' },
  Ifrane: { lat: 33.5333, lng: -5.1167, region: 'Moyen Atlas' },
  Volubilis: { lat: 34.0742, lng: -5.5548, region: 'Maroc du Nord-Est' },
  'Moulay Idriss': { lat: 34.0553, lng: -5.5142, region: 'Maroc du Nord-Est' },
  'Paradise Valley': { lat: 30.1167, lng: -9.5167, region: 'Anti-Atlas' },
};

export function getCityCoords(name) {
  if (!name) return null;
  const key = Object.keys(MOROCCO_CITIES).find(
    (c) => c.toLowerCase() === String(name).toLowerCase()
  );
  return key ? MOROCCO_CITIES[key] : null;
}

/**
 * Builds a key-free Google Maps directions embed URL between two named places.
 * Falls back to a simple point map when only one place is known.
 */
export function buildRouteMapEmbedUrl(from, to) {
  const fromQ = encodeURIComponent(`${from}, Maroc`);
  const toQ = encodeURIComponent(`${to || from}, Maroc`);
  if (from && to && from !== to) {
    return `https://maps.google.com/maps?saddr=${fromQ}&daddr=${toQ}&output=embed`;
  }
  const coords = getCityCoords(from) || getCityCoords(to);
  if (coords) {
    return `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&z=8&output=embed`;
  }
  return `https://maps.google.com/maps?q=${fromQ}&z=7&output=embed`;
}

/**
 * Returns the geographic region label(s) covered by a list of place names —
 * useful as structured "geo entities" for AI-search optimization.
 */
export function getGeoEntities(places = []) {
  const regions = new Set();
  const cities = [];
  places.forEach((p) => {
    const info = getCityCoords(p);
    if (info) {
      regions.add(info.region);
      cities.push(p);
    }
  });
  return { regions: [...regions], cities };
}
