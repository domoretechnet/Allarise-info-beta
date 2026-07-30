import * as React from 'react';
import { TableOfContents } from '@allarise/design-system';

export const GuideToc = () => (
  <TableOfContents
    groups={[
      {
        title: 'Setup',
        numbered: true,
        entries: [
          { label: 'Install the integration', href: '#install' },
          { label: 'Configure MQTT', href: '#mqtt' },
          { label: 'Verify the entities', href: '#verify' },
        ],
      },
      {
        title: 'Reference',
        entries: [
          { label: 'Entities', href: '#entities' },
          { label: 'Commands', href: '#commands' },
          { label: 'Troubleshooting', href: '#trouble' },
        ],
      },
    ]}
  />
);

export const SingleGroup = () => (
  <TableOfContents
    groups={[
      {
        title: 'On this page',
        entries: [
          { label: 'What we collect', href: '#collect' },
          { label: 'What we never collect', href: '#never' },
          { label: 'Third parties', href: '#third' },
        ],
      },
    ]}
  />
);
