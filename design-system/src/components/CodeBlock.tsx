import * as React from 'react';
import { CopyButton } from './CopyButton';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase label in the header strip, e.g. `YAML` or `configuration.yaml`. */
  label?: string;
  /** The code itself. */
  code: string;
  /** Show the copy control in the header. */
  copyable?: boolean;
}

/**
 * A labelled, copyable code block — the dark `pre` with a header strip used for
 * every YAML and JSON snippet in the Home Assistant guide.
 */
export function CodeBlock({
  label,
  code,
  copyable = true,
  className,
  ...rest
}: CodeBlockProps) {
  return (
    <div
      className={['code-wrap', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {(label || copyable) && (
        <div className="code-label">
          <span>{label}</span>
          {copyable && <CopyButton value={code} variant="ghost" />}
        </div>
      )}
      <pre>{code}</pre>
    </div>
  );
}

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

/**
 * Inline monospace token for entity ids, filenames and MQTT topics inside prose.
 */
export function InlineCode({ className, children, ...rest }: InlineCodeProps) {
  return (
    <code
      className={['code-inline', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </code>
  );
}
