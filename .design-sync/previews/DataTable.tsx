import * as React from 'react';
import { DataTable, Badge, InlineCode } from '@allarise/design-system';

export const EntityReference = () => (
  <DataTable
    variant="rules"
    columns={[
      { header: 'Entity', key: 'entity' },
      { header: 'Type', key: 'type' },
      { header: 'Description', key: 'desc' },
    ]}
    rows={[
      {
        entity: <InlineCode>sensor.allarise_next_alarm</InlineCode>,
        type: 'Sensor',
        desc: 'Timestamp of the next scheduled alarm.',
      },
      {
        entity: <InlineCode>binary_sensor.allarise_ringing</InlineCode>,
        type: 'Binary sensor',
        desc: 'On while an alarm is sounding.',
      },
      {
        entity: <InlineCode>switch.allarise_alarm_1</InlineCode>,
        type: 'Switch',
        desc: 'Enable or disable the first alarm.',
      },
    ]}
  />
);

export const PrivacyInventory = () => (
  <DataTable
    variant="bordered"
    zebra
    columns={[
      { header: 'Data', key: 'data' },
      { header: 'Where it lives', key: 'where' },
      { header: 'Purpose', key: 'why' },
    ]}
    rows={[
      {
        data: 'Alarm times and labels',
        where: <Badge tone="local">On device</Badge>,
        why: 'Scheduling alarms.',
      },
      {
        data: 'MQTT credentials',
        where: <Badge tone="local">On device</Badge>,
        why: 'Connecting to your broker.',
      },
      {
        data: 'Location (coarse)',
        where: <Badge tone="optin">Opt-in</Badge>,
        why: 'Morning weather forecast.',
      },
      {
        data: 'Crash diagnostics',
        where: <Badge tone="neutral">Apple</Badge>,
        why: 'Only if you share them with Apple.',
      },
    ]}
  />
);

export const CommandList = () => (
  <DataTable
    variant="rules"
    columns={[
      { header: 'Command', key: 'cmd' },
      { header: 'Payload', key: 'payload' },
    ]}
    rows={[
      { cmd: <InlineCode>set_alarm</InlineCode>, payload: 'time, days, enabled' },
      { cmd: <InlineCode>dismiss</InlineCode>, payload: '—' },
      { cmd: <InlineCode>snooze</InlineCode>, payload: 'minutes' },
    ]}
  />
);
