import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_DEFAULT_IMAGE, SITE_NAME, SITE_URL } from '../utils/siteConfig';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  jsonLd,
  noSuffix = false,
}) => {
  const defaultDesc =
    'Sahara Visite – agence de voyage Maroc : circuits désert, villes impériales, Atlas et côte Atlantique. Morocco Tours, Private Morocco Tour & Luxury Morocco Tour.';
  const fullTitle = title
    ? noSuffix
      ? title
      : `${title} | ${SITE_NAME}`
    : `${SITE_NAME} – Moroccan Journey Experts`;
  const metaDesc = description || defaultDesc;
  const metaImage = image || SITE_DEFAULT_IMAGE;
  const metaUrl = url ? (url.startsWith('http') ? url : `${SITE_URL}${url}`) : SITE_URL;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc.length > 160 ? `${metaDesc.slice(0, 157)}...` : metaDesc} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={metaUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="ar_MA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
