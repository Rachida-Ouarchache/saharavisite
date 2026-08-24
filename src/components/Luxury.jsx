import React, { useEffect, useRef, useState } from 'react';
import { shouldUseLuxuryCursor } from '../utils/luxuryMedia';

const Luxury = () => {
  const dot = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!shouldUseLuxuryCursor()) return undefined;
    setOn(true);
    document.documentElement.classList.add('luxury-cursor');

    const pos = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let hovering = false;
    let raf = 0;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const t = e.target;
      hovering = !!(t && t.closest && t.closest('a, button, [data-cursor]'));
    };

    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      if (dot.current) {
        const s = hovering ? 1.55 : 1;
        dot.current.style.transform = `translate(${cur.x}px, ${cur.y}px) scale(${s})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('luxury-cursor');
    };
  }, []);

  if (!on) return null;

  return <div ref={dot} className="luxury-cursor-dot" aria-hidden />;
};

export default Luxury;
