import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Semantic colour. The privacy table uses `local` / `remote` / `optin` /
   * `neutral`; `success` / `danger` / `warning` are aliases for the same
   * treatments when the meaning isn't data residency.
   */
  tone?:
    | 'local'
    | 'remote'
    | 'optin'
    | 'neutral'
    | 'accent'
    | 'success'
    | 'danger'
    | 'warning';
  children?: React.ReactNode;
}

/**
 * A small status chip. Used throughout the privacy page to mark whether a
 * piece of data stays on-device, leaves the device, or is opt-in.
 */
export function Badge({
  tone = 'neutral',
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={['badge', `badge-${tone}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}

export interface TagPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/**
 * The tiny uppercase pill that trails a feature name to mark it PRO or FREE.
 * Sits inline with the heading it annotates.
 */
export function TagPill({ className, children, ...rest }: TagPillProps) {
  return (
    <span
      className={['tag-pill', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </span>
  );
}
