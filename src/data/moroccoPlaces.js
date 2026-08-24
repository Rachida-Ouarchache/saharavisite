import { MOROCCO_CITIES as C } from '../utils/moroccoGeo';

const ll = (name) => [C[name].lng, C[name].lat];

/** Real WGS84 coordinates [longitude, latitude] — sourced from moroccoGeo. */

export const ITINERARY = [
  {
    key: 'marrakech',
    coordinates: ll('Marrakech'),
    to: '/destinations/marrakech',
    align: 'left',
    stem: [-2, -18],
  },
  {
    key: 'ait',
    coordinates: ll('Aït Ben Haddou'),
    to: '/circuits/excursion-ait-ben-haddou',
    align: 'left',
    stem: [-16, -8],
  },
  {
    key: 'ouarzazate',
    coordinates: ll('Ouarzazate'),
    to: '/circuits/circuit-ouarzazate',
    align: 'left',
    stem: [4, 18],
  },
  {
    key: 'dades',
    coordinates: ll('Dadès'),
    to: '/circuits/marrakech-merzouga-4-jours',
    align: 'right',
    stem: [12, -16],
  },
  {
    key: 'merzouga',
    coordinates: ll('Merzouga'),
    to: '/destinations/merzouga-sahara',
    align: 'left',
    stem: [-14, 12],
  },
  {
    key: 'sahara',
    coordinates: [-3.978, 31.152],
    to: '/circuits/marrakech-merzouga-3-jours',
    align: 'right',
    stem: [16, -18],
  },
];

/** Road corridor Marrakech → Erg Chebbi (Tizi n'Tichka, Skoura, Tinghir, Erfoud). */
export const ROUTE_WAYPOINTS = [
  ll('Marrakech'),
  [-7.72, 31.48],
  [-7.382, 31.285],
  [-7.22, 31.12],
  ll('Aït Ben Haddou'),
  ll('Ouarzazate'),
  [-6.579, 31.06],
  [-6.32, 31.22],
  [-6.0, 31.37],
  ll('Dadès'),
  [-5.533, 31.515],
  [-4.83, 31.48],
  [-4.233, 31.436],
  [-4.08, 31.22],
  ll('Merzouga'),
  [-3.978, 31.152],
];

export const CONTEXT_CITIES = [
  { key: 'tanger', coordinates: ll('Tanger'), align: 'right' },
  { key: 'chefchaouen', coordinates: ll('Chefchaouen'), align: 'right' },
  { key: 'fes', coordinates: ll('Fès'), align: 'right' },
  { key: 'rabat', coordinates: ll('Rabat'), align: 'left' },
  { key: 'casablanca', coordinates: ll('Casablanca'), align: 'left' },
  { key: 'essaouira', coordinates: ll('Essaouira'), align: 'left' },
];

/** Approximate range envelopes from real extents, simplified for editorial relief. */
export const RANGES = {
  highAtlas: [
    [-8.35, 30.88],
    [-7.85, 31.08],
    [-7.25, 31.38],
    [-6.55, 31.58],
    [-6.05, 31.48],
    [-6.25, 31.12],
    [-6.95, 30.88],
    [-7.85, 30.72],
    [-8.35, 30.88],
  ],
  middleAtlas: [
    [-5.75, 32.55],
    [-5.15, 33.25],
    [-4.55, 33.75],
    [-4.05, 33.85],
    [-3.85, 33.35],
    [-4.45, 32.75],
    [-5.15, 32.38],
    [-5.75, 32.55],
  ],
  antiAtlas: [
    [-9.15, 29.42],
    [-8.45, 29.95],
    [-7.45, 30.28],
    [-6.85, 30.08],
    [-7.15, 29.52],
    [-8.15, 29.22],
    [-9.15, 29.42],
  ],
};

export const HIGH_ATLAS_RIDGE = [
  [-8.15, 30.92],
  [-7.92, 31.06],
  [-7.5, 31.18],
  [-7.0, 31.35],
  [-6.5, 31.48],
  [-6.15, 31.42],
];

/** Semi-arid piedmont south of the Atlas, then open Sahara. */
export const SAHARA_WASH = [
  [-9.6, 29.15],
  [-7.4, 29.75],
  [-5.4, 30.35],
  [-3.85, 31.22],
  [-1.55, 32.05],
  [-1.45, 30.7],
  [-4.2, 29.4],
  [-8.68, 27.66],
  [-13.2, 23.6],
  [-16.6, 21.42],
  [-17.0, 21.42],
  [-14.8, 24.2],
  [-11.8, 26.6],
  [-9.6, 29.15],
];

export const SEMI_ARID = [
  [-8.6, 30.72],
  [-6.6, 31.22],
  [-4.6, 31.42],
  [-3.95, 31.18],
  [-5.4, 30.45],
  [-7.9, 29.85],
  [-8.6, 30.72],
];
