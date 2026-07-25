import * as React from 'react';
import { Button } from '@allarise/design-system';

export const Primary = () => (
  <Button href="#" variant="primary">
    Download on the App Store
  </Button>
);

export const Secondary = () => (
  <Button href="#" variant="secondary">
    Read the setup guide
  </Button>
);

export const WithIcon = () => (
  <Button href="#" variant="primary" icon={<span>🏠</span>}>
    Connect Home Assistant
  </Button>
);

export const CtaRow = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Button href="#" variant="primary">
      Download on the App Store
    </Button>
    <Button href="#" variant="secondary">
      See what's new
    </Button>
  </div>
);

export const Small = () => (
  <Button href="#" variant="secondary" size="sm">
    Copy YAML
  </Button>
);
