import * as React from 'react';
import { Accordion, AccordionItem } from '@allarise/design-system';

// AccordionItem is only ever rendered inside an Accordion, so each cell shows
// the real parent composition.

export const Open = () => (
  <Accordion>
    <AccordionItem question="Will Allarise ring if my phone is on silent?" defaultOpen>
      <p>
        Yes. Allarise plays at the volume you set, independent of your ringer
        and the mute switch.
      </p>
    </AccordionItem>
  </Accordion>
);

export const Closed = () => (
  <Accordion>
    <AccordionItem question="Do I need Home Assistant to use Allarise?">
      <p>No. Home Assistant is optional.</p>
    </AccordionItem>
  </Accordion>
);

export const LongAnswer = () => (
  <Accordion>
    <AccordionItem question="How does the MQTT integration stay private?" defaultOpen>
      <p>
        Your broker credentials are stored in the iOS keychain and never leave
        the device. Allarise connects directly to your broker — there is no
        Allarise server in the path.
      </p>
      <p>
        If you disable MQTT, the stored credentials are removed along with it.
      </p>
    </AccordionItem>
  </Accordion>
);
