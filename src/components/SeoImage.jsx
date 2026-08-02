import React from 'react';

/**
 * SEO-friendly image: alt, title, lazy, dimensions, srcset.
 * Does not alter layout — pass className as usual.
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
  if (!src) return null;

  const isCloudinary = src.includes('res.cloudinary.com');
  let srcSet;

  if (isCloudinary) {
    const base = src.replace(/\/upload\/[^/]+\//, '/upload/');
    const make = (w) => base.replace('/upload/', `/upload/w_${w},q_auto,f_auto/`);
    srcSet = `${make(480)} 480w, ${make(800)} 800w, ${make(1200)} 1200w, ${make(1600)} 1600w`;
  } else if (src.includes('images.unsplash.com')) {
    const clean = src.replace(/[?&]w=\d+/g, '').replace(/\?$/, '');
    const sep = clean.includes('?') ? '&' : '?';
    srcSet = `${clean}${sep}w=480&q=80 480w, ${clean}${sep}w=800&q=80 800w, ${clean}${sep}w=1200&q=80 1200w, ${clean}${sep}w=1600&q=80 1600w`;
  }

  return (
    <img
      src={src}
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
    />
  );
};

export default SeoImage;
