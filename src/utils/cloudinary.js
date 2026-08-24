/**
 * Cloudinary responsive helpers — f_auto, q_auto, width + DPR.
 */

export function isCloudinaryUrl(src = '') {
  return typeof src === 'string' && src.includes('res.cloudinary.com');
}

/** Normalize to /upload/ then inject transforms. */
export function cloudinaryUrl(src, { width, height, crop = 'fill', quality = 'auto', format = 'auto' } = {}) {
  if (!src || !isCloudinaryUrl(src)) return src;
  const base = src.replace(/\/upload\/(?:[^/]+\/)?/, '/upload/');
  const parts = [`f_${format}`, `q_${quality}`];
  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (width || height) parts.push(`c_${crop}`);
  parts.push('dpr_auto');
  return base.replace('/upload/', `/upload/${parts.join(',')}/`);
}

export function cloudinarySrcSet(src, widths = [480, 800, 1200, 1600, 2000]) {
  if (!src || !isCloudinaryUrl(src)) return undefined;
  return widths.map((w) => `${cloudinaryUrl(src, { width: w })} ${w}w`).join(', ');
}

export function unsplashSrcSet(src, widths = [480, 800, 1200, 1600]) {
  if (!src || !src.includes('images.unsplash.com')) return undefined;
  const clean = src.replace(/[?&]w=\d+/g, '').replace(/[?&]q=\d+/g, '').replace(/\?$/, '');
  const sep = clean.includes('?') ? '&' : '?';
  return widths.map((w) => `${clean}${sep}w=${w}&q=80&auto=format ${w}w`).join(', ');
}
