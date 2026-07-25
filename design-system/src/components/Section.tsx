import * as React from 'react';

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** Small uppercase accent label above the heading. */
  label?: React.ReactNode;
  title?: React.ReactNode;
  /** Introductory paragraph under the heading. */
  lead?: React.ReactNode;
  /** Fill the section with the surface colour to separate it from its neighbours. */
  altBackground?: boolean;
  children?: React.ReactNode;
}

/**
 * A full-width band of page content with the standard label / heading / lead
 * stack and a centred max-width inner column. Alternating `altBackground`
 * between sections is how the home page creates rhythm.
 */
export function Section({
  label,
  title,
  lead,
  altBackground = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={['section', altBackground ? 'alt-bg' : null, className]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      <div className="section-inner">
        {label && <div className="section-label">{label}</div>}
        {title && <h2>{title}</h2>}
        {lead && <p className="lead">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export interface SectionDividerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase label sitting to the left of the rule. */
  label: React.ReactNode;
}

/**
 * A labelled horizontal rule that separates major groups of content on the
 * long-form pages.
 */
export function SectionDivider({
  label,
  className,
  ...rest
}: SectionDividerProps) {
  return (
    <div
      className={['section-label-divider', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="sld-label">{label}</span>
      <hr />
    </div>
  );
}
