import * as React from 'react';
import { StepBlock, CodeBlock, Callout, InlineCode } from '@allarise/design-system';

export const InstallStep = () => (
  <StepBlock step={1} title="Install the integration">
    <p>
      Add the Allarise repository to HACS, install the integration, then restart
      Home Assistant.
    </p>
    <ol>
      <li>Open HACS and choose Integrations.</li>
      <li>Add a custom repository pointing at the Allarise repo.</li>
      <li>Install, then restart Home Assistant.</li>
    </ol>
  </StepBlock>
);

export const WithCode = () => (
  <StepBlock step={2} title="Configure MQTT">
    <p>
      Point Allarise at the same broker Home Assistant uses, then enable
      discovery.
    </p>
    <CodeBlock
      label="configuration.yaml"
      code={`mqtt:
  broker: 192.168.1.10
  port: 1883
  discovery: true`}
    />
  </StepBlock>
);

export const WithCallout = () => (
  <StepBlock step={3} title="Verify the entities">
    <p>
      Open Developer Tools and confirm{' '}
      <InlineCode>sensor.allarise_next_alarm</InlineCode> exists.
    </p>
    <Callout tone="warn">
      If the entity is missing, check that discovery is enabled on the broker.
    </Callout>
  </StepBlock>
);
