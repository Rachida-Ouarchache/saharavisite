import * as THREE from 'three';

export const SUN_DIR = new THREE.Vector3(-0.62, 0.36, -0.58).normalize();

/** Mutated each frame by the camera rig — shared by dune shaders. */
export const viewCam = new THREE.Vector3(0, 1.62, 7.55);

export function worldDuneY(wx, wz, { meshZ = -6, oz = -8, heightScale = 1 } = {}) {
  const localY = -(wz - meshZ);
  return duneHeight(wx, localY + oz) * heightScale;
}

export const SAND = {
  shadow: '#9A7448',
  mid: '#B18A5A',
  lit: '#C5A16D',
  highlight: '#D4B783',
};

export const SKY = {
  top: '#0B0A08',
  horizon: '#3A2A1C',
};

function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function noise2(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx);
  const uy = fy * fy * (3 - 2 * fy);
  const a = hash2(ix, iy);
  const b = hash2(ix + 1, iy);
  const c = hash2(ix, iy + 1);
  const d = hash2(ix + 1, iy + 1);
  return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
}

export function fbm(x, y, octaves = 5) {
  let v = 0;
  let a = 0.5;
  let f = 1;
  for (let i = 0; i < octaves; i += 1) {
    v += a * noise2(x * f, y * f);
    a *= 0.5;
    f *= 2.05;
  }
  return v;
}

/** Soft wind-carved erg — rolling crests, no faceted peaks. */
export function duneHeight(x, z) {
  const w1 = x * 0.068 + z * 0.016;
  const h1 = (0.5 + 0.5 * Math.sin(w1)) ** 1.32 * 1.55;

  const w2 = x * 0.038 - z * 0.028 + 1.22;
  const h2 = (0.5 + 0.5 * Math.sin(w2)) ** 1.4 * 0.72;

  const w3 = x * 0.12 + z * 0.07 + 0.4;
  const h3 = Math.sin(w3) * 0.16;

  const macro = (fbm(x * 0.022, z * 0.022, 4) - 0.5) * 0.38;
  const mid = (fbm(x * 0.09, z * 0.09, 3) - 0.5) * 0.22;
  const ripples = Math.sin(x * 2.6 + z * 0.62) * 0.016 + Math.sin(x * 5.4 - z * 1.7) * 0.007;

  const corridor = Math.exp(-(x * x) / 28) * Math.max(0, (z + 2) / 16);
  return 0.7 + (h1 + h2 + h3 + macro + mid + ripples) * (1 - corridor * 0.22);
}

export function buildDuneGeometry({
  width,
  depth,
  segW,
  segD,
  heightScale = 1,
  ox = 0,
  oz = 0,
  meshZ = 0,
  flattenNear = 0,
} = {}) {
  const geo = new THREE.PlaneGeometry(width, depth, segW, segD);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i) + ox;
    const z = pos.getY(i) + oz;
    let h = duneHeight(x, z) * heightScale;
    if (flattenNear > 0) {
      const worldZ = -pos.getY(i) + meshZ;
      const t = Math.max(0, Math.min(1, (worldZ - 1.2) / flattenNear));
      h = h * (1 - t) + 0.92 * t;
    }
    pos.setZ(i, h);
  }
  geo.computeVertexNormals();
  geo.computeBoundingSphere();
  return geo;
}

export function makeSandAlbedo() {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < size * size; i += 1) {
    const n = 168 + Math.random() * 62;
    const o = i * 4;
    img.data[o] = n;
    img.data[o + 1] = n * 0.84;
    img.data[o + 2] = n * 0.6;
    img.data[o + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export function makeRadialGlow(inner = 'rgba(240,212,160,0.95)', size = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grd.addColorStop(0, inner);
  grd.addColorStop(0.18, 'rgba(212,183,131,0.45)');
  grd.addColorStop(0.42, 'rgba(201,166,107,0.12)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
