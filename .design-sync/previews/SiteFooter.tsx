import * as React from 'react';
import { SiteFooter } from '@allarise/design-system';

export const Default = () => (
  <SiteFooter
    links={[
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Support', href: '#support' },
    ]}
  >
    © 2026 DoMore Tech LLC. All rights reserved.
  </SiteFooter>
);

export const LinksOnly = () => (
  <SiteFooter
    links={[
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
    ]}
  />
);

export const TextOnly = () => (
  <SiteFooter>© 2026 DoMore Tech LLC.</SiteFooter>
);
