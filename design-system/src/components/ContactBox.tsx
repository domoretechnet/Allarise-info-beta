import * as React from 'react';

export interface ContactBoxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * The centred "still need help?" panel that closes the FAQ and legal pages,
 * holding a support email or contact link.
 */
export function ContactBox({
  title,
  className,
  children,
  ...rest
}: ContactBoxProps) {
  return (
    <div
      className={['contact-box', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <h2>{title}</h2>
      {children}
    </div>
  );
}
