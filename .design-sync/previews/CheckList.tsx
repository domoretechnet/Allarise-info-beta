import * as React from 'react';
import { CheckList } from '@allarise/design-system';

export const NeverCollected = () => (
  <CheckList
    items={[
      'Your name',
      'Your email',
      'Precise location',
      'Contacts',
      'Advertising ID',
      'Browsing history',
    ]}
  />
);

export const ShortList = () => (
  <CheckList items={['No ads', 'No account', 'No tracking']} />
);
