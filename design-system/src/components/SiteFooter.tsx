import * as React from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  links?: FooterLink[];
  /** Copyright or attribution line under the links. */
  children?: React.ReactNode;
}

/**
 * The centred page footer: a row of secondary links above a small copyright
 * line, separated from the page by a top rule.
 */
export function SiteFooter({
  links = [],
  className,
  children,
  ...rest
}: SiteFooterProps) {
  return (
    <footer
      className={['site-footer', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {links.length > 0 && (
        <div className="footer-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      {children}
    </footer>
  );
}
