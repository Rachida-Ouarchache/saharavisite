import React, { useMemo } from 'react';
import * as THREE from 'three';
import { makeRadialGlow, worldDuneY } from './duneField';

const LuxuryCamp = () => {
  const lantern = useMemo(() => makeRadialGlow('rgba(232,208,150,0.95)', 64), []);
  const fire = useMemo(() => makeRadialGlow('rgba(220,160,90,0.85)', 64), []);

  const y = worldDuneY(9.8, -17.1) + 0.18;

  return (
    <group>
      <sprite position={[9.55, y, -17.15]} scale={[0.22, 0.22, 1]}>
        <spriteMaterial
          map={fire}
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
      <sprite position={[10.15, y + 0.08, -16.7]} scale={[0.1, 0.1, 1]}>
        <spriteMaterial
          map={lantern}
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
        />
      </sprite>
      <sprite position={[8.95, y + 0.06, -16.95]} scale={[0.08, 0.08, 1]}>
        <spriteMaterial
          map={lantern}
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

export default LuxuryCamp;
