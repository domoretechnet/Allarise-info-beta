import * as React from 'react';
import { ToggleRow } from '@allarise/design-system';

export const Checked = () => <ToggleRow label="Enable this alarm" checked />;

export const Unchecked = () => (
  <ToggleRow label="Skip on public holidays" checked={false} />
);

export const OptionList = () => (
  <div>
    <ToggleRow label="Enable this alarm" checked />
    <ToggleRow label="Vibrate" checked />
    <ToggleRow label="Skip on public holidays" checked={false} />
    <ToggleRow label="Announce the weather" checked={false} />
  </div>
);
