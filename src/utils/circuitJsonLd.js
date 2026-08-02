import { ORGANIZATION, SITE_NAME, SITE_URL } from './siteConfig';

export function buildOrganizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORGANIZATION.name,
    legalName: ORGANIZATION.legalName,
    url: ORGANIZATION.url,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION.logo,
      width: 192,
      height: 192,
    },
    email: ORGANIZATION.email,
    telephone: ORGANIZATION.telephone,
    sameAs: ORGANIZATION.sameAs,
  };
}

export function buildLocalBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: ORGANIZATION.logo,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    priceRange: '€€–€€€',
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.6345,
      longitude: -7.9991,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
  };
}

export function buildBreadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function buildFaqLd(faq = []) {
  if (!faq.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildTouristTripLd(circuit) {
  const url = `${SITE_URL}/circuits/${circuit.slug}`;
  const offer = {
    '@type': 'Offer',
    url,
    priceCurrency: 'EUR',
    price: String(circuit.fromPrice || 0),
    availability: 'https://schema.org/InStock',
    category: 'TouristTrip',
  };

  const destination = circuit.destinations?.[0]
    ? {
        '@type': 'TouristDestination',
        name: circuit.to || circuit.destinations[0].name,
        url: circuit.destinations[0].path
          ? `${SITE_URL}${circuit.destinations[0].path}`
          : undefined,
      }
    : {
        '@type': 'Place',
        name: circuit.to || 'Maroc',
      };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: circuit.h1 || circuit.title,
    description: circuit.metaDescription || circuit.shortDescription,
    url,
    image: [
      {
        '@type': 'ImageObject',
        url: circuit.image,
        caption: circuit.imageAlt || circuit.h1,
      },
    ],
    touristType: circuit.touristType || ['Travelers', 'Couples', 'Families'],
    itinerary: (circuit.itinerary || []).map((day) => ({
      '@type': 'TouristTrip',
      name: `Jour ${day.day} — ${day.title}`,
      description: day.text,
    })),
    offers: offer,
    provider: {
      '@type': 'TravelAgency',
      name: SITE_NAME,
      url: SITE_URL,
    },
    touristDestination: destination,
  };

  if (circuit.rating?.value && circuit.rating?.count) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: circuit.rating.value,
      reviewCount: circuit.rating.count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return schema;
}

export function buildCircuitSchemas(circuit, breadcrumbs) {
  return [
    buildOrganizationLd(),
    buildLocalBusinessLd(),
    buildBreadcrumbLd(breadcrumbs),
    buildTouristTripLd(circuit),
    buildFaqLd(circuit.faq),
  ].filter(Boolean);
}
