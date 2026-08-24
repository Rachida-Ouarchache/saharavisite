import React, { useMemo } from 'react';
import { buildDuneGeometry, SKY } from './duneField';

/**
 * Far dune chains dissolving into haze — not geometric peaks.
 */
const Mountains = () => {
  const far = useMemo(
    () =>
      buildDuneGeometry({
        width: 110,
        depth: 28,
        segW: 80,
        segD: 28,
        heightScale: 0.34,
        oz: -36,
      }),
    []
  );

  const haze = useMemo(
    () =>
      buildDuneGeometry({
        width: 130,
        depth: 18,
        segW: 48,
        segD: 16,
        heightScale: 0.22,
        oz: -48,
      }),
    []
  );

  return (
    <group>
      <mesh geometry={far} position={[2, -0.2, -28]} rotation={[-Math.PI / 2, 0, 0.03]}>
        <meshBasicMaterial
          color="#5C4632"
          transparent
          opacity={0.42}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={haze} position={[-4, 0.15, -40]} rotation={[-Math.PI / 2, 0, -0.02]}>
        <meshBasicMaterial
          color="#6B5340"
          transparent
          opacity={0.28}
          toneMapped={false}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

export default Mountains;
