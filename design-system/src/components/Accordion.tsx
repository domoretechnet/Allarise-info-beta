import * as React from 'react';

export interface AccordionItemProps {
  /** The clickable question text. */
  question: React.ReactNode;
  /** Answer body, revealed when open. */
  children?: React.ReactNode;
  /** Render initially expanded. */
  defaultOpen?: boolean;
}

/**
 * One question-and-answer row. The chevron rotates when the row is open.
 * Use inside `Accordion`.
 */
export function AccordionItem({
  question,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={open ? 'faq-item open' : 'faq-item'}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {question}
        <svg
          className="faq-chevron"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="faq-answer">{children}</div>
    </div>
  );
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * The expand-and-collapse list that makes up the whole FAQ page. Group items
 * under a `SectionDivider` or category label when there are many.
 */
export function Accordion({ className, children, ...rest }: AccordionProps) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}
