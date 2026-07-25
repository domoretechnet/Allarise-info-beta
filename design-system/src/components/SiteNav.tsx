import * as React from 'react';

export interface NavLink {
  label: string;
  href: string;
  /** Marks the current page — renders in the accent colour. */
  active?: boolean;
}

export interface SiteNavProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark text next to the app icon. */
  brand?: string;
  /** Light-mode app icon URL. */
  iconLight?: string;
  /** Dark-mode app icon URL. Falls back to `iconLight` when omitted. */
  iconDark?: string;
  /** Destination of the wordmark. */
  homeHref?: string;
  links?: NavLink[];
}

/**
 * The sticky top bar shared by every page: app icon and wordmark on the left,
 * page links on the right, collapsing to a hamburger menu under 600px.
 */
export function SiteNav({
  brand = 'Allarise',
  iconLight = 'app-icon.png',
  iconDark,
  homeHref = 'index.html',
  links = [],
  className,
  ...rest
}: SiteNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <nav
      className={['site-nav', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <a className="nav-home" href={homeHref}>
        <img className="icon-light" src={iconLight} alt="" />
        <img className="icon-dark" src={iconDark ?? iconLight} alt="" />
        <span>{brand}</span>
      </a>

      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className={l.active ? 'nav-active' : undefined}
        >
          {l.label}
        </a>
      ))}

      <button
        type="button"
        className="nav-menu-btn"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ☰
      </button>

      <div className={open ? 'nav-dropdown open' : 'nav-dropdown'}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={l.active ? 'nav-active' : undefined}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
