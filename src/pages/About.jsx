import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiCheck, FiAward, FiHeart, FiStar } from 'react-icons/fi';
import SEO from '../components/SEO';

const team = [
  { name: 'Youssef El Mansouri', memberKey: 'member1', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
  { name: 'Aicha Benali', memberKey: 'member2', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' },
  { name: 'Mohammed Zaki', memberKey: 'member3', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' },
  { name: 'Leila Tahiri', memberKey: 'member4', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' },
];

const About = () => {
  const { t } = useTranslation();

  const values = [
    { icon: <FiHeart className="text-gold-500" size={22} />, titleKey: 'about.values.authentic.title', descKey: 'about.values.authentic.desc' },
    { icon: <FiAward className="text-gold-500" size={22} />, titleKey: 'about.values.quality.title', descKey: 'about.values.quality.desc' },
    { icon: <FiCheck className="text-gold-500" size={22} />, titleKey: 'about.values.responsible.title', descKey: 'about.values.responsible.desc' },
    { icon: <FiStar className="text-gold-500" size={22} />, titleKey: 'about.values.personalized.title', descKey: 'about.values.personalized.desc' },
  ];

  const stats = [
    { value: '15+', labelKey: 'about.stats.years' },
    { value: '8,000+', labelKey: 'about.stats.travellers' },
    { value: '50+', labelKey: 'about.stats.destinations' },
    { value: '4.9/5', labelKey: 'about.stats.rating' },
  ];

  return (
    <>
      <SEO
        title="About Sahara Visite – Moroccan Travel Experts"
        description="Learn about Sahara Visite, Morocco's premium travel agency. Meet our team of passionate local guides and discover our story."
        url="/about"
      />

      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920" alt="Moroccan Riad" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('about.hero.label')}</p>
          <h1 className="section-title text-white text-4xl md:text-5xl">{t('about.hero.title')}</h1>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle mb-3">{t('about.story.label')}</p>
              <h2 className="section-title mb-6">{t('about.story.title')}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  {t('about.story.cta')} <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1539020140153-e479b8b5b3f7?w=700" alt="Marrakech medina" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-5 -right-5 bg-primary-700 text-white rounded-2xl p-5 shadow-xl hidden md:block">
                <div className="text-3xl font-bold text-gold-400">2010</div>
                <div className="text-sm text-primary-200">{t('about.story.founded')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">{t('about.values.label')}</p>
            <h2 className="section-title">{t('about.values.title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center group">
                <div className="w-14 h-14 rounded-xl bg-sand-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-50 transition-colors">
                  {icon}
                </div>
                <h3 className="font-semibold text-primary-700 mb-2">{t(titleKey)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-3">{t('about.team.label')}</p>
            <h2 className="section-title">{t('about.team.title')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, memberKey, image }) => (
              <div key={name} className="text-center group">
                <div className="relative mb-4 mx-auto w-36 h-36 rounded-full overflow-hidden shadow-card group-hover:shadow-card-hover transition-all">
                  <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-primary-700 mb-1">{name}</h3>
                <p className="text-gold-500 text-sm font-medium mb-2">{t(`about.team.${memberKey}.role`)}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t(`about.team.${memberKey}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-700 py-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map(({ value, labelKey }) => (
              <div key={labelKey}>
                <div className="text-4xl font-bold text-gold-400 mb-1">{value}</div>
                <div className="text-primary-200 text-sm">{t(labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
