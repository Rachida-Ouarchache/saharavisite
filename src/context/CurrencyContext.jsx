import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  CURRENCIES,
  CURRENCY_STORAGE_KEY,
  DEFAULT_CURRENCY,
  convertFromEur,
  formatPrice,
} from '../utils/currency';

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState(() => {
    try {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (CURRENCIES.some((c) => c.code === saved)) return saved;
    } catch {
      /* ignore */
    }
    return DEFAULT_CURRENCY;
  });

  useEffect(() => {
    try {
      localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    } catch {
      /* ignore */
    }
  }, [currency]);

  const setCurrency = (code) => {
    if (CURRENCIES.some((c) => c.code === code)) setCurrencyState(code);
  };

  const value = useMemo(
    () => ({
      currency,
      setCurrency,
      currencies: CURRENCIES,
      format: (amountEur, opts) => formatPrice(amountEur, currency, opts),
      convert: (amountEur) => convertFromEur(amountEur, currency),
    }),
    [currency]
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return ctx;
}
