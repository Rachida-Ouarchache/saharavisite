import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiChevronDown } from 'react-icons/fi';

const FlagEn = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 60 40" className={`${className} rounded-[2px] shrink-0 shadow-sm`} aria-hidden>
    <rect width="60" height="40" fill="#012169" />
    <path d="M0 0 L60 40 M60 0 L0 40" stroke="#fff" strokeWidth="8" />
    <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="5" />
    <path d="M30 0 V40 M0 20 H60" stroke="#fff" strokeWidth="13" />
    <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="8" />
  </svg>
);

const FlagFr = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 3 2" className={`${className} rounded-[2px] shrink-0 shadow-sm`} aria-hidden>
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
);

const FlagMa = ({ className = 'w-4 h-3' }) => (
  <svg viewBox="0 0 900 600" className={`${className} rounded-[2px] shrink-0 shadow-sm`} aria-hidden>
    <rect width="900" height="600" fill="#C1272D" />
    <polygon
      fill="none"
      stroke="#006233"
      strokeWidth="28"
      strokeLinejoin="miter"
      points="450,170 511,358 351,242 549,242 389,358"
    />
  </svg>
);

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', Flag: FlagEn },
  { code: 'fr', label: 'Français', short: 'FR', Flag: FlagFr },
  { code: 'ar', label: 'العربية', short: 'ع', Flag: FlagMa },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const langCode = (i18n.language || 'fr').slice(0, 2);
  const current = LANGUAGES.find((l) => l.code === langCode) || LANGUAGES[1];
  const CurrentFlag = current.Flag;

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
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-moroc-white/80 hover:text-moroc-white hover:bg-white/[0.06] transition-all duration-300 ease-premium"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <CurrentFlag className="w-[18px] h-[12px]" />
        <span className="tracking-wide">{current.short}</span>
        <FiChevronDown
          size={12}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-moroc-black border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.4)] z-50 overflow-hidden">
          {LANGUAGES.map(({ code, label, Flag }) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-200 ${
                code === current.code
                  ? 'text-moroc-gold bg-white/[0.08]'
                  : 'text-moroc-white/80 hover:text-moroc-white hover:bg-white/[0.05]'
              }`}
            >
              <Flag className="w-[18px] h-[12px]" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
