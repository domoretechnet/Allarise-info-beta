import * as React from 'react';
import { Accordion, AccordionItem } from '@allarise/design-system';

export const FaqList = () => (
  <Accordion>
    <AccordionItem
      question="Will Allarise ring if my phone is on silent?"
      defaultOpen
    >
      <p>
        Yes. Allarise plays at the volume you set, independent of your ringer
        and the mute switch.
      </p>
    </AccordionItem>
    <AccordionItem question="Do I need Home Assistant to use Allarise?">
      <p>
        No. Home Assistant is optional — every alarm feature works on its own.
      </p>
    </AccordionItem>
    <AccordionItem question="Does Allarise require an account?">
      <p>
        No account, no ads, no tracking. Your alarms stay on your device.
      </p>
    </AccordionItem>
  </Accordion>
);

export const SingleOpen = () => (
  <Accordion>
    <AccordionItem question="What is a wake-up mission?" defaultOpen>
      <p>
        A task you complete to dismiss the alarm — solve a math problem, shake
        your phone, or trigger a Home Assistant action.
      </p>
    </AccordionItem>
  </Accordion>
);

export const Collapsed = () => (
  <Accordion>
    <AccordionItem question="Which entities does the integration expose?">
      <p>Sensors for the next alarm, plus switches for each configured alarm.</p>
    </AccordionItem>
    <AccordionItem question="How do I send an MQTT command?">
      <p>Publish a JSON payload to the topic shown in the builder.</p>
    </AccordionItem>
  </Accordion>
);
