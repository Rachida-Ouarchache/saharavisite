/** Mercator + fit-to-viewBox for GeoJSON features. */

export function mercator([lon, lat]) {
  const λ = (lon * Math.PI) / 180;
  const max = 85.05112878;
  const clamped = Math.max(-max, Math.min(max, lat));
  const φ = (clamped * Math.PI) / 180;
  return [λ, Math.log(Math.tan(Math.PI / 4 + φ / 2))];
}

export function scaleRing(ring, factor) {
  if (!ring?.length) return ring;
  const closed =
    ring.length > 1 &&
    ring[0][0] === ring[ring.length - 1][0] &&
    ring[0][1] === ring[ring.length - 1][1];
  const n = closed ? ring.length - 1 : ring.length;
  let sx = 0;
  let sy = 0;
  for (let i = 0; i < n; i += 1) {
    sx += ring[i][0];
    sy += ring[i][1];
  }
  const cx = sx / n;
  const cy = sy / n;
  return ring.map(([x, y]) => [cx + (x - cx) * factor, cy + (y - cy) * factor]);
}

function walkCoords(coords, visit) {
  if (typeof coords[0] === 'number') {
    visit(coords);
    return;
  }
  coords.forEach((c) => walkCoords(c, visit));
}

export function boundsOfFeatures(features) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  features.forEach((f) => {
    walkCoords(f.geometry.coordinates, (pt) => {
      const [x, y] = mercator(pt);
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    });
  });
  return { minX, minY, maxX, maxY };
}

export function makeProjector(features, width, height, padding = 18) {
  const { minX, minY, maxX, maxY } = boundsOfFeatures(features);
  const dx = maxX - minX || 1;
  const dy = maxY - minY || 1;
  const scale = Math.min((width - padding * 2) / dx, (height - padding * 2) / dy);
  const pw = dx * scale;
  const ph = dy * scale;
  const ox = (width - pw) / 2 - minX * scale;
  const top = (height - ph) / 2;

  const project = (lonlat) => {
    const [x, y] = mercator(lonlat);
    return [ox + x * scale, top + (maxY - y) * scale];
  };

  return { project, scale };
}

export function ringToPath(ring, project) {
  if (!ring?.length) return '';
  return `${ring
    .map((pt, i) => {
      const [x, y] = project(pt);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ')} Z`;
}

export function geometryToPath(geometry, project) {
  if (!geometry) return '';
  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map((ring) => ringToPath(ring, project)).join(' ');
  }
  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates
      .map((poly) => poly.map((ring) => ringToPath(ring, project)).join(' '))
      .join(' ');
  }
  return '';
}

export function lineToPath(points, project) {
  return points
    .map((pt, i) => {
      const [x, y] = project(pt);
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(' ');
}
