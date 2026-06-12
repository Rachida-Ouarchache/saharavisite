import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import ar from './locales/ar/translation.json';
import enCircuits from './locales/en/circuits.json';
import frCircuits from './locales/fr/circuits.json';
import arCircuits from './locales/ar/circuits.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { ...en, circuits: enCircuits } },
      fr: { translation: { ...fr, circuits: frCircuits } },
      ar: { translation: { ...ar, circuits: arCircuits } },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'ar'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
