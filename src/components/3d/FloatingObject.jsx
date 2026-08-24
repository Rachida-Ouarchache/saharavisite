import React, { useMemo } from 'react';
import * as THREE from 'three';
import { worldDuneY } from './duneField';

/** Distant camel + guide — a far silhouette, never a foreground prop. */
function silhouetteTexture() {
  const c = document.createElement('canvas');
  c.width = 160;
  c.height = 80;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 160, 80);
  g.fillStyle = 'rgba(18, 14, 10, 0.78)';

  g.beginPath();
  g.ellipse(70, 48, 28, 14, 0, 0, Math.PI * 2);
  g.fill();
  g.beginPath();
  g.ellipse(82, 34, 14, 11, -0.4, 0, Math.PI * 2);
  g.fill();

  g.beginPath();
  g.moveTo(92, 30);
  g.quadraticCurveTo(108, 18, 118, 26);
  g.quadraticCurveTo(124, 30, 122, 36);
  g.quadraticCurveTo(110, 32, 96, 38);
  g.fill();

  g.fillRect(52, 54, 3.2, 18);
  g.fillRect(62, 56, 3, 16);
  g.fillRect(80, 55, 3.2, 17);
  g.fillRect(90, 54, 2.8, 18);

  g.beginPath();
  g.moveTo(118, 28);
  g.lineTo(128, 24);
  g.lineTo(130, 28);
  g.lineTo(122, 32);
  g.fill();

  g.fillRect(108, 22, 2.4, 12);
  g.beginPath();
  g.arc(109, 18, 2.4, 0, Math.PI * 2);
  g.fill();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

const FloatingObject = () => {
  const map = useMemo(() => silhouetteTexture(), []);

  return (
    <sprite position={[-7.4, worldDuneY(-7.4, -19.5) + 0.22, -19.5]} scale={[0.85, 0.42, 1]}>
      <spriteMaterial map={map} transparent depthWrite={false} toneMapped={false} opacity={0.55} />
    </sprite>
  );
};

export default FloatingObject;
