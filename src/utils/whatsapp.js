/** Lien wa.me si REACT_APP_WHATSAPP_NUMBER est défini, sinon numéro principal du site */
import { SITE_PHONE_WA } from './contact';

export function getWhatsAppHref() {
  const raw = process.env.REACT_APP_WHATSAPP_NUMBER || SITE_PHONE_WA;
  const digits = String(raw).replace(/\D/g, '');
  if (!digits) return null;
  const preset = process.env.REACT_APP_WHATSAPP_MESSAGE || '';
  return preset
    ? `https://wa.me/${digits}?text=${encodeURIComponent(preset)}`
    : `https://wa.me/${digits}`;
}
