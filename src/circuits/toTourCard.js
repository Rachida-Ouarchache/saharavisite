/** Maps an enriched circuit object to the props expected by <TourCard />. */
export function circuitToTourCard(circuit) {
  return {
    title: circuit.title,
    slug: circuit.slug,
    href: `/circuits/${circuit.slug}`,
    shortDescription: circuit.shortDescription,
    price: circuit.fromPrice,
    durationLabel: circuit.duration,
    groupSize: 6,
    rating: circuit.rating?.value || 4.8,
    ratingsCount: circuit.rating?.count || 24,
    region: `${circuit.from} → ${circuit.to}`,
    coverImage: circuit.image,
    difficulty: circuit.difficulty || (circuit.category === 'atlas' ? 'Modéré' : 'Facile'),
    category: circuit.categoryLabel,
    featured: !!circuit.featured,
    badge: circuit.badge,
    availability: circuit.availability,
    fromLocation: circuit.from,
    toLocation: circuit.to,
  };
}

export default circuitToTourCard;
