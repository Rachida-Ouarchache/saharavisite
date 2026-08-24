import React, { useState } from 'react';
import { cloudinarySrcSet, cloudinaryUrl, isCloudinaryUrl, unsplashSrcSet } from '../utils/cloudinary';

const FALLBACK_SRC =
  'https://res.cloudinary.com/dc3uvcobc/image/upload/f_auto,q_auto,w_1200/v1775053542/pixelraw-desert-4944794_1920_csvuni.jpg';

/**
 * SEO-friendly image: alt, title, lazy, dimensions, srcset.
 * Cloudinary: f_auto, q_auto, responsive widths.
 * Broken sources fall back silently (no browser broken-image / alt dump).
 */
const SeoImage = ({
  src,
  alt,
  title,
  width = 1400,
  height = 900,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  sizes = '(max-width: 768px) 100vw, 1200px',
  fetchPriority,
}) => {
  const [failed, setFailed] = useState(false);

  if (!src && !failed) return null;

  const rawSrc = failed ? FALLBACK_SRC : src || FALLBACK_SRC;
  let displaySrc = rawSrc;
  let srcSet;

  if (!failed && isCloudinaryUrl(rawSrc)) {
    displaySrc = cloudinaryUrl(rawSrc, { width: Math.min(Number(width) || 1400, 1600) });
    srcSet = cloudinarySrcSet(rawSrc);
  } else if (!failed && rawSrc.includes('images.unsplash.com')) {
    srcSet = unsplashSrcSet(rawSrc);
  } else if (failed && isCloudinaryUrl(FALLBACK_SRC)) {
    displaySrc = cloudinaryUrl(FALLBACK_SRC, { width: Math.min(Number(width) || 1400, 1600) });
  }

  return (
    <img
      src={displaySrc}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt || ''}
      title={title || alt || undefined}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={className}
      onError={() => {
        if (!failed) setFailed(true);
      }}
    />
  );
};

export default SeoImage;
