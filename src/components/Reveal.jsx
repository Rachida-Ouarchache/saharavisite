import React, { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered fade-in + slight rise. Respects prefers-reduced-motion.
 */
const Reveal = ({ children, className = '', delayMs = 0 }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (shown) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'reveal-visible' : ''} ${className}`.trim()}
      style={delayMs && shown ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
