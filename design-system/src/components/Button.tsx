import * as React from 'react';

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual weight. `primary` is the filled blue pill, `secondary` the bordered surface pill. */
  variant?: 'primary' | 'secondary';
  /** Compact sizing for buttons inside dense UI such as card headers. */
  size?: 'md' | 'sm';
  /** Optional leading glyph or icon, rendered before the label. */
  icon?: React.ReactNode;
  /** Renders a `<button>` instead of an `<a>`. Use when there is no destination. */
  as?: 'a' | 'button';
  children?: React.ReactNode;
}

/**
 * The pill-shaped call to action used across the Allarise site — the App Store
 * and documentation links in the home hero, and the primary action in any
 * section footer.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  as = 'a',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size === 'sm' ? 'btn-sm' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if (as === 'button') {
    const { href, target, rel, ...buttonRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <button
        type="button"
        className={classes}
        {...(buttonRest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }

  return (
    <a className={classes} {...rest}>
      {content}
    </a>
  );
}
