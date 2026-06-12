import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiPhone, FiMail, FiMapPin, FiClock, FiUser, FiCalendar } from 'react-icons/fi';
import { bookingsAPI, toursAPI } from '../utils/api';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_PHONE_WA } from '../utils/contact';
import SEO from '../components/SEO';

const initialForm = {
  firstName: '', lastName: '', email: '', phone: '', nationality: '',
  tourName: '', adults: 1, children: 0, startDate: '', specialRequests: '',
};

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const tourSlug = searchParams.get('tour');
  const [form, setForm] = useState({ ...initialForm });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState('');
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    if (tourSlug) {
      toursAPI.getBySlug(tourSlug).then((res) => {
        setTourData(res.data);
        setForm((prev) => ({ ...prev, tourName: res.data.title }));
      }).catch(() => {});
    }
  }, [tourSlug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const payload = { ...form, adults: Number(form.adults), children: Number(form.children) };
      if (tourData?._id) payload.tourId = tourData._id;
      const res = await bookingsAPI.create(payload);
      setSuccess(res);
      setForm({ ...initialForm });
    } catch (err) {
      setError(err?.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: <FiMapPin className="text-gold-500" size={18} />, labelKey: 'contact.info.office', value: '12 Rue Moulay Ali Cherif, Guéliz, Marrakech 40000' },
    { icon: <FiPhone className="text-gold-500" size={18} />, labelKey: 'contact.info.phone', value: SITE_PHONE_DISPLAY, href: `tel:${SITE_PHONE_TEL}` },
    { icon: <FiMail className="text-gold-500" size={18} />, labelKey: 'contact.info.email', value: 'info@royalsaharatours.ma', href: 'mailto:info@royalsaharatours.ma' },
    { icon: <FiClock className="text-gold-500" size={18} />, labelKey: 'contact.info.hours', value: 'Mon–Sat: 9:00–18:00 (GMT+1)' },
  ];

  return (
    <>
      <SEO
        title="Book a Tour or Contact Us – Sahara Visite"
        description="Book a Morocco tour or get in touch with Sahara Visite. We respond within 24 hours to plan your perfect Moroccan journey."
        url="/contact"
      />

      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1920" alt="Contact Sahara Visite" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-700/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-16">
          <p className="section-subtitle text-gold-400 mb-3">{t('contact.hero.label')}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold">
            {tourSlug ? t('contact.hero.titleBook') : t('contact.hero.titleContact')}
          </h1>
        </div>
      </div>

      {tourData && (
        <div className="bg-gold-50 border-b border-gold-200">
          <div className="container-custom py-3 flex items-center gap-3 text-sm">
            <img src={tourData.coverImage} alt={tourData.title} className="w-12 h-8 object-cover rounded" />
            <div>
              <span className="text-gray-600">{t('contact.booking.label')} </span>
              <Link to={`/tours/${tourSlug}`} className="font-semibold text-primary-700 hover:text-gold-600 transition-colors">{tourData.title}</Link>
              <span className="ml-3 text-gold-600 font-semibold">${tourData.discountPrice || tourData.price} {t('contact.booking.perPerson')}</span>
            </div>
          </div>
        </div>
      )}

      <div className="py-16 bg-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {success ? (
                <div className="bg-white rounded-2xl p-10 shadow-card text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <FiCheck size={36} className="text-green-600" />
                  </div>
                  <h2 className="font-serif text-3xl text-primary-700 font-bold mb-3">{t('contact.success.title')}</h2>
                  <p className="text-gray-600 mb-2">{t('contact.success.text')}</p>
                  <div className="bg-sand-50 rounded-xl p-4 my-5 inline-block">
                    <p className="text-sm text-gray-500">{t('contact.success.confirmationLabel')}</p>
                    <p className="text-2xl font-bold text-primary-700 font-mono">{success.data?.confirmationNumber}</p>
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{t('contact.success.followup')}</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/tours" className="btn-primary">{t('contact.success.explore')}</Link>
                    <button onClick={() => setSuccess(null)} className="btn-secondary">{t('contact.success.another')}</button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8 shadow-card">
                  <h2 className="font-serif text-2xl text-primary-700 font-bold mb-6">
                    {tourSlug ? t('contact.form.titleBook') : t('contact.form.titleContact')}
                  </h2>
                  {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">{error}</div>}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FiUser size={14} className="text-gold-400" /> {t('contact.form.personalInfo')}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.firstName')}</label>
                          <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="input-field" placeholder="Jean" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.lastName')}</label>
                          <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="input-field" placeholder="Dupont" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.email')}</label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required className="input-field" placeholder="jean@example.com" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.phone')}</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="input-field" placeholder="+33 6 00 00 00 00" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.nationality')}</label>
                          <input type="text" name="nationality" value={form.nationality} onChange={handleChange} className="input-field" placeholder="French" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FiCalendar size={14} className="text-gold-400" /> {t('contact.form.tripDetails')}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.tourInterest')}</label>
                          <input type="text" name="tourName" value={form.tourName} onChange={handleChange} required className="input-field" placeholder="e.g. Imperial Cities Tour..." />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.startDate')}</label>
                          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="input-field" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.adults')}</label>
                            <select name="adults" value={form.adults} onChange={handleChange} className="input-field">
                              {[1,2,3,4,5,6,7,8,9,10].map((n) => <option key={n} value={n}>{n}</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.children')}</label>
                            <select name="children" value={form.children} onChange={handleChange} className="input-field">
                              {[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                            </select>
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">{t('contact.form.specialRequests')}</label>
                          <textarea name="specialRequests" value={form.specialRequests} onChange={handleChange} rows={4} className="input-field resize-none" placeholder={t('contact.form.specialRequestsPlaceholder')} />
                        </div>
                      </div>
                    </div>

                    {tourData && form.adults > 0 && (
                      <div className="bg-sand-100 rounded-xl p-4 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          {t('contact.form.estimatedTotal')} {form.adults} × ${tourData.discountPrice || tourData.price}
                          {form.children > 0 && ` + ${form.children} × $${Math.round((tourData.discountPrice || tourData.price) * 0.5)}`}
                        </div>
                        <div className="text-xl font-bold text-primary-700">
                          ${(Number(form.adults) * (tourData.discountPrice || tourData.price) + Number(form.children) * Math.round((tourData.discountPrice || tourData.price) * 0.5)).toLocaleString()}
                        </div>
                      </div>
                    )}

                    <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-base">
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t('contact.form.submitting')}
                        </span>
                      ) : (
                        tourSlug ? t('contact.form.submitBooking') : t('contact.form.sendMessage')
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-400">{t('contact.form.disclaimer')}</p>
                  </form>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-primary-700 mb-5 font-serif text-xl">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  {contactItems.map(({ icon, labelKey, value, href }) => (
                    <div key={labelKey} className="flex gap-3">
                      <div className="flex-shrink-0 mt-0.5">{icon}</div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase">{t(labelKey)}</div>
                        {href ? (
                          <a href={href} className="text-sm text-gray-700 hover:text-gold-600 transition-colors">{value}</a>
                        ) : (
                          <div className="text-sm text-gray-700">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="h-48">
                  <iframe title="Sahara Visite Office Location" src="https://maps.google.com/maps?q=31.6295,-7.9811&z=14&output=embed" className="w-full h-full border-0" loading="lazy" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500">{t('contact.info.mapDesc')}</p>
                </div>
              </div>

              <div className="bg-primary-700 rounded-2xl p-6 text-white">
                <h4 className="font-semibold mb-2">{t('contact.info.whatsapp')}</h4>
                <p className="text-primary-200 text-sm mb-3">{t('contact.info.whatsappDesc')}</p>
                <a href={`https://wa.me/${SITE_PHONE_WA}`} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center bg-green-500 hover:bg-green-600">
                  {t('contact.info.whatsappBtn')}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
