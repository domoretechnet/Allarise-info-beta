import * as React from 'react';

export interface StepBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The number shown in the accent circle. */
  step: number | string;
  title: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * One numbered step of a setup walkthrough: a circled number and heading above
 * a surface panel holding the instructions. The Home Assistant guide is a
 * sequence of these.
 */
export function StepBlock({
  step,
  title,
  className,
  children,
  ...rest
}: StepBlockProps) {
  return (
    <div
      className={['step-block', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div className="step-header">
        <span className="step-badge">{step}</span>
        <h2>{title}</h2>
      </div>
      <div className="step-body">{children}</div>
    </div>
  );
}
