import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteName = 'Sahara Visite';
  const defaultDesc = 'Sahara Visite – Premium Moroccan travel agency offering curated tours, desert adventures, and unforgettable journeys across Morocco.';
  const defaultImage = 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1200';
  const siteUrl = 'https://royalsaharatours.ma';

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} – Moroccan Journey Experts`;
  const metaDesc = description || defaultDesc;
  const metaImage = image || defaultImage;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
