import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import LanguageSwitcher from '../components/LanguageSwitcher';

const MorocEliteNavbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { labelKey: 'nav.home', to: '/' },
    { labelKey: 'nav.tours', to: '/tours' },
    { labelKey: 'nav.destinations', to: '/destinations' },
    { labelKey: 'nav.blog', to: '/blog' },
    { labelKey: 'nav.about', to: '/about' },
    { labelKey: 'nav.contact', to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-[#0B1D33]/92 via-[#132B45]/90 to-[#0B1D33]/99 backdrop-blur-xl shadow-[0_10px_30px_rgba(11,29,51,0.32)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="font-serif text-xl md:text-2xl tracking-wide text-moroc-gold hover:text-moroc-gold-hover transition-colors duration-500 ease-premium" onClick={closeMenu}>
            Sahara Visite
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ labelKey, to }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={({ isActive }) => `text-sm font-medium transition-colors duration-500 ease-premium tracking-wide ${isActive ? 'text-moroc-gold' : 'text-white/90 hover:text-moroc-gold'}`}>
                  {t(labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link to="/contact" className="inline-flex items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:text-moroc-black hover:-translate-y-0.5 hover:shadow-gold-hover focus:outline-none focus:ring-2 focus:ring-moroc-gold/40 focus:ring-offset-2 focus:ring-offset-moroc-black">
              {t('eliteNav.bookNow')}
            </Link>
          </div>

          <button type="button" className="lg:hidden p-2 text-moroc-gold hover:text-moroc-white transition-colors duration-300" aria-expanded={open} aria-label={open ? t('eliteNav.closeMenu', { defaultValue: 'Close menu' }) : t('eliteNav.openMenu', { defaultValue: 'Open menu' })} onClick={() => setOpen((v) => !v)}>
            {open ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 top-16 md:top-20 bg-moroc-black/98 backdrop-blur-lg transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <ul className="flex flex-col px-6 py-10 gap-6">
          {navLinks.map(({ labelKey, to }) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} className={({ isActive }) => `text-lg font-medium transition-colors border-b border-white/10 pb-4 block ${isActive ? 'text-moroc-gold' : 'text-white/95 hover:text-moroc-gold'}`} onClick={closeMenu}>
                {t(labelKey)}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <LanguageSwitcher />
          </li>
          <li className="pt-2">
            <Link to="/contact" className="inline-flex w-full items-center justify-center min-h-12 px-6 py-3.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold rounded-[14px] shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover" onClick={closeMenu}>
              {t('eliteNav.bookNow')}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MorocEliteNavbar;
