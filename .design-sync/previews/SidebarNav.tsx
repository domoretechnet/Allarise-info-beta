import * as React from 'react';
import { SidebarNav } from '@allarise/design-system';

const GROUPS = [
  {
    label: 'Alarms',
    items: [
      { id: 'set', label: 'Set alarm' },
      { id: 'dismiss', label: 'Dismiss' },
      { id: 'snooze', label: 'Snooze' },
    ],
  },
  {
    label: 'Sounds',
    items: [
      { id: 'play', label: 'Play sound', badge: 'New' },
      { id: 'stop', label: 'Stop sound' },
    ],
  },
];

export const Default = () => (
  <SidebarNav title="Commands" groups={GROUPS} value="set" />
);

export const DifferentSelection = () => (
  <SidebarNav title="Commands" groups={GROUPS} value="play" />
);

export const Ungrouped = () => (
  <SidebarNav
    groups={[
      {
        items: [
          { id: 'a', label: 'Overview' },
          { id: 'b', label: 'Entities' },
          { id: 'c', label: 'Troubleshooting' },
        ],
      },
    ]}
    value="b"
  />
);
