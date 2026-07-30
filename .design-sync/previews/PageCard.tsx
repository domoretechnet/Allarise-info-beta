import * as React from 'react';
import { PageCard, Grid } from '@allarise/design-system';

export const Single = () => (
  <PageCard
    href="#"
    icon="🏠"
    title="Home Assistant"
    description="Install the integration, expose your alarms as entities, and drive them from automations."
    linkLabel="Read the guide"
  />
);

export const DestinationGrid = () => (
  <Grid variant="pages">
    <PageCard
      href="#"
      icon="🏠"
      title="Home Assistant"
      description="Install the integration and expose your alarms as entities."
      linkLabel="Read the guide"
    />
    <PageCard
      href="#"
      icon="🧩"
      title="MQTT Payload Builder"
      description="Build and copy the exact JSON payload for any Allarise command."
      linkLabel="Open the builder"
    />
    <PageCard
      href="#"
      icon="❓"
      title="FAQ"
      description="Answers about alarms, missions, sounds, and privacy."
      linkLabel="Browse questions"
    />
  </Grid>
);
