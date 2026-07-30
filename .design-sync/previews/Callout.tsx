import * as React from 'react';
import { Callout } from '@allarise/design-system';

export const Note = () => (
  <Callout tone="note">
    The integration is installed through HACS. Restart Home Assistant after
    adding the repository.
  </Callout>
);

export const Tip = () => (
  <Callout tone="tip">
    You can address an alarm by name instead of index — useful when your alarm
    list changes order.
  </Callout>
);

export const Warn = () => (
  <Callout tone="warn">
    Changing the MQTT topic prefix breaks any automation already pointing at the
    old topic.
  </Callout>
);

export const Success = () => (
  <Callout tone="success">
    Alarm times, labels, and sounds never leave your device.
  </Callout>
);

export const Danger = () => (
  <Callout tone="danger">
    Deleting the integration removes every entity it created, including any
    automations that reference them.
  </Callout>
);

export const AllTones = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <Callout tone="note">A neutral aside.</Callout>
    <Callout tone="tip">A helpful shortcut.</Callout>
    <Callout tone="warn">Something to be careful about.</Callout>
    <Callout tone="success">Something reassuring.</Callout>
    <Callout tone="danger">Something destructive.</Callout>
  </div>
);
