import * as React from 'react';
import { FeatureCard, Grid } from '@allarise/design-system';

export const Single = () => (
  <FeatureCard
    icon="⏰"
    title="Alarm Engine"
    description="Alarms that mean business. Allarise plays at the volume you set, independent of your ringer and mute switch."
  />
);

export const FeatureGrid = () => (
  <Grid variant="features">
    <FeatureCard
      icon="⏰"
      title="Alarm Engine"
      description="Alarms that play at the volume you set, independent of your ringer and mute switch."
    />
    <FeatureCard
      icon="🏠"
      title="Home Assistant Integration"
      description="Wake your lights, blinds, and speakers alongside your alarm."
    />
    <FeatureCard
      icon="🌙"
      title="Sleep Sounds"
      description="Fall asleep to rain, ocean waves, and white noise with sleep timers."
    />
    <FeatureCard
      icon="🧩"
      title="Wake-Up Missions"
      description="Dismiss by solving a math problem, shaking your phone, or triggering an action."
    />
  </Grid>
);

export const WithoutIcon = () => (
  <FeatureCard
    title="Privacy First"
    description="No ads, no account required, no tracking. Your alarms stay on your device."
  />
);
