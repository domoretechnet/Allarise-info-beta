import * as React from 'react';
import { Hero, Button } from '@allarise/design-system';

export const HomePage = () => (
  <Hero
    iconLight=""
    title="Wake up smarter."
    tagline="Your alarms shouldn't just wake you up — they should wake up your whole house."
    actions={
      <>
        <Button href="#" variant="primary">
          Download on the App Store
        </Button>
        <Button href="#" variant="secondary">
          Home Assistant guide
        </Button>
      </>
    }
  />
);

export const Compact = () => (
  <Hero
    iconLight=""
    size="compact"
    title="Frequently asked questions"
    tagline="Everything about alarms, missions, and Home Assistant."
  />
);

export const WithoutActions = () => (
  <Hero
    iconLight=""
    title="What's new in 3.0"
    tagline="MQTT commands, new entities, and a redesigned alarm engine."
  />
);
