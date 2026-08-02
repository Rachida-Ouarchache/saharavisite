/**
 * Circuit prices are stored in EUR. Convert + format for EUR / USD / MAD (DH).
 * Rates are indicative (same spirit as "prix indicatif").
 */

export const CURRENCIES = [
  { code: 'EUR', label: '€', name: 'Euro' },
  { code: 'USD', label: '$', name: 'Dollar' },
  { code: 'MAD', label: 'DH', name: 'Dirham' },
];

/** 1 EUR → target currency (approx.) */
const RATES_FROM_EUR = {
  EUR: 1,
  USD: 1.08,
  MAD: 10.8,
};

export const DEFAULT_CURRENCY = 'EUR';
export const CURRENCY_STORAGE_KEY = 'sahara-visite-currency';

export function convertFromEur(amountEur, currencyCode = 'EUR') {
  const rate = RATES_FROM_EUR[currencyCode] || 1;
  return Math.round(Number(amountEur || 0) * rate);
}

/**
 * Format a EUR-based amount into the selected currency.
 * EUR/USD: prefix symbol — MAD: suffix " DH"
 */
export function formatPrice(amountEur, currencyCode = 'EUR', { locale } = {}) {
  const value = convertFromEur(amountEur, currencyCode);
  const formatted = value.toLocaleString(locale || undefined);

  if (currencyCode === 'MAD') return `${formatted} DH`;
  if (currencyCode === 'USD') return `$${formatted}`;
  return `€${formatted}`;
}

export function getCurrencyMeta(code) {
  return CURRENCIES.find((c) => c.code === code) || CURRENCIES[0];
}
