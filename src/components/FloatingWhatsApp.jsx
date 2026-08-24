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
      className="pointer-events-none fixed bottom-24 right-4 z-[9999] md:bottom-7 md:right-7"
      role="presentation"
    >
      <div className="pointer-events-auto flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)] transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          aria-label="Contact Sahara Visite on WhatsApp"
          title="WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
        </a>
      </div>
    </div>
  );

  return createPortal(node, document.body);
};

export default FloatingWhatsApp;
