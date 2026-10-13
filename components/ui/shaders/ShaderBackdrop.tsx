'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

type SceneProps = { onReady?: () => void; onUnavailable?: () => void };

// Code-split: the shader engine only downloads once a scene is about to show.
// A missing export or failed chunk download resolves to an empty component.
const Empty = () => null;
const SCENES: Record<string, React.ComponentType<SceneProps>> = {
  leistungen: dynamic(
    () => import('./scenes').then((m) => m.LeistungenHeroScene || Empty).catch(() => Empty),
    { ssr: false },
  ),
};

// Decorative only: a render error hides the effect and leaves the section's
// CSS background, never an error screen.
class SceneBoundary extends React.Component<{ onError: () => void; children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

// Same pattern as webseite.hamburg: mount the WebGPU scene only while the
// section is near the viewport. No WebGPU or reduced motion means nothing
// mounts and the CSS gradient behind it is the final look.
export function ShaderBackdrop({ scene, className = '' }: { scene: keyof typeof SCENES; className?: string }) {
  const Scene = SCENES[scene] || Empty;
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('gpu' in navigator)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      setActive(entry.isIntersecting);
      if (!entry.isIntersecting) setReady(false);
    }, { rootMargin: '200px 0px' });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`shader-backdrop${ready ? ' is-ready' : ''} ${className}`}>
      {active && !failed && (
        <SceneBoundary onError={() => setFailed(true)}>
          <Scene onReady={() => setReady(true)} onUnavailable={() => setFailed(true)} />
        </SceneBoundary>
      )}
    </div>
  );
}
