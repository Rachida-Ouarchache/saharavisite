import fs from 'fs';
import { getAllCircuitSlugs } from '../src/circuits/circuitsData.js';

const SITE = 'https://royalsaharatours.ma';
const today = new Date().toISOString().slice(0, 10);

const staticUrls = [
  { loc: '/', pri: '1.0', freq: 'weekly' },
  { loc: '/tours', pri: '0.95', freq: 'weekly' },
  { loc: '/circuits', pri: '0.8', freq: 'weekly' },
  { loc: '/destinations', pri: '0.8', freq: 'weekly' },
  { loc: '/tours', pri: '0.8', freq: 'weekly' },
  { loc: '/blog', pri: '0.7', freq: 'weekly' },
  { loc: '/about', pri: '0.5', freq: 'monthly' },
  { loc: '/contact', pri: '0.6', freq: 'monthly' },
  { loc: '/destinations/marrakech', pri: '0.7', freq: 'monthly' },
  { loc: '/destinations/fes', pri: '0.7', freq: 'monthly' },
  { loc: '/destinations/chefchaouen', pri: '0.7', freq: 'monthly' },
  { loc: '/destinations/merzouga-sahara', pri: '0.7', freq: 'monthly' },
  { loc: '/destinations/essaouira', pri: '0.7', freq: 'monthly' },
  { loc: '/destinations/atlas-mountains', pri: '0.7', freq: 'monthly' },
  { loc: '/experiences/villes-imperiales-desert-10-jours', pri: '0.85', freq: 'weekly' },
  { loc: '/experiences/grand-circuit-maroc-12-jours', pri: '0.85', freq: 'weekly' },
  { loc: '/blog/ultimate-guide-visiting-marrakech-2025', pri: '0.6', freq: 'monthly' },
  { loc: '/blog/camel-trekking-sahara-what-to-expect', pri: '0.6', freq: 'monthly' },
  { loc: '/blog/moroccan-cuisine-15-dishes-you-must-try', pri: '0.6', freq: 'monthly' },
];

const circuitUrls = getAllCircuitSlugs().map((s) => ({
  loc: `/circuits/${s}`,
  pri: '0.9',
  freq: 'weekly',
}));

const all = [...staticUrls, ...circuitUrls];

const body = all
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log('Wrote sitemap with', all.length, 'URLs');
