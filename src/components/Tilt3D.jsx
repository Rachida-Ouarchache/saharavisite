import React, { useCallback, useRef } from 'react';
import { shouldUseTilt } from '../utils/luxuryMedia';

/**
 * Subtle CSS 3D tilt on desktop. Decorative — content remains in HTML.
 */
const Tilt3D = ({ children, className = '', max = 5.5 }) => {
  const ref = useRef(null);
  const enabled = typeof window !== 'undefined' && shouldUseTilt();

  const onMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return;
      const box = ref.current.getBoundingClientRect();
      const x = (e.clientX - box.left) / box.width - 0.5;
      const y = (e.clientY - box.top) / box.height - 0.5;
      ref.current.style.transform = `perspective(1100px) rotateY(${x * max * 2}deg) rotateX(${-y * max}deg) translateZ(10px)`;
    },
    [enabled, max]
  );

  const onLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0)';
  }, []);

  return (
    <div
      ref={ref}
      className={`tilt-3d ${className}`.trim()}
      onMouseMove={enabled ? onMove : undefined}
      onMouseLeave={enabled ? onLeave : undefined}
    >
      {children}
    </div>
  );
};

export default Tilt3D;
