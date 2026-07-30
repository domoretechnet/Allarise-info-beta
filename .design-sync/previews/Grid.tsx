import * as React from 'react';
import { Grid, FeatureCard, FeatureTile, FieldGroup } from '@allarise/design-system';

export const Features = () => (
  <Grid variant="features">
    <FeatureCard icon="⏰" title="Alarm Engine" description="Rings at your volume." />
    <FeatureCard icon="🏠" title="Home Assistant" description="Wake the whole house." />
    <FeatureCard icon="🌙" title="Sleep Sounds" description="Rain, waves, white noise." />
  </Grid>
);

export const Tiles = () => (
  <Grid variant="tiles">
    <FeatureTile icon="🔔" title="Next alarm" description="Timestamp sensor." />
    <FeatureTile icon="⏱" title="Ringing" description="Binary sensor." />
    <FeatureTile icon="🎚" title="Switches" description="One per alarm." />
  </Grid>
);

export const TwoColumn = () => (
  <Grid variant="two-col">
    <FeatureCard icon="📥" title="Subscribe" description="Listen for state changes." />
    <FeatureCard icon="📤" title="Publish" description="Send commands to the app." />
  </Grid>
);

export const FieldRow = () => (
  <Grid variant="row-2">
    <FieldGroup label="Hour">
      <input type="number" defaultValue={6} />
    </FieldGroup>
    <FieldGroup label="Minute">
      <input type="number" defaultValue={30} />
    </FieldGroup>
  </Grid>
);
