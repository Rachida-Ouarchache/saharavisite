import React, { useMemo } from 'react';
import * as THREE from 'three';
import { makeRadialGlow, SUN_DIR, SKY } from './duneField';

const vertexShader = `
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec3 vDir;
  uniform vec3 uSunDir;
  uniform vec3 uTop;
  uniform vec3 uHorizon;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }

  void main() {
    vec3 dir = normalize(vDir);
    float h = dir.y;

    vec3 sky = mix(uHorizon, uTop, smoothstep(-0.14, 0.78, h));

    float sunDot = max(dot(dir, normalize(uSunDir)), 0.0);
    float core = pow(sunDot, 520.0);
    float bloom = pow(sunDot, 32.0);
    float haze = pow(sunDot, 8.0);
    vec3 sunGold = vec3(0.95, 0.84, 0.62);
    sky += sunGold * core * 0.55;
    sky += sunGold * bloom * 0.34;
    sky += vec3(0.78, 0.58, 0.36) * haze * 0.28;

    float band = exp(-pow((h - 0.02) * 7.0, 2.0));
    vec3 warm = vec3(0.45, 0.32, 0.18);
    sky = mix(sky, warm, band * 0.4 * (0.4 + 0.6 * sunDot));

    vec2 cloudUv = dir.xz / max(dir.y + 0.12, 0.06);
    float clouds = noise(cloudUv * 2.4);
    clouds = smoothstep(0.62, 0.8, clouds) * 0.055;
    clouds *= smoothstep(0.02, 0.22, h) * smoothstep(0.48, 0.12, h);
    sky += vec3(0.55, 0.42, 0.3) * clouds;

    float star = step(0.9978, hash(floor(dir.xy * 42.0)));
    sky += star * 0.18 * smoothstep(0.22, 0.58, h) * (1.0 - sunDot);

    gl_FragColor = vec4(sky, 1.0);
  }
`;

const SUN_POS = SUN_DIR.clone().multiplyScalar(42);

const Sun = () => {
  const uniforms = useMemo(
    () => ({
      uSunDir: { value: SUN_DIR.clone() },
      uTop: { value: new THREE.Color(SKY.top) },
      uHorizon: { value: new THREE.Color(SKY.horizon) },
    }),
    []
  );

  const glow = useMemo(() => makeRadialGlow('rgba(236,214,168,0.9)', 160), []);
  const bloom = useMemo(() => makeRadialGlow('rgba(212,183,131,0.55)', 128), []);

  return (
    <group>
      <mesh renderOrder={-2}>
        <sphereGeometry args={[64, 32, 20]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          side={THREE.BackSide}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>

      <sprite position={SUN_POS} scale={[22, 14, 1]} renderOrder={-1}>
        <spriteMaterial
          map={bloom}
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
      <sprite position={SUN_POS} scale={[7.5, 5.2, 1]} renderOrder={-1}>
        <spriteMaterial
          map={glow}
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
    </group>
  );
};

export default Sun;
