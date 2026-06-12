import React, { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiCalendar, FiCheck, FiClock, FiCompass, FiMapPin, FiUser } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import MorocEliteNavbar from '../morocelite/MorocEliteNavbar';
import MorocEliteFooter from '../morocelite/MorocEliteFooter';
import { useLocalizedExperience } from '../morocelite/useLocalizedExperiences';
import { bookingsAPI } from '../utils/api';

const ExperienceDetail = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const experience = useLocalizedExperience(slug);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(null);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', nationality: '',
    startDate: '', adults: 2, children: 0, specialRequests: '',
  });

  if (!experience) return <Navigate to="/" replace />;

  const estimatedTotal = Number(form.adults) * experience.fromPrice + Number(form.children) * Math.round(experience.fromPrice * 0.5);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = { ...form, tourName: experience.title, adults: Number(form.adults), children: Number(form.children) };
      const res = await bookingsAPI.create(payload);
      setSuccess(res);
      setForm({ firstName: '', lastName: '', email: '', phone: '', nationality: '', startDate: '', adults: 2, children: 0, specialRequests: '' });
    } catch (err) {
      setError(err?.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-moroc-black font-moroc text-moroc-black antialiased">
      <Helmet>
        <title>{experience.title} | Sahara Visite</title>
        <meta name="description" content={experience.description} />
      </Helmet>

      <MorocEliteNavbar />

      <main className="bg-moroc-white">
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-moroc-black/30 via-moroc-black/45 to-moroc-black/75" />
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-16">
            <div className="text-white max-w-3xl">
              <p className="text-moroc-gold text-xs uppercase tracking-[0.24em] mb-3">{t('experienceDetail.signatureJourney')}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">{experience.title}</h1>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">{experience.description}</p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/#experiences" className="inline-flex items-center gap-2 text-sm font-medium text-moroc-black/70 hover:text-moroc-gold transition-colors mb-8">
              <FiArrowLeft size={16} />{t('experienceDetail.backToExp')}
            </Link>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
              <article className="bg-white border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm">
                <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-4">{t('experienceDetail.overview')}</h2>
                <p className="text-moroc-black/70 leading-relaxed mb-8">
                  {experience.description} {t('experienceDetail.overviewSuffix')}
                </p>
                <h3 className="font-serif text-xl text-moroc-black mb-4">{t('experienceDetail.highlights')}</h3>
                <ul className="space-y-3">
                  {experience.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-moroc-black/75">
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-moroc-gold flex-shrink-0" /><span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-5">
                    <h4 className="font-serif text-lg text-moroc-black mb-3">{t('experienceDetail.included')}</h4>
                    <ul className="space-y-2 text-sm text-moroc-black/75">
                      {experience.included.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <FiCheck className="text-moroc-gold" size={14} /><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-5">
                    <h4 className="font-serif text-lg text-moroc-black mb-3">{t('experienceDetail.notIncluded')}</h4>
                    <ul className="space-y-2 text-sm text-moroc-black/75">
                      {experience.excluded.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-moroc-gold mt-0.5">-</span><span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="font-serif text-xl text-moroc-black mb-4">{t('experienceDetail.itinerary')}</h3>
                  <div className="space-y-4">
                    {experience.itinerary.map((step) => (
                      <div key={step.day} className="border border-moroc-black/[0.08] p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-moroc-gold mb-1">{t('experienceDetail.day', { day: step.day })}</p>
                        <h4 className="font-serif text-lg text-moroc-black mb-1">{step.title}</h4>
                        <p className="text-sm text-moroc-black/70">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <aside className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm h-fit">
                <h3 className="font-serif text-2xl text-moroc-black mb-6">{t('experienceDetail.tripDetails')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-moroc-black/80"><FiClock className="text-moroc-gold" size={17} /><span>{experience.duration}</span></div>
                  <div className="flex items-center gap-3 text-moroc-black/80"><FiCalendar className="text-moroc-gold" size={17} /><span>{t('experienceDetail.availability')} {experience.availability}</span></div>
                  <div className="flex items-center gap-3 text-moroc-black/80"><FiMapPin className="text-moroc-gold" size={17} /><span>{t('experienceDetail.from')} {experience.from}</span></div>
                  <div className="flex items-center gap-3 text-moroc-black/80"><FiMapPin className="text-moroc-gold" size={17} /><span>{t('experienceDetail.to')} {experience.to}</span></div>
                </div>

                <Link to={`/experiences/${experience.slug}/activities`} className="mt-8 inline-flex w-full items-center justify-center gap-2 min-h-11 px-5 py-2.5 text-sm font-semibold tracking-[0.1em] uppercase text-white bg-moroc-black border border-moroc-black transition-all duration-300 hover:bg-moroc-black/90 hover:-translate-y-0.5">
                  <FiCompass size={17} className="text-moroc-gold" aria-hidden />
                  {t('experienceDetail.viewActivities')}
                </Link>

                <div className="mt-8 border-t border-moroc-black/[0.08] pt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-moroc-black/50 mb-2">{t('experienceDetail.fromPrice')}</p>
                  <p className="font-serif text-3xl text-moroc-black">${experience.fromPrice}</p>
                  <p className="text-sm text-moroc-black/60">{t('experienceDetail.perAdult')}</p>
                </div>
              </aside>
            </div>

            <section id="reservation" className="mt-12 md:mt-16 bg-white border border-moroc-black/[0.08] p-7 md:p-9 shadow-sm scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-moroc-black mb-2">{t('experienceDetail.reservation.title')}</h2>
              <p className="text-moroc-black/65 mb-7">{t('experienceDetail.reservation.desc')}</p>

              {success ? (
                <div className="bg-[#F5F9F1] border border-green-200 p-6">
                  <p className="text-green-700 font-medium mb-1">{t('experienceDetail.success.text')}</p>
                  <p className="text-sm text-green-700/90">
                    {t('experienceDetail.success.confirmation')} <span className="font-semibold">{success.data?.confirmationNumber}</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <div className="bg-[#FFF1F1] border border-red-200 p-4 text-sm text-red-700">{error}</div>}

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-moroc-black/60 mb-3 flex items-center gap-2">
                      <FiUser size={14} className="text-moroc-gold" /> {t('experienceDetail.form.personalInfo')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder={t('experienceDetail.form.firstNamePlaceholder')} className="input-field" />
                      <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder={t('experienceDetail.form.lastNamePlaceholder')} className="input-field" />
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t('experienceDetail.form.emailPlaceholder')} className="input-field" />
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder={t('experienceDetail.form.phonePlaceholder')} className="input-field" />
                      <input name="nationality" value={form.nationality} onChange={handleChange} placeholder={t('experienceDetail.form.nationalityPlaceholder')} className="input-field sm:col-span-2" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-moroc-black/60 mb-3 flex items-center gap-2">
                      <FiCalendar size={14} className="text-moroc-gold" /> {t('experienceDetail.form.tripDetails')}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="input-field" />
                      <div className="grid grid-cols-2 gap-3">
                        <select name="adults" value={form.adults} onChange={handleChange} className="input-field">
                          {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                        <select name="children" value={form.children} onChange={handleChange} className="input-field">
                          {[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                        </select>
                      </div>
                      <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange} rows={4} className="input-field resize-none sm:col-span-2" placeholder={t('experienceDetail.form.specialRequestsPlaceholder')} />
                    </div>
                  </div>

                  <div className="bg-[#FAF7F2] border border-moroc-black/[0.08] p-4 flex items-center justify-between">
                    <p className="text-sm text-moroc-black/70">{t('experienceDetail.form.estimatedTotal')} ({form.adults}{Number(form.children) ? `, ${form.children}` : ''})</p>
                    <p className="font-serif text-2xl text-moroc-black">${estimatedTotal.toLocaleString()}</p>
                  </div>

                  <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center min-h-11 px-6 py-2.5 text-sm font-semibold tracking-[0.12em] uppercase text-moroc-black bg-moroc-gold border border-moroc-gold shadow-gold transition-all duration-500 ease-premium hover:bg-moroc-gold-hover hover:border-moroc-gold-hover hover:-translate-y-0.5 hover:shadow-gold-hover disabled:opacity-70 disabled:cursor-not-allowed">
                    {loading ? t('experienceDetail.form.submitting') : t('experienceDetail.form.submitBtn')}
                  </button>
                </form>
              )}
            </section>
          </div>
        </section>
      </main>

      <MorocEliteFooter />
    </div>
  );
};

export default ExperienceDetail;
