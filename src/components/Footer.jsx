import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiFacebook, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_EMAIL } from '../utils/contact';
import { CIRCUIT_CATEGORIES } from '../circuits/categories';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language || 'fr').slice(0, 2);
  const year = new Date().getFullYear();

  const categoryLabel = (cat) => {
    if (lang === 'en') return cat.labelEn;
    if (lang === 'ar') return cat.labelAr;
    return cat.labelFr;
  };

  const quickLinks = [
    { labelKey: 'footer.links.allTours', to: '/tours' },
    { labelKey: 'footer.links.destinations', to: '/destinations' },
    { labelKey: 'footer.links.blog', to: '/blog' },
    { labelKey: 'footer.links.about', to: '/about' },
    { labelKey: 'footer.links.book', to: '/contact' },
  ];

  return (
    <footer className="relative bg-primary-900 text-white overflow-hidden">
      <div className="zellige-pattern absolute inset-0 opacity-[0.05] pointer-events-none" aria-hidden />
      {/* Newsletter */}
      <div className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,161,74,0.12),transparent_55%)]" aria-hidden />
        <div className="container-custom relative py-12 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-lg">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 tracking-tight">
                {t('footer.stayInspired')}
              </h3>
              <p className="text-primary-200 text-sm leading-relaxed">
                {t('footer.stayInspiredDesc')}
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="px-4 py-3.5 rounded-sm bg-white/[0.06] border border-white/15 text-white placeholder-white/45 focus:outline-none focus:border-moroc-gold/60 focus:ring-1 focus:ring-moroc-gold/30 flex-1 md:w-72 text-sm transition-all duration-300"
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-sm px-8">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex mb-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-moroc-gold/40 rounded-sm"
              aria-label="Sahara Visite — Explorez l’authenticité"
            >
              <BrandLogo size="footer" className="transition-opacity duration-500 group-hover:opacity-90" />
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              {t('footer.brandDesc')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FiFacebook size={18} />, href: '#', label: 'Facebook' },
                { icon: <FiInstagram size={18} />, href: '#', label: 'Instagram' },
                { icon: <FiYoutube size={18} />, href: '#', label: 'YouTube' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-sm bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/90 hover:bg-gold-500 hover:border-gold-500 hover:text-primary-900 hover:-translate-y-0.5 transition-all duration-300 ease-premium"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase text-xs tracking-[0.2em]">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map(({ labelKey, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-primary-200 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full group-hover:w-2 transition-all duration-300" />
                    {t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Circuit categories */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase text-xs tracking-[0.2em]">
              {t('footer.categories')}
            </h4>
            <ul className="space-y-3.5">
              {CIRCUIT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/categories/${cat.slug}`}
                    className="text-primary-200 hover:text-gold-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full group-hover:w-2 transition-all duration-300" />
                    {categoryLabel(cat)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold-400 mb-5 uppercase text-xs tracking-[0.2em]">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-primary-200">
                <FiMapPin className="text-gold-400 mt-0.5 flex-shrink-0" size={16} />
                <span>{t('footer.address')}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_PHONE_TEL}`}
                  className="flex items-center gap-3 text-sm text-primary-200 hover:text-gold-400 transition-colors duration-300"
                >
                  <FiPhone className="text-gold-400 flex-shrink-0" size={16} />
                  {SITE_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-center gap-3 text-sm text-primary-200 hover:text-gold-400 transition-colors duration-300"
                >
                  <FiMail className="text-gold-400 flex-shrink-0" size={16} />
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/[0.04] rounded-sm border border-white/10">
              <p className="text-xs text-gold-400 font-semibold mb-1.5 tracking-wide">{t('footer.officeHours')}</p>
              <p className="text-xs text-primary-200 leading-relaxed">{t('footer.weekdays')}</p>
              <p className="text-xs text-primary-200 leading-relaxed">{t('footer.sunday')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-300">
          <p>© {year} Sahara Visite. {t('footer.allRights')}</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-gold-400 transition-colors duration-300">
              {t('footer.privacy')}
            </Link>
            <Link to="/about" className="hover:text-gold-400 transition-colors duration-300">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
