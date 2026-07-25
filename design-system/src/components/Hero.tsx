import * as React from 'react';

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Light-mode app icon URL. */
  iconLight?: string;
  /** Dark-mode app icon URL. Falls back to `iconLight`. */
  iconDark?: string;
  title: React.ReactNode;
  /** Supporting line under the title. */
  tagline?: React.ReactNode;
  /**
   * `full` is the home page treatment — 120px icon, 44px title, CTA row.
   * `compact` is the smaller header used by the FAQ and What's New pages.
   */
  size?: 'full' | 'compact';
  /** Call-to-action buttons, rendered in a centred row. */
  actions?: React.ReactNode;
}

/**
 * The centred page opener: app icon, headline, tagline, and an optional row of
 * call-to-action buttons.
 */
export function Hero({
  iconLight = 'app-icon.png',
  iconDark,
  title,
  tagline,
  size = 'full',
  actions,
  className,
  ...rest
}: HeroProps) {
  return (
    <header
      className={['hero', size === 'compact' ? 'hero-compact' : null, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {iconLight && (
        <div className="icon-wrap">
          <img className="icon-light" src={iconLight} alt="" />
          <img className="icon-dark" src={iconDark ?? iconLight} alt="" />
        </div>
      )}
      <h1>{title}</h1>
      {tagline && <p className="tagline">{tagline}</p>}
      {actions && <div className="cta-group">{actions}</div>}
    </header>
  );
}
