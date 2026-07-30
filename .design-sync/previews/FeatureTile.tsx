import * as React from 'react';
import { FeatureTile, Grid } from '@allarise/design-system';

export const Single = () => (
  <FeatureTile
    icon="🔔"
    title="Next alarm sensor"
    description="Timestamp of the next scheduled alarm."
  />
);

export const TileGrid = () => (
  <Grid variant="tiles">
    <FeatureTile icon="🔔" title="Next alarm" description="Timestamp sensor." />
    <FeatureTile icon="⏱" title="Ringing" description="Binary sensor, on while sounding." />
    <FeatureTile icon="🎚" title="Alarm switches" description="One per configured alarm." />
    <FeatureTile icon="🌤" title="Weather" description="Forecast at wake time." />
    <FeatureTile icon="🎵" title="Sleep sounds" description="Remote playback control." />
    <FeatureTile icon="🧩" title="Missions" description="Trigger actions on dismiss." />
  </Grid>
);
