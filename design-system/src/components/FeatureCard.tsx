import * as React from 'react';

export interface FeatureCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Emoji or icon node shown above the title. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  /** Supporting sentence beneath the title. */
  description?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * A single capability in the home page's feature grid: icon, short title, and
 * one line of supporting copy. Place several inside a `Grid` with `variant="features"`.
 */
export function FeatureCard({
  icon,
  title,
  description,
  className,
  children,
  ...rest
}: FeatureCardProps) {
  return (
    <div
      className={['feature-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon && <span className="f-icon">{icon}</span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}

export interface FeatureTileProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}

/**
 * The denser "what you get" tile from the Home Assistant page — same idea as
 * `FeatureCard` but smaller type on the surface colour, for listing many
 * entities or capabilities at once.
 */
export function FeatureTile({
  icon,
  title,
  description,
  className,
  ...rest
}: FeatureTileProps) {
  return (
    <div
      className={['wyg-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {icon && <span className="wyg-icon">{icon}</span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}
