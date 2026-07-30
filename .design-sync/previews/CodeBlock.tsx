import * as React from 'react';
import { CodeBlock } from '@allarise/design-system';

export const Yaml = () => (
  <CodeBlock
    label="configuration.yaml"
    code={`mqtt:
  broker: 192.168.1.10
  port: 1883
  username: allarise
  discovery: true`}
  />
);

export const JsonPayload = () => (
  <CodeBlock
    label="payload"
    code={`{
  "command": "set_alarm",
  "time": "06:30",
  "days": ["Mon", "Tue", "Wed"],
  "enabled": true
}`}
  />
);

export const Automation = () => (
  <CodeBlock
    label="automation.yaml"
    code={`trigger:
  - platform: state
    entity_id: sensor.allarise_next_alarm
action:
  - service: light.turn_on
    target:
      entity_id: light.bedroom`}
  />
);

export const WithoutCopy = () => (
  <CodeBlock label="topic" copyable={false} code="allarise/alarm/set" />
);
