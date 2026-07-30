import * as React from 'react';
import { PrivacyStrip } from '@allarise/design-system';

export const HomePageStrip = () => (
  <PrivacyStrip>
    <strong>Your alarms stay on your device.</strong> No ads, no account, no
    tracking. MQTT credentials are stored in the iOS keychain and never sent to
    us.
  </PrivacyStrip>
);

export const ShortStrip = () => (
  <PrivacyStrip>
    <strong>Private by default.</strong> Nothing leaves your device.
  </PrivacyStrip>
);

export const CustomIcon = () => (
  <PrivacyStrip icon="🛡">
    <strong>End-to-end on your own broker.</strong> Allarise connects directly —
    there is no server in the path.
  </PrivacyStrip>
);
