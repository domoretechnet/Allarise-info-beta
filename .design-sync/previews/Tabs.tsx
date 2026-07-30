import * as React from 'react';
import { Tabs } from '@allarise/design-system';

const TABS = [
  { id: 'index', label: 'By index' },
  { id: 'name', label: 'By name' },
];

export const FirstSelected = () => <Tabs tabs={TABS} value="index" />;

export const SecondSelected = () => <Tabs tabs={TABS} value="name" />;

export const ThreeTabs = () => (
  <Tabs
    tabs={[
      { id: 'json', label: 'JSON' },
      { id: 'yaml', label: 'YAML' },
      { id: 'curl', label: 'cURL' },
    ]}
    value="yaml"
  />
);

export const WithPanel = () => {
  const [tab, setTab] = React.useState('index');
  return (
    <div>
      <Tabs tabs={TABS} value={tab} onChange={setTab} />
      <p style={{ fontSize: 15, margin: 0 }}>
        {tab === 'index'
          ? 'Address the alarm by its position in the list.'
          : 'Address the alarm by its label — stable when the list reorders.'}
      </p>
    </div>
  );
};
