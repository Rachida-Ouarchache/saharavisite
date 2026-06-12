import React from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import { GiPathDistance } from 'react-icons/gi';
import { MdOutlineDirectionsCar, MdOutlineHotelClass } from 'react-icons/md';
import { TbMapPin } from 'react-icons/tb';

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    { icon: GiPathDistance, titleKey: 'home.why.features.tailor.title', textKey: 'home.why.features.tailor.text' },
    { icon: MdOutlineDirectionsCar, titleKey: 'home.why.features.transport.title', textKey: 'home.why.features.transport.text' },
    { icon: MdOutlineHotelClass, titleKey: 'home.why.features.accommodation.title', textKey: 'home.why.features.accommodation.text' },
    { icon: TbMapPin, titleKey: 'home.why.features.guides.title', textKey: 'home.why.features.guides.text' },
  ];

  return (
    <section className="bg-moroc-charcoal py-24 md:py-32 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <p className="text-moroc-gold text-xs uppercase tracking-[0.3em] mb-4">{t('home.why.label')}</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-moroc-white font-medium tracking-tight">
            {t('home.why.title')}
          </h2>
        </Reveal>

        <Reveal delayMs={60} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {features.map(({ icon: Icon, titleKey, textKey }) => (
            <div key={titleKey} className="text-center lg:text-left group px-2 sm:px-0">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-moroc-gold/40 text-moroc-gold mb-6 mx-auto lg:mx-0 group-hover:bg-moroc-gold group-hover:text-moroc-black group-hover:border-moroc-gold transition-all duration-500 ease-premium">
                <Icon className="w-7 h-7" aria-hidden />
              </div>
              <h3 className="font-serif text-xl text-moroc-white mb-3">{t(titleKey)}</h3>
              <p className="font-moroc text-sm text-white/60 leading-relaxed">{t(textKey)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
