import React, { Component, useEffect, useRef, useState } from 'react';
import { shouldUseHeroScene } from '../../utils/luxuryMedia';
import SaharaScene from './SaharaScene';

class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.setState({ failed: true });
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const HeroCanvas = () => {
  const host = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setEnabled(shouldUseHeroScene());
  }, []);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  useEffect(() => {
    const el = host.current;
    if (!el || !enabled) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={host}
      className="absolute inset-0 z-[1] opacity-0 animate-fade-in pointer-events-none"
      style={{ animationDuration: '1.15s' }}
      aria-hidden
    >
      {visible && (
        <SceneErrorBoundary>
          <SaharaScene paused={hidden} />
        </SceneErrorBoundary>
      )}
    </div>
  );
};

export default HeroCanvas;
