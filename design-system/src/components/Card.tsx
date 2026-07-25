import * as React from 'react';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Small uppercase label above the card body. */
  title?: React.ReactNode;
  /** Optional control rendered on the title row, right-aligned. */
  action?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * The general-purpose surface panel — a bordered, rounded box on the surface
 * colour. This is the workhorse container in the MQTT builder, where each group
 * of form fields sits in one.
 */
export function Card({
  title,
  action,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div className={['card', className].filter(Boolean).join(' ')} {...rest}>
      {(title || action) &&
        (action ? (
          <div className="preview-header">
            <div className="card-title">{title}</div>
            {action}
          </div>
        ) : (
          <div className="card-title">{title}</div>
        ))}
      {children}
    </div>
  );
}
