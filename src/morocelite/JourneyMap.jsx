import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Reveal from '../components/Reveal';
import Tilt3D from '../components/Tilt3D';
import moroccoGeo from '../data/morocco.geo.json';
import {
  CONTEXT_CITIES,
  HIGH_ATLAS_RIDGE,
  ITINERARY,
  RANGES,
  ROUTE_WAYPOINTS,
  SAHARA_WASH,
  SEMI_ARID,
} from '../data/moroccoPlaces';
import {
  geometryToPath,
  lineToPath,
  makeProjector,
  ringToPath,
  scaleRing,
} from '../utils/geoProject';
import { prefersReducedMotion } from '../utils/luxuryMedia';

const VB = { w: 640, h: 720 };

const offsetRidge = (ridge, dLat) => ridge.map(([lon, lat]) => [lon, lat + dLat]);

function lengthNear(path, [x, y]) {
  const total = path.getTotalLength();
  let best = 0;
  let bestD = Infinity;
  const steps = 100;
  for (let i = 0; i <= steps; i += 1) {
    const l = (total * i) / steps;
    const p = path.getPointAtLength(l);
    const d = (p.x - x) ** 2 + (p.y - y) ** 2;
    if (d < bestD) {
      bestD = d;
      best = l;
    }
  }
  return best;
}

const JourneyMap = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const routeRef = useRef(null);
  const [active, setActive] = useState(null);
  const [selected, setSelected] = useState(null);
  const [drawn, setDrawn] = useState(false);
  const [pathLen, setPathLen] = useState(0);
  const [stopLens, setStopLens] = useState([]);
  const [mapError, setMapError] = useState(false);

  const projected = useMemo(() => {
    try {
      const features = moroccoGeo.features;
      const { project } = makeProjector(features, VB.w, VB.h, 22);
      const land = features.map((f) => geometryToPath(f.geometry, project)).join(' ');
      if (!land) throw new Error('empty land');
      return {
        project,
        land,
        route: lineToPath(ROUTE_WAYPOINTS, project),
        highAtlas: ringToPath(RANGES.highAtlas, project),
        middleAtlas: ringToPath(RANGES.middleAtlas, project),
        antiAtlas: ringToPath(RANGES.antiAtlas, project),
        highContours: [1, 0.72, 0.48].map((f) => lineToPath(scaleRing(RANGES.highAtlas, f), project)),
        midContours: [1, 0.65].map((f) => lineToPath(scaleRing(RANGES.middleAtlas, f), project)),
        antiContours: [1, 0.62].map((f) => lineToPath(scaleRing(RANGES.antiAtlas, f), project)),
        ridge: [0, 0.08, -0.08].map((d) => lineToPath(offsetRidge(HIGH_ATLAS_RIDGE, d), project)),
        sahara: ringToPath(SAHARA_WASH, project),
        semiArid: ringToPath(SEMI_ARID, project),
        parallel: lineToPath(
          [
            [-13.15, 27.667],
            [-8.68, 27.667],
          ],
          project
        ),
        atlantic: project([-12.35, 32.15]),
        mediterranean: project([-3.55, 35.82]),
        stops: ITINERARY.map((s) => ({ ...s, xy: project(s.coordinates) })),
        cities: CONTEXT_CITIES.map((c) => ({ ...c, xy: project(c.coordinates) })),
      };
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (!projected) setMapError(true);
  }, [projected]);

  useEffect(() => {
    const path = routeRef.current;
    if (!path) return undefined;
    const total = path.getTotalLength();
    setPathLen(total);
    setStopLens(projected.stops.map((s) => lengthNear(path, s.xy)));

    const reduce = prefersReducedMotion();
    if (reduce) {
      setDrawn(true);
      return undefined;
    }

    const el = sectionRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.28, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [projected]);

  const focusKey = active || selected;
  const focusIndex = ITINERARY.findIndex((s) => s.key === focusKey);

  const dashOffset = useMemo(() => {
    if (!pathLen) return 1;
    if (!drawn) return pathLen;
    if (focusIndex >= 0 && stopLens[focusIndex] != null) {
      return Math.max(0, pathLen - stopLens[focusIndex]);
    }
    return 0;
  }, [pathLen, drawn, focusIndex, stopLens]);

  const onActivate = useCallback((key) => {
    setActive(key);
  }, []);

  const onClear = useCallback(() => {
    setActive(null);
  }, []);

  const highlighted = (key) => focusKey === key;
  const stopVisible = (i) => drawn || prefersReducedMotion() || i === 0;

  const tooltipStop = ITINERARY.find((s) => s.key === focusKey);
  const tooltipXy = tooltipStop && projected ? projected.stops.find((s) => s.key === focusKey)?.xy : null;

  return (
    <section
      ref={sectionRef}
      id="journey-map"
      aria-labelledby="map-heading"
      className="relative bg-[#0D0C0A] py-20 md:py-28 overflow-hidden"
    >
      <div className="zellige-pattern absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden />
      <div className="relative container-custom">
        <Reveal className="max-w-2xl mb-12 md:mb-16 lg:mb-18">
          <p className="text-[#C8A15A] text-xs uppercase tracking-[0.3em] mb-4">
            {t('home.journeyMap.label')}
          </p>
          <h2
            id="map-heading"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#EDE5D5] font-medium tracking-tight"
          >
            {t('home.journeyMap.title')}
          </h2>
          <p className="mt-5 font-moroc text-[#EDE5D5]/55 text-sm md:text-base leading-relaxed max-w-xl">
            {t('home.journeyMap.desc')}
          </p>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="grid lg:grid-cols-[minmax(0,1.65fr)_minmax(260px,0.9fr)] gap-10 lg:gap-14 xl:gap-16 items-start">
            <div className="relative min-w-0">
              {mapError || !projected ? (
                <div
                  className="border border-[#C8A15A]/20 bg-[#191713] min-h-[280px]"
                  aria-hidden
                />
              ) : (
                <Tilt3D max={2.4}>
                  <div className="relative border border-[#C8A15A]/18 bg-[#0D0C0A] px-1 sm:px-3 py-2 sm:py-4 overflow-auto">
                    <svg
                      viewBox={`0 0 ${VB.w} ${VB.h}`}
                      preserveAspectRatio="xMidYMid meet"
                      className="w-full h-auto min-h-[380px] sm:min-h-[460px] max-h-[78vh] mx-auto"
                      role="img"
                      aria-label={t('home.journeyMap.aria')}
                      onClick={() => setSelected(null)}
                    >
                      <defs>
                        <clipPath id="ma-land">
                          <path d={projected.land} />
                        </clipPath>
                        <linearGradient id="ma-relief" x1="0.2" y1="0" x2="0.85" y2="1">
                          <stop offset="0%" stopColor="#242019" />
                          <stop offset="42%" stopColor="#191713" />
                          <stop offset="72%" stopColor="#30281E" />
                          <stop offset="100%" stopColor="#3A3023" />
                        </linearGradient>
                        <radialGradient id="ma-light" cx="32%" cy="18%" r="70%">
                          <stop offset="0%" stopColor="#EDE5D5" stopOpacity="0.07" />
                          <stop offset="55%" stopColor="#191713" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="ma-sahara" x1="0.15" y1="0" x2="0.9" y2="1">
                          <stop offset="0%" stopColor="#C8A15A" stopOpacity="0" />
                          <stop offset="45%" stopColor="#C8A15A" stopOpacity="0.07" />
                          <stop offset="100%" stopColor="#E6C987" stopOpacity="0.16" />
                        </linearGradient>
                        <filter id="ma-glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="1.6" result="b" />
                          <feMerge>
                            <feMergeNode in="b" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>

                      <rect width={VB.w} height={VB.h} fill="#0D0C0A" />

                      <text
                        x={projected.atlantic[0]}
                        y={projected.atlantic[1]}
                        fill="#EDE5D5"
                        fillOpacity="0.28"
                        fontSize="9"
                        letterSpacing="3.4"
                        textAnchor="middle"
                        className="uppercase"
                      >
                        {t('home.journeyMap.oceans.atlantic')}
                      </text>
                      <text
                        x={projected.mediterranean[0]}
                        y={projected.mediterranean[1]}
                        fill="#EDE5D5"
                        fillOpacity="0.28"
                        fontSize="8.5"
                        letterSpacing="2.6"
                        textAnchor="middle"
                        className="uppercase"
                      >
                        {t('home.journeyMap.oceans.mediterranean')}
                      </text>

                      <path d={projected.land} fill="#191713" />
                      <path d={projected.land} fill="url(#ma-relief)" fillOpacity="0.85" />
                      <path d={projected.land} fill="url(#ma-light)" />

                      <g clipPath="url(#ma-land)">
                        <path d={projected.semiArid} fill="#30281E" fillOpacity="0.45" />
                        <path d={projected.sahara} fill="url(#ma-sahara)" />
                        <path d={projected.highAtlas} fill="#242019" fillOpacity="0.7" />
                        <path d={projected.middleAtlas} fill="#242019" fillOpacity="0.55" />
                        <path d={projected.antiAtlas} fill="#30281E" fillOpacity="0.5" />

                        {projected.highContours.map((d, i) => (
                          <path
                            key={`hc-${i}`}
                            d={d}
                            fill="none"
                            stroke="#C8A15A"
                            strokeOpacity={0.18 - i * 0.04}
                            strokeWidth="0.6"
                          />
                        ))}
                        {projected.midContours.map((d, i) => (
                          <path
                            key={`mc-${i}`}
                            d={d}
                            fill="none"
                            stroke="#C8A15A"
                            strokeOpacity="0.12"
                            strokeWidth="0.5"
                          />
                        ))}
                        {projected.antiContours.map((d, i) => (
                          <path
                            key={`ac-${i}`}
                            d={d}
                            fill="none"
                            stroke="#C8A15A"
                            strokeOpacity="0.1"
                            strokeWidth="0.5"
                          />
                        ))}
                        {projected.ridge.map((d, i) => (
                          <path
                            key={`rd-${i}`}
                            d={d}
                            fill="none"
                            stroke="#E6C987"
                            strokeOpacity={i === 0 ? 0.28 : 0.12}
                            strokeWidth={i === 0 ? 0.9 : 0.45}
                            strokeLinecap="round"
                          />
                        ))}
                      </g>

                      <path
                        d={projected.land}
                        fill="none"
                        stroke="#C8A15A"
                        strokeOpacity="0.55"
                        strokeWidth="1.15"
                        strokeLinejoin="round"
                      />

                      <path
                        d={projected.parallel}
                        fill="none"
                        stroke="#C8A15A"
                        strokeOpacity="0.28"
                        strokeWidth="0.7"
                        strokeDasharray="3.5 3"
                      />

                      <text
                        x={projected.stops[0].xy[0] + 18}
                        y={projected.stops[0].xy[1] + 52}
                        fill="#C8A15A"
                        fillOpacity="0.38"
                        fontSize="7.5"
                        letterSpacing="2.2"
                        transform={`rotate(-54 ${projected.stops[0].xy[0] + 18} ${projected.stops[0].xy[1] + 52})`}
                      >
                        ATLAS
                      </text>
                      <text
                        x={projected.stops[5].xy[0] - 8}
                        y={projected.stops[5].xy[1] + 36}
                        fill="#E6C987"
                        fillOpacity="0.4"
                        fontSize="8"
                        letterSpacing="2.4"
                      >
                        SAHARA
                      </text>

                      <path
                        d={projected.route}
                        fill="none"
                        stroke="#C8A15A"
                        strokeOpacity="0.18"
                        strokeWidth="6.5"
                        strokeLinecap="round"
                        className="journey-route"
                        style={{
                          strokeDasharray: pathLen || 1,
                          strokeDashoffset: pathLen ? dashOffset : 1,
                        }}
                      />
                      <path
                        ref={routeRef}
                        d={projected.route}
                        fill="none"
                        stroke="#C8A15A"
                        strokeWidth="1.65"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="journey-route"
                        style={{
                          strokeDasharray: pathLen || 1,
                          strokeDashoffset: pathLen ? dashOffset : 1,
                        }}
                        filter="url(#ma-glow)"
                      />

                      {projected.cities.map((c) => {
                        const [x, y] = c.xy;
                        const left = c.align === 'left';
                        return (
                          <g key={c.key} opacity="0.42">
                            <circle cx={x} cy={y} r="1.7" fill="#E6C987" />
                            <text
                              x={left ? x - 7 : x + 7}
                              y={y + 3}
                              textAnchor={left ? 'end' : 'start'}
                              fill="#EDE5D5"
                              fontSize="8"
                              letterSpacing="0.6"
                            >
                              {t(`home.journeyMap.cities.${c.key}`)}
                            </text>
                          </g>
                        );
                      })}

                      {projected.stops.map((s, i) => {
                        const [x, y] = s.xy;
                        const [dx, dy] = s.stem || [0, -14];
                        const mx = x + dx;
                        const my = y + dy;
                        const on = highlighted(s.key);
                        const left = s.align === 'left';
                        const visible = stopVisible(i);
                        const labelY = dy >= 0 ? my + 14 : my - 8;
                        return (
                          <g
                            key={s.key}
                            role="button"
                            tabIndex={0}
                            aria-label={t(`home.journeyMap.stops.${s.key}`)}
                            aria-pressed={on}
                            className={`journey-stop-mark cursor-pointer ${visible ? 'is-in' : ''}`}
                            style={{ transitionDelay: drawn ? `${i * 280}ms` : '0ms' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelected(s.key);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelected(s.key);
                              }
                            }}
                            onMouseEnter={() => onActivate(s.key)}
                            onMouseLeave={onClear}
                            onFocus={() => onActivate(s.key)}
                            onBlur={onClear}
                          >
                            {on && (
                              <circle
                                cx={mx}
                                cy={my}
                                r="11"
                                fill="#E6C987"
                                className="map-halo"
                                opacity="0.28"
                              />
                            )}
                            <line
                              x1={x}
                              y1={y}
                              x2={mx}
                              y2={my}
                              stroke="#E6C987"
                              strokeWidth="0.9"
                            />
                            <circle cx={x} cy={y} r="2.1" fill="#E6C987" />
                            <circle
                              cx={mx}
                              cy={my}
                              r={on ? 6.2 : 5.2}
                              fill="#0D0C0A"
                              stroke="#E6C987"
                              strokeWidth={on ? 1.5 : 1.1}
                            />
                            <text
                              x={mx}
                              y={my + 2.8}
                              textAnchor="middle"
                              fill="#EDE5D5"
                              fontSize="6.5"
                              fontWeight="600"
                            >
                              {String(i + 1).padStart(2, '0')}
                            </text>
                            <text
                              x={left ? mx - 9 : mx + 9}
                              y={labelY}
                              textAnchor={left ? 'end' : 'start'}
                              fill={on ? '#E6C987' : '#EDE5D5'}
                              fontSize="9.5"
                              letterSpacing="1.15"
                              className="uppercase"
                            >
                              {t(`home.journeyMap.stops.${s.key}`)}
                            </text>
                          </g>
                        );
                      })}

                      <g transform={`translate(${VB.w - 48} 56)`} opacity="0.7">
                        <circle cx="0" cy="0" r="15" fill="none" stroke="#C8A15A" strokeWidth="0.55" />
                        <path d="M0 -10 L2.2 2.2 L0 0.4 L-2.2 2.2 Z" fill="#C8A15A" />
                        <text x="0" y="-19" textAnchor="middle" fill="#C8A15A" fontSize="8" letterSpacing="1.5">
                          N
                        </text>
                      </g>
                    </svg>

                    {tooltipStop && tooltipXy && (
                      <div
                        className="pointer-events-none absolute z-10 w-44 px-3 py-2.5 border border-[#C8A15A]/30 bg-[#0D0C0A]/92 shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
                        style={{
                          left: `clamp(8px, calc(${(tooltipXy[0] / VB.w) * 100}% - 5rem), calc(100% - 12rem))`,
                          top: `clamp(8px, calc(${(tooltipXy[1] / VB.h) * 100}% + 1.4rem), calc(100% - 6rem))`,
                        }}
                      >
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#E6C987]">
                          {t(`home.journeyMap.stops.${tooltipStop.key}`)}
                        </p>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-[#EDE5D5]/70">
                          {t(`home.journeyMap.blurbs.${tooltipStop.key}`)}
                        </p>
                      </div>
                    )}
                  </div>
                </Tilt3D>
              )}
            </div>

            <ol className="space-y-0 border-l border-[#C8A15A]/22" aria-label={t('home.journeyMap.listAria')}>
              {ITINERARY.map((s, i) => {
                const on = highlighted(s.key);
                return (
                  <li key={s.key}>
                    <Link
                      to={s.to}
                      onMouseEnter={() => onActivate(s.key)}
                      onMouseLeave={onClear}
                      onFocus={() => onActivate(s.key)}
                      onBlur={onClear}
                      aria-current={on ? 'true' : undefined}
                      className={`flex gap-4 py-4 pl-6 pr-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C8A15A] ${
                        on ? 'text-[#C8A15A]' : 'text-[#EDE5D5]'
                      }`}
                    >
                      <span className="font-moroc text-xs tracking-[0.2em] text-[#C8A15A] mt-1 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>
                        <span className="block font-serif text-xl md:text-2xl leading-tight">
                          {t(`home.journeyMap.stops.${s.key}`)}
                        </span>
                        <span className="mt-1.5 block text-[12px] leading-relaxed text-[#EDE5D5]/45 font-moroc">
                          {t(`home.journeyMap.blurbs.${s.key}`)}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default JourneyMap;
