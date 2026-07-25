import * as React from 'react';

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Small uppercase accent label above the title. */
  label?: React.ReactNode;
  title: React.ReactNode;
  /** Standfirst paragraph under the title. */
  description?: React.ReactNode;
  /**
   * `default` is the 40px display header on the documentation and legal pages.
   * `compact` is the 24px header used inside the MQTT builder's app shell.
   */
  size?: 'default' | 'compact';
}

/**
 * The opening block of a long-form page — the Home Assistant guide, the privacy
 * policy, the terms. Unlike `Hero` it is left-aligned and carries no icon.
 */
export function PageHeader({
  label,
  title,
  description,
  size = 'default',
  className,
  ...rest
}: PageHeaderProps) {
  return (
    <header
      className={[
        'page-header',
        size === 'compact' ? 'page-header-compact' : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {label && <div className="ph-label">{label}</div>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
