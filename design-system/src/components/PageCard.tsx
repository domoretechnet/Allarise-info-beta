import * as React from 'react';

export interface PageCardProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'title'> {
  /** Emoji or icon shown at the top of the card. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  /** One or two sentences describing where the link goes. */
  description?: React.ReactNode;
  /** Text of the accent-coloured action row at the bottom. */
  linkLabel?: string;
}

/**
 * A large clickable card that links to another page in the site — the grid of
 * destinations on the home page (FAQ, Home Assistant guide, MQTT builder).
 * Hovering lifts the border to the accent colour.
 */
export function PageCard({
  icon,
  title,
  description,
  linkLabel = 'Open',
  className,
  ...rest
}: PageCardProps) {
  return (
    <a
      className={['page-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon && <span className="pc-icon">{icon}</span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <span className="pc-link">{linkLabel} →</span>
    </a>
  );
}
