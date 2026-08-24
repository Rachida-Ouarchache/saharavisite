import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 36;

const SandParticles = () => {
  const points = useRef();
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 28;
      arr[i * 3 + 1] = Math.random() * 3.2 + 0.4;
      arr[i * 3 + 2] = (Math.random() - 0.55) * 22;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    return geo;
  }, []);

  useFrame((_, delta) => {
    const attr = points.current?.geometry?.attributes?.position;
    if (!attr) return;
    const pos = attr.array;
    const d = delta * 0.045;
    for (let i = 0; i < COUNT; i += 1) {
      pos[i * 3] += d;
      if (pos[i * 3] > 14) pos[i * 3] = -14;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        color="#D4B783"
        size={0.028}
        transparent
        opacity={0.16}
        depthWrite={false}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
};

export default SandParticles;
