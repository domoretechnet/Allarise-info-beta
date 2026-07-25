import * as React from 'react';

export interface CheckListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One label per tile. */
  items: React.ReactNode[];
  /** The glyph shown before each label. */
  mark?: React.ReactNode;
}

/**
 * A grid of small ticked tiles. The privacy page uses it for the "we never
 * collect this" inventory, where every row is a reassurance rather than a link.
 */
export function CheckList({
  items,
  mark = '✓',
  className,
  ...rest
}: CheckListProps) {
  return (
    <div
      className={['check-list', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {items.map((item, i) => (
        <div className="item" key={i}>
          <span className="check">{mark}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export interface PrivacyStripProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * The green reassurance banner at the foot of the home page — a green-tinted
 * strip stating that alarm data stays on the device.
 */
export function PrivacyStrip({
  icon = '🔒',
  className,
  children,
  ...rest
}: PrivacyStripProps) {
  return (
    <div
      className={['privacy-strip', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="ps-icon">{icon}</span>
      <div className="ps-body">{children}</div>
    </div>
  );
}
