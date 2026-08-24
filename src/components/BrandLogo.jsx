import React from 'react';

const LOGO_SRC = '/logo-sahara-visite.png?v=6';

/**
 * Sahara Visite brand mark (provided artwork).
 * @param {'header'|'footer'|'admin'|'mark'} size
 */
const BrandLogo = ({ size = 'header', className = '', alt = 'Sahara Visite — Explorez l’authenticité' }) => {
  const sizes = {
    header: 'h-12 sm:h-14 md:h-[4.25rem] w-auto max-w-[10.5rem] sm:max-w-[13rem] md:max-w-[17rem]',
    footer: 'h-20 md:h-24 w-auto max-w-[15rem] md:max-w-[17rem]',
    admin: 'h-24 w-auto max-w-[16rem]',
    mark: 'h-12 w-12 object-cover object-top',
  };

  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={612}
      height={408}
      decoding="async"
      className={`object-contain ${sizes[size] || sizes.header} ${className}`}
    />
  );
};

export default BrandLogo;
