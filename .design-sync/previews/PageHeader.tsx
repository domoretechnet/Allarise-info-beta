import * as React from 'react';
import { PageHeader } from '@allarise/design-system';

export const GuidePage = () => (
  <PageHeader
    label="Integration guide"
    title="Allarise + Home Assistant"
    description="Expose your alarms as Home Assistant entities, then drive lights, blinds, and speakers from the same schedule."
  />
);

export const LegalPage = () => (
  <PageHeader
    label="Legal"
    title="Privacy Policy"
    description="What Allarise stores, where it stores it, and what never leaves your device."
  />
);

export const Compact = () => (
  <PageHeader
    size="compact"
    title="Set alarm"
    description="Build the payload for the set_alarm command."
  />
);
