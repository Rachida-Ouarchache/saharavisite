/** Detects whether a cinematic WebGL scene should run. */

export function canUseWebGL() {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function isFinePointerDesktop() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: fine) and (hover: hover) and (min-width: 768px)').matches;
}

/**
 * Hero 3D only on capable desktops.
 * Mobile / save-data / low cores fall back to the premium photograph.
 */
export function shouldUseHeroScene() {
  if (typeof window === 'undefined') return false;
  if (prefersReducedMotion()) return false;
  if (!isFinePointerDesktop()) return false;
  if (!canUseWebGL()) return false;
  const saveData = navigator.connection?.saveData;
  if (saveData) return false;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  return cores >= 4 && memory >= 4;
}

export function shouldUseTilt() {
  return isFinePointerDesktop() && !prefersReducedMotion();
}

export function shouldUseLuxuryCursor() {
  return isFinePointerDesktop() && !prefersReducedMotion();
}
