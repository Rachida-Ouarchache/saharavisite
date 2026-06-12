import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import experiences from './experiencesData';

function mergeExperience(exp, tr) {
  if (!tr || typeof tr !== 'object') return exp;

  return {
    ...exp,
    title: tr.title ?? exp.title,
    description: tr.description ?? exp.description,
    duration: tr.duration ?? exp.duration,
    availability: tr.availability ?? exp.availability,
    highlights: tr.highlights ?? exp.highlights,
    included: tr.included ?? exp.included,
    excluded: tr.excluded ?? exp.excluded,
    itinerary: exp.itinerary.map((step, i) => ({
      ...step,
      title: tr.itinerary?.[i]?.title ?? step.title,
      text: tr.itinerary?.[i]?.text ?? step.text,
    })),
    activities: exp.activities.map((act, i) => ({
      ...act,
      title: tr.activities?.[i]?.title ?? act.title,
      description: tr.activities?.[i]?.description ?? act.description,
    })),
  };
}

export function useLocalizedExperiences() {
  const { t } = useTranslation();

  return useMemo(
    () => experiences.map((exp) => {
      const tr = t(`circuits.${exp.slug}`, { returnObjects: true });
      return mergeExperience(exp, tr);
    }),
    [t],
  );
}

export function useLocalizedExperience(slug) {
  const experiences = useLocalizedExperiences();
  return experiences.find((exp) => exp.slug === slug);
}
