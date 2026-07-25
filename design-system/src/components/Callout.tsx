import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic tone. `tip` is the Home Assistant cyan, `warn` the amber caution
   * box, `note` the neutral surface box, and `success` / `danger` the green and
   * red boxes used on the privacy and what's-new pages.
   */
  tone?: 'note' | 'tip' | 'warn' | 'success' | 'danger';
  /** Leading glyph. Defaults to a sensible emoji for the tone. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const DEFAULT_ICON: Record<string, string> = {
  note: 'ℹ️',
  tip: '💡',
  warn: '⚠️',
  success: '✅',
  danger: '🚫',
};

/**
 * An inline aside that breaks up long instructional copy — the tip, caution and
 * note boxes used throughout the Home Assistant setup guide and the legal pages.
 */
export function Callout({
  tone = 'note',
  icon,
  className,
  children,
  ...rest
}: CalloutProps) {
  return (
    <div
      className={['callout', `callout-${tone}`, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <span className="callout-icon">{icon ?? DEFAULT_ICON[tone]}</span>
      <div className="callout-body">{children}</div>
    </div>
  );
}
