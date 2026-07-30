import * as React from 'react';
import { CopyButton } from '@allarise/design-system';

export const Ghost = () => (
  <CopyButton value="allarise/alarm/set" variant="ghost" />
);

export const Solid = () => (
  <CopyButton value='{"command":"set_alarm"}' variant="solid" />
);

export const CustomLabel = () => (
  <CopyButton value="mqtt://192.168.1.10:1883" variant="solid" label="Copy topic" />
);

export const InCodeHeader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--border)',
      padding: '6px 14px',
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
    }}
  >
    <span>configuration.yaml</span>
    <CopyButton value="mqtt:\n  broker: 192.168.1.10" variant="ghost" />
  </div>
);
