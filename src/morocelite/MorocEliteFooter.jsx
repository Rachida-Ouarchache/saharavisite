import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '../utils/contact';

const social = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
];

const MorocEliteFooter = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { labelKey: 'nav.home', to: '/' },
    { labelKey: 'nav.tours', to: '/tours' },
    { labelKey: 'nav.destinations', to: '/destinations' },
    { labelKey: 'nav.blog', to: '/blog' },
    { labelKey: 'nav.about', to: '/about' },
    { labelKey: 'nav.contact', to: '/contact' },
  ];

  return (
    <footer id="contact" className="bg-moroc-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <p className="font-serif text-2xl text-moroc-gold tracking-wide mb-4">Sahara Visite</p>
            <p className="font-moroc text-sm text-white/55 leading-relaxed max-w-xs">
              {t('eliteNav.brandDesc')}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-moroc-gold mb-6">{t('eliteNav.navigate')}</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ labelKey, to }) => (
                <li key={to}>
                  <NavLink to={to} end={to === '/'} className="font-moroc text-sm text-white/70 hover:text-moroc-gold transition-colors duration-500 ease-premium">
                    {t(labelKey)}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/contact" className="font-moroc text-sm text-white/70 hover:text-moroc-gold transition-colors duration-500 ease-premium">
                  {t('eliteNav.enquire')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-moroc-gold mb-6">{t('eliteNav.contact', { defaultValue: 'Contact' })}</h3>
            <ul className="font-moroc text-sm text-white/70 space-y-3">
              <li><a href="mailto:concierge@royalsaharatours.ma" className="hover:text-moroc-gold transition-colors">concierge@royalsaharatours.ma</a></li>
              <li><a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-moroc-gold transition-colors">{SITE_PHONE_DISPLAY}</a></li>
              <li className="text-white/50">{t('eliteNav.location')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-moroc-gold mb-6">{t('eliteNav.follow')}</h3>
            <div className="flex gap-4">
              {social.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 text-white/80 hover:border-moroc-gold hover:text-moroc-gold hover:-translate-y-0.5 transition-all duration-500 ease-premium" aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-moroc text-xs text-white/40">© {new Date().getFullYear()} Sahara Visite. {t('eliteNav.allRights')}</p>
          <p className="font-moroc text-xs text-white/40">{t('eliteNav.designed')}</p>
        </div>
      </div>
    </footer>
  );
};

export default MorocEliteFooter;
