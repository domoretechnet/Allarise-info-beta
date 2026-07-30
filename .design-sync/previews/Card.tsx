import * as React from 'react';
import { Card, FieldGroup, CopyButton } from '@allarise/design-system';

export const WithTitle = () => (
  <Card title="Alarm settings">
    <FieldGroup label="Label">
      <input type="text" defaultValue="Weekday wake-up" />
    </FieldGroup>
    <FieldGroup label="Time" hint="24-hour clock.">
      <input type="text" defaultValue="06:30" />
    </FieldGroup>
  </Card>
);

export const WithAction = () => (
  <Card
    title="Generated payload"
    action={<CopyButton value='{"command":"set_alarm"}' variant="solid" />}
  >
    <pre style={{ margin: 0, fontSize: 12 }}>
      {'{\n  "command": "set_alarm",\n  "time": "06:30"\n}'}
    </pre>
  </Card>
);

export const Plain = () => (
  <Card>
    <p style={{ margin: 0, fontSize: 15 }}>
      A bare surface panel with no title — used to group related controls.
    </p>
  </Card>
);
