import React from 'react';
import { createPortal } from 'react-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppHref } from '../utils/whatsapp';

/**
 * Bouton WhatsApp fixe sur toutes les routes (portail → body, z-index élevé).
 */
const FloatingWhatsApp = () => {
  const href = getWhatsAppHref();

  if (!href) {
    return null;
  }

  const node = (
    <div
      className="pointer-events-none fixed bottom-5 right-5 z-[9999] md:bottom-8 md:right-8"
      role="presentation"
    >
      <div className="pointer-events-auto relative flex h-16 w-16 items-center justify-center">
        <span
          className="pointer-events-none absolute h-[4.5rem] w-[4.5rem] translate-x-1 translate-y-1 rounded-full bg-[#25D366]/40 blur-md"
          aria-hidden
        />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)] ring-2 ring-white/30 transition-transform duration-200 hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          aria-label="Contacter sur WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8" aria-hidden />
        </a>
      </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default FloatingWhatsApp;
