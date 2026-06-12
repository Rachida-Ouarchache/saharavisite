import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../utils/contact';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isAdmin, logout } = useAuth();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { labelKey: 'nav.home', to: '/' },
    { labelKey: 'nav.tours', to: '/tours' },
    { labelKey: 'nav.destinations', to: '/destinations' },
    { labelKey: 'nav.blog', to: '/blog' },
    { labelKey: 'nav.about', to: '/about' },
    { labelKey: 'nav.contact', to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  useEffect(() => { setIsOpen(false); }, [location]);

  const showSolid = !isHome || scrolled || isOpen;

  const navBg = !showSolid
    ? 'bg-transparent border-b border-transparent shadow-none'
    : scrolled
      ? 'bg-gradient-to-r from-[#0B1D33]/95 via-[#132B45]/92 to-[#0B1D33]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(11,29,51,0.32)]'
      : 'bg-gradient-to-r from-[#0B1D33] via-[#132B45] to-[#0B1D33] border-b border-white/8 shadow-[0_8px_24px_rgba(11,29,51,0.18)]';

  const topBarBg = showSolid
    ? 'border-white/10 bg-[#0A1A2C]/70'
    : 'border-transparent bg-transparent';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium ${navBg}`}>
      {/* Top bar */}
      <div className={`hidden lg:block border-b transition-all duration-500 ease-premium ${topBarBg}`}>
        <div className="container-custom flex justify-between items-center py-2.5 text-xs text-[#D6E0EA]">
          <span className="tracking-wide">{t('nav.tagline')}</span>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="flex items-center gap-1.5 hover:text-moroc-gold transition-colors duration-300"
            >
              <FiPhone size={12} />
              {SITE_PHONE_DISPLAY}
            </a>
            <a href="mailto:info@royalsaharatours.ma" className="hover:text-moroc-gold transition-colors duration-300">
              info@royalsaharatours.ma
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-moroc-gold to-moroc-gold-hover flex items-center justify-center shadow-gold group-hover:scale-105 group-hover:shadow-gold-hover transition-all duration-500 ease-premium">
              <span className="text-primary-900 font-bold text-lg leading-none">T</span>
            </div>
            <div className="leading-tight">
              <span className="block text-moroc-white font-bold text-xl tracking-wide">Sahara Visite</span>
              <span className="block text-moroc-gold text-[10px] uppercase tracking-[0.2em] font-medium">Morocco</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ labelKey, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-300 ease-premium ${
                    isActive
                      ? 'text-moroc-gold bg-white/[0.08]'
                      : 'text-moroc-white/90 hover:text-moroc-white hover:bg-white/[0.06]'
                  }`
                }
              >
                {t(labelKey)}
              </NavLink>
            ))}
          </div>

          {/* CTA + Language + Admin */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            {isAdmin && (
              <Link
                to="/admin"
                className="text-sm text-moroc-gold hover:text-moroc-gold-hover font-medium transition-colors duration-300 px-2"
              >
                {t('nav.admin')}
              </Link>
            )}
            {user ? (
              <button
                onClick={logout}
                className="text-sm text-moroc-white/70 hover:text-moroc-white transition-colors duration-300 px-2"
              >
                {t('nav.logout')}
              </button>
            ) : null}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-11 px-5 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:text-moroc-black hover:-translate-y-0.5 hover:shadow-gold-hover"
            >
              {t('nav.bookTour')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-moroc-white p-2 hover:bg-white/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gradient-to-b from-[#0B1D33] to-[#132B45] border-t border-white/10 transition-all duration-500 ease-premium overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <div className="container-custom flex flex-col gap-1">
          {navLinks.map(({ labelKey, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-moroc-gold bg-white/[0.08]' : 'text-moroc-white/90 hover:text-moroc-white hover:bg-white/[0.06]'
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-3">
            <div className="px-4">
              <LanguageSwitcher />
            </div>
            <Link
              to="/contact"
              className="inline-flex w-full text-center justify-center items-center min-h-12 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:text-moroc-black hover:-translate-y-0.5 hover:shadow-gold-hover"
            >
              {t('nav.bookTour')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
