import * as React from 'react';
import { TagPill } from '@allarise/design-system';

export const ProFeature = () => (
  <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
    Alarm Engine
    <TagPill>Pro</TagPill>
  </h3>
);

export const FreeFeature = () => (
  <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
    Sleep Sounds
    <TagPill>Free</TagPill>
  </h3>
);

export const FeatureList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
      Wallpaper Packs
      <TagPill>Pro</TagPill>
    </h3>
    <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
      Wake-Up Missions
      <TagPill>Free</TagPill>
    </h3>
    <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
      Morning Weather
      <TagPill>Pro</TagPill>
    </h3>
  </div>
);
