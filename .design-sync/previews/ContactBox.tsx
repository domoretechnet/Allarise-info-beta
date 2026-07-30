import * as React from 'react';
import { ContactBox } from '@allarise/design-system';

export const StillStuck = () => (
  <ContactBox title="Still stuck?">
    <p>
      Email <a href="#">support@allarise.app</a> and we'll get back to you.
    </p>
  </ContactBox>
);

export const LegalContact = () => (
  <ContactBox title="Questions about this policy?">
    <p>
      Write to <a href="#">privacy@allarise.app</a>.
    </p>
  </ContactBox>
);
