import * as React from 'react';
import { SectionDivider } from '@allarise/design-system';

export const Reference = () => <SectionDivider label="Reference" />;

export const Setup = () => <SectionDivider label="Setup steps" />;

export const BetweenContent = () => (
  <div>
    <p style={{ fontSize: 15, marginBottom: 24 }}>
      Finish installing the integration before continuing.
    </p>
    <SectionDivider label="Entity reference" />
    <p style={{ fontSize: 15 }}>
      These entities appear once Home Assistant restarts.
    </p>
  </div>
);
