'use client';

import React from 'react';
import { Shader, FilmGrain, FlowingGradient } from 'shaders/react';

type SceneProps = { onReady?: () => void; onUnavailable?: () => void };

// Leistungen hero: slow silk bands in the brand greens on near-black, with a
// little grain so the gradient never bands on cheap panels. Greens only: an
// orange fourth colour turned the bands into a rainbow.
export function LeistungenHeroScene(props: SceneProps) {
  return (
    <Shader className="shader-canvas" disableTelemetry {...props}>
      <FilmGrain strength={0.12} bias={1}>
        <FlowingGradient
          colorA="#070A09"
          colorB="#0F2C21"
          colorC="#1F6B4E"
          colorD="#4FAF8C"
          speed={0.22}
          distortion={0.4}
          seed={7}
        />
      </FilmGrain>
    </Shader>
  );
}
