import * as React from 'react';
import { Badge } from '@allarise/design-system';

const Row: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    {children}
  </div>
);

export const DataResidency = () => (
  <Row>
    <Badge tone="local">On device</Badge>
    <Badge tone="remote">Leaves device</Badge>
    <Badge tone="optin">Opt-in</Badge>
    <Badge tone="neutral">Apple</Badge>
  </Row>
);

export const AllTones = () => (
  <Row>
    <Badge tone="local">Local</Badge>
    <Badge tone="remote">Remote</Badge>
    <Badge tone="optin">Opt-in</Badge>
    <Badge tone="neutral">Neutral</Badge>
    <Badge tone="accent">Accent</Badge>
  </Row>
);

export const InTableCell = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14 }}>
    <span>Alarm times</span>
    <Badge tone="local">On device</Badge>
  </div>
);
