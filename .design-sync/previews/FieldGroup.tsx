import * as React from 'react';
import { FieldGroup, Grid } from '@allarise/design-system';

export const TextInput = () => (
  <FieldGroup label="Alarm label" hint="Shown on the lock screen when it rings.">
    <input type="text" defaultValue="Weekday wake-up" />
  </FieldGroup>
);

export const Required = () => (
  <FieldGroup label="Broker host" required hint="IP address or hostname.">
    <input type="text" defaultValue="192.168.1.10" />
  </FieldGroup>
);

export const Select = () => (
  <FieldGroup label="Sound">
    <select defaultValue="chimes">
      <option value="chimes">Chimes</option>
      <option value="radar">Radar</option>
      <option value="rain">Rain</option>
    </select>
  </FieldGroup>
);

export const Textarea = () => (
  <FieldGroup label="Notes" hint="Optional. Stored on device only.">
    <textarea defaultValue="Skip on public holidays." />
  </FieldGroup>
);

export const FieldRow = () => (
  <Grid variant="row-2">
    <FieldGroup label="Hour">
      <input type="number" defaultValue={6} />
    </FieldGroup>
    <FieldGroup label="Minute">
      <input type="number" defaultValue={30} />
    </FieldGroup>
  </Grid>
);
