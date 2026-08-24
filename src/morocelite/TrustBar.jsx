import React from 'react';
import { useTranslation } from 'react-i18next';

const KEYS = ['private', 'experts', 'tailor', 'assist'];

const TrustBar = () => {
  const { t } = useTranslation();

  return (
    <section
      aria-label={t('home.trustBar.aria')}
      className="relative z-[2] -mt-px border-y border-white/10 bg-[#0B0B0A]"
    >
      <div className="zellige-pattern absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden />
      <ul className="relative container-custom grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 md:py-10">
        {KEYS.map((key) => (
          <li key={key} className="text-center">
            <p className="font-serif text-sm md:text-base text-[#E8D8BD] tracking-wide">
              {t(`home.trustBar.items.${key}`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrustBar;
