import React from 'react';
import { useCurrency } from '../context/CurrencyContext';

/**
 * Compact EUR / USD / DH toggle — matches circuit detail price block styling.
 */
const CurrencySwitcher = ({ className = '' }) => {
  const { currency, setCurrency, currencies } = useCurrency();

  return (
    <div
      className={`inline-flex items-center gap-1 border border-moroc-black/15 p-0.5 ${className}`}
      role="group"
      aria-label="Currency"
    >
      {currencies.map((c) => {
        const active = currency === c.code;
        return (
          <button
            key={c.code}
            type="button"
            onClick={() => setCurrency(c.code)}
            aria-pressed={active}
            title={c.name}
            className={`min-w-[2.25rem] px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors ${
              active
                ? 'bg-moroc-black text-white'
                : 'text-moroc-black/55 hover:text-moroc-gold'
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
};

export default CurrencySwitcher;
