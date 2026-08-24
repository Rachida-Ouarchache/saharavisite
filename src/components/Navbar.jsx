import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import BrandLogo from './BrandLogo';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_EMAIL } from '../utils/contact';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { labelKey: 'nav.destinations', to: '/destinations' },
    { labelKey: 'nav.journeys', to: '/tours' },
    { labelKey: 'nav.experiences', to: '/#experiences', hash: true },
    { labelKey: 'nav.about', to: '/about' },
    { labelKey: 'nav.journal', to: '/blog' },
  ];

  useEffect(() => {
    const update = () => {
      // Keep home nav transparent until the hero is mostly scrolled past.
      setScrolled(window.scrollY > Math.min(120, window.innerHeight * 0.2));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
    setScrolled(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const overlayHome = isHome && !scrolled && !isOpen;

  const navBg = overlayHome
    ? 'bg-transparent border-b border-transparent shadow-none backdrop-blur-0'
    : 'bg-moroc-black/95 backdrop-blur-md border-b border-white/10 shadow-[0_8px_28px_rgba(26,23,20,0.28)]';

  const showSolid = !overlayHome;

  const linkClass = ({ isActive }) =>
    `px-3 xl:px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ease-premium focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/50 ${
      isActive ? 'text-moroc-gold' : 'text-moroc-white/90 hover:text-moroc-white'
    }`;

  const renderLink = ({ labelKey, to, hash }) => {
    if (hash) {
      if (isHome) {
        return (
          <a
            key={to}
            href="#experiences"
            className="px-3 xl:px-4 py-2 text-sm font-medium tracking-wide text-moroc-white/90 hover:text-moroc-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/50"
          >
            {t(labelKey)}
          </a>
        );
      }
      return (
        <Link
          key={to}
          to="/#experiences"
          className="px-3 xl:px-4 py-2 text-sm font-medium tracking-wide text-moroc-white/90 hover:text-moroc-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/50"
        >
          {t(labelKey)}
        </Link>
      );
    }
    return (
      <NavLink key={to} to={to} className={linkClass}>
        {t(labelKey)}
      </NavLink>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ease-premium ${navBg}`}
      style={overlayHome ? { backgroundColor: 'transparent', backgroundImage: 'none' } : undefined}
    >
      <div
        className={`hidden lg:block border-b transition-all duration-500 ${
          showSolid ? 'border-white/10 bg-moroc-black/40' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container-custom flex justify-between items-center py-2 text-xs text-white/70">
          <span className="tracking-wide">{t('nav.tagline')}</span>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="flex items-center gap-1.5 hover:text-moroc-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/40"
            >
              <FiPhone size={12} aria-hidden />
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="hover:text-moroc-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/40"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <nav
        className="container-custom pt-[max(0.35rem,env(safe-area-inset-top))]"
        aria-label={t('nav.mainAria')}
      >
        <div className="flex items-center justify-between min-h-14 md:min-h-[5.25rem] py-1">
          <Link
            to="/"
            className="flex items-center shrink-0 py-0.5 pr-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/50 rounded-sm"
            aria-label="Sahara Visite — Explorez l’authenticité"
          >
            <BrandLogo size="header" className="transition-opacity duration-500 group-hover:opacity-90" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">{navLinks.map(renderLink)}</div>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            {isAdmin && (
              <Link to="/admin" className="text-sm text-moroc-gold hover:text-moroc-gold-hover font-medium px-2">
                {t('nav.admin')}
              </Link>
            )}
            {user ? (
              <button
                type="button"
                onClick={logout}
                className="text-sm text-moroc-white/70 hover:text-moroc-white px-2"
              >
                {t('nav.logout')}
              </button>
            ) : null}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-11 px-5 py-2.5 text-sm font-semibold tracking-[0.1em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/40"
            >
              {t('cta.planJourney')}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-moroc-white p-2 min-h-11 min-w-11 hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/50"
            aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-premium ${
          isOpen
            ? 'max-h-[100dvh] py-4 bg-moroc-black border-t border-white/10'
            : 'max-h-0 py-0 border-0'
        }`}
      >
        <div className="container-custom flex flex-col gap-1 pb-6">
          {navLinks.map(({ labelKey, to, hash }) =>
            hash ? (
              <a
                key={to}
                href={isHome ? '#experiences' : undefined}
                onClick={(e) => {
                  if (!isHome) {
                    e.preventDefault();
                    window.location.href = '/#experiences';
                  }
                  setIsOpen(false);
                }}
                className="px-4 py-3.5 text-sm font-medium text-moroc-white/90 hover:text-moroc-white hover:bg-white/[0.06] min-h-12"
              >
                {t(labelKey)}
              </a>
            ) : (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-4 py-3.5 text-sm font-medium min-h-12 ${
                    isActive ? 'text-moroc-gold bg-white/[0.08]' : 'text-moroc-white/90 hover:bg-white/[0.06]'
                  }`
                }
              >
                {t(labelKey)}
              </NavLink>
            )
          )}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            <Link
              to="/contact"
              className="inline-flex w-full text-center justify-center items-center min-h-12 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold"
            >
              {t('cta.planJourney')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
