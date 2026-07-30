import * as React from 'react';
import { DayPicker, FieldGroup } from '@allarise/design-system';

export const Weekdays = () => (
  <DayPicker value={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} />
);

export const Weekend = () => <DayPicker value={['Sat', 'Sun']} />;

export const NoneSelected = () => <DayPicker value={[]} />;

export const InField = () => (
  <FieldGroup label="Repeat" hint="Leave empty for a one-off alarm.">
    <DayPicker value={['Mon', 'Wed', 'Fri']} />
  </FieldGroup>
);
