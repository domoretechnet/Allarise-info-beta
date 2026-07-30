import * as React from 'react';
import { InlineCode } from '@allarise/design-system';

export const InProse = () => (
  <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
    The integration exposes <InlineCode>sensor.allarise_next_alarm</InlineCode>,
    which updates whenever the next scheduled alarm changes.
  </p>
);

export const EntityIds = () => (
  <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
    Publish to <InlineCode>allarise/alarm/set</InlineCode> and subscribe to{' '}
    <InlineCode>allarise/alarm/state</InlineCode> for confirmation.
  </p>
);

export const Standalone = () => <InlineCode>configuration.yaml</InlineCode>;
