import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Desert from './Desert';
import Sun from './Sun';
import LuxuryCamp from './LuxuryCamp';
import FloatingObject from './FloatingObject';
import SandParticles from './SandParticles';
import { heroMotion } from './heroMotion';
import { viewCam, SKY } from './duneField';

const CameraRig = () => {
  const pan = useRef(new THREE.Vector2(0, 0));

  useFrame(({ camera, clock }) => {
    pan.current.x = THREE.MathUtils.lerp(pan.current.x, heroMotion.mx * 0.022, 0.045);
    pan.current.y = THREE.MathUtils.lerp(pan.current.y, heroMotion.my * 0.01, 0.045);

    const scroll = THREE.MathUtils.clamp(heroMotion.scroll, 0, 1);
    const breathe = Math.sin(clock.elapsedTime * 0.09) * 0.018;

    camera.position.x = pan.current.x;
    camera.position.y = 1.52 + pan.current.y - scroll * 0.08 + breathe;
    camera.position.z = 7.15 - scroll * 0.82;
    camera.lookAt(pan.current.x * 0.35, 0.52 - scroll * 0.04, -10.5);
    viewCam.copy(camera.position);
  });

  return null;
};

const Lights = () => (
  <>
    <ambientLight intensity={0.18} color="#E8D8BD" />
    <hemisphereLight args={['#3A2A1C', '#9A7448', 0.32]} />
    <directionalLight position={[-16, 6.5, -10]} intensity={0.85} color="#F0D4A8" />
  </>
);

const SaharaWorld = () => (
  <>
    <color attach="background" args={[SKY.top]} />
    <Lights />
    <CameraRig />
    <Sun />
    <Desert />
    <LuxuryCamp />
    <FloatingObject />
    <SandParticles />
  </>
);

const SaharaScene = ({ paused = false }) => (
  <Canvas
    gl={{
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
    }}
    dpr={[1, 1.35]}
    camera={{ fov: 36, near: 0.12, far: 90, position: [0, 1.52, 7.15] }}
    frameloop={paused ? 'never' : 'always'}
    style={{ width: '100%', height: '100%' }}
    onCreated={({ gl }) => {
      gl.outputColorSpace = THREE.SRGBColorSpace;
      gl.toneMapping = THREE.NoToneMapping;
      gl.setClearColor(SKY.top, 0);
    }}
    aria-hidden
  >
    <SaharaWorld />
  </Canvas>
);

export default SaharaScene;
