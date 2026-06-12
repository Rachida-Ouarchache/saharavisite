import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe, FiChevronDown } from 'react-icons/fi';

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', short: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', short: 'ع', flag: '🇲🇦' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-moroc-white/80 hover:text-moroc-white hover:bg-white/[0.06] transition-all duration-300 ease-premium"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <FiGlobe size={14} className="text-moroc-gold" />
        <span className="tracking-wide">{current.short}</span>
        <FiChevronDown
          size={12}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 bg-[#0B1D33] border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)] z-50 overflow-hidden">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-200 ${
                lang.code === current.code
                  ? 'text-moroc-gold bg-white/[0.08]'
                  : 'text-moroc-white/80 hover:text-moroc-white hover:bg-white/[0.05]'
              }`}
            >
              <span className="text-base leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
