import * as React from 'react';

export interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onCopy'> {
  /** The text written to the clipboard when pressed. */
  value: string;
  /** Idle label. */
  label?: string;
  /** Label shown for a moment after a successful copy. */
  copiedLabel?: string;
  /**
   * `ghost` is the bare accent-coloured link used inside a CodeBlock header.
   * `solid` is the filled blue pill used above the MQTT builder's JSON preview.
   */
  variant?: 'ghost' | 'solid';
}

/**
 * Copies a snippet to the clipboard and confirms it inline. Both treatments
 * from the site are available: the bare link that sits in a code-block header
 * and the filled pill that sits above a generated payload.
 */
export function CopyButton({
  value,
  label = 'Copy',
  copiedLabel = 'Copied',
  variant = 'ghost',
  className,
  ...rest
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const classes = [
    'copy-btn',
    `copy-btn-${variant}`,
    copied ? 'copied' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
      }}
      {...rest}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
