import React, { useMemo } from 'react';
import * as THREE from 'three';
import { buildDuneGeometry, makeSandAlbedo, SAND, SKY, SUN_DIR, viewCam } from './duneField';

const vertexShader = `
  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorld = world.xyz;
    vNormalW = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec3 vWorld;
  varying vec3 vNormalW;
  varying vec2 vUv;

  uniform vec3 uSunDir;
  uniform vec3 uCamPos;
  uniform vec3 uColShadow;
  uniform vec3 uColMid;
  uniform vec3 uColLit;
  uniform vec3 uColHi;
  uniform vec3 uFogNear;
  uniform vec3 uFogFar;
  uniform float uNearBoost;
  uniform sampler2D uSandMap;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec3 N = normalize(vNormalW);
    vec3 L = normalize(uSunDir);
    vec3 V = normalize(uCamPos - vWorld);

    float ripA = sin(vWorld.x * 18.0 + vWorld.z * 4.0) * 0.02;
    float ripB = sin(vWorld.x * 7.0 - vWorld.z * 11.0) * 0.014;
    N = normalize(N + vec3(ripA, 0.0, ripB));

    float ndl = max(dot(N, L), 0.0);
    float wrap = ndl * 0.5 + 0.5;
    float fill = max(dot(N, vec3(0.28, 0.78, 0.18)), 0.0);
    float slope = clamp(1.0 - N.y, 0.0, 1.0);

    vec3 albedo = mix(uColMid, uColShadow, slope * 0.42);
    albedo = mix(albedo, uColLit, wrap * (1.0 - slope * 0.25));
    albedo = mix(albedo, uColHi, pow(ndl, 1.8) * (1.0 - slope) * 0.4);

    float grain = noise(vWorld.xz * 6.5) * 0.04;
    float streaks = noise(vec2(vWorld.x * 0.28, vWorld.z * 1.6)) * 0.035;
    vec3 sandTex = texture2D(uSandMap, vWorld.xz * 0.11).rgb;
    albedo *= (0.96 + grain + streaks) * mix(vec3(1.0), sandTex, 0.32);

    vec3 hemi = mix(uColShadow, uFogNear, N.y * 0.5 + 0.5);
    vec3 col = albedo * wrap + albedo * fill * 0.22 + hemi * 0.12;
    col += uColHi * pow(max(dot(reflect(-L, N), V), 0.0), 22.0) * 0.05;
    col *= uNearBoost;

    float dist = length(vWorld - uCamPos);
    float atmos = smoothstep(14.0, 50.0, dist);
    vec3 hazeCol = mix(uColLit, uFogNear, 0.55);
    col = mix(col, hazeCol, atmos * 0.5);
    float fog = smoothstep(20.0, 58.0, dist);
    vec3 fogCol = mix(uFogNear, uFogFar, smoothstep(30.0, 62.0, dist));
    col = mix(col, fogCol, fog * 0.72);

    gl_FragColor = vec4(col, 1.0);
  }
`;

const toColor = (hex) => new THREE.Color(hex);

const DuneMesh = ({ geometry, position, rotation, nearBoost = 1 }) => {
  const sandMap = useMemo(() => makeSandAlbedo(), []);
  const uniforms = useMemo(
    () => ({
      uSunDir: { value: SUN_DIR.clone() },
      uCamPos: { value: viewCam },
      uColShadow: { value: toColor(SAND.shadow) },
      uColMid: { value: toColor(SAND.mid) },
      uColLit: { value: toColor(SAND.lit) },
      uColHi: { value: toColor(SAND.highlight) },
      uFogNear: { value: toColor(SKY.horizon) },
      uFogFar: { value: toColor(SKY.top) },
      uNearBoost: { value: nearBoost },
      uSandMap: { value: sandMap },
    }),
    [nearBoost, sandMap]
  );

  return (
    <mesh geometry={geometry} position={position} rotation={rotation} frustumCulled={false}>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        toneMapped={false}
      />
    </mesh>
  );
};

const Desert = () => {
  const main = useMemo(
    () =>
      buildDuneGeometry({
        width: 86,
        depth: 76,
        segW: 168,
        segD: 118,
        heightScale: 1,
        oz: -8,
        meshZ: -6,
        flattenNear: 7,
      }),
    []
  );

  return (
    <DuneMesh geometry={main} position={[0, 0, -6]} rotation={[-Math.PI / 2, 0, 0.03]} />
  );
};

export default Desert;
