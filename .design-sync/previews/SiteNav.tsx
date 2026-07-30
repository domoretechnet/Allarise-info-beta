import * as React from 'react';
import { SiteNav } from '@allarise/design-system';

const LINKS = [
  { label: 'Home Assistant', href: '#ha' },
  { label: 'MQTT Builder', href: '#mqtt' },
  { label: 'FAQ', href: '#faq' },
  { label: "What's New", href: '#new' },
];

export const Default = () => <SiteNav iconLight="" links={LINKS} />;

export const WithActivePage = () => (
  <SiteNav
    iconLight=""
    links={LINKS.map((l) => (l.href === '#faq' ? { ...l, active: true } : l))}
  />
);

export const BrandOnly = () => <SiteNav iconLight="" links={[]} />;
