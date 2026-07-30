import * as React from 'react';
import { Section, FeatureCard, Grid } from '@allarise/design-system';

export const WithFeatures = () => (
  <Section
    label="Features"
    title="Everything you need to wake up"
    lead="Allarise pairs a serious alarm engine with the rest of your smart home."
  >
    <Grid variant="features">
      <FeatureCard icon="⏰" title="Alarm Engine" description="Rings at your volume, always." />
      <FeatureCard icon="🏠" title="Home Assistant" description="Wake the whole house." />
    </Grid>
  </Section>
);

export const AltBackground = () => (
  <Section
    label="Integrations"
    title="Built for Home Assistant"
    lead="Expose every alarm as an entity and drive it from your own automations."
    altBackground
  >
    <Grid variant="features">
      <FeatureCard icon="🔔" title="Next alarm sensor" description="Know when the next alarm fires." />
      <FeatureCard icon="🎚" title="Alarm switches" description="Toggle any alarm remotely." />
    </Grid>
  </Section>
);

export const HeadingOnly = () => (
  <Section label="Privacy" title="Your alarms stay yours" lead="No ads, no account, no tracking." />
);
