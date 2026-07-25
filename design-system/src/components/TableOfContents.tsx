import * as React from 'react';

export interface TocEntry {
  label: string;
  href: string;
}

export interface TocGroup {
  /** Uppercase group heading. */
  title: string;
  entries: TocEntry[];
  /** Show a numbered accent circle before each entry. */
  numbered?: boolean;
}

export interface TableOfContentsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  groups: TocGroup[];
}

/**
 * The two-column jump list at the top of a long guide. Numbered groups get an
 * accent circle per entry, matching the step numbers further down the page.
 */
export function TableOfContents({
  groups,
  className,
  ...rest
}: TableOfContentsProps) {
  return (
    <div
      className={['toc-inner', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {groups.map((g) => (
        <div className="toc-group" key={g.title}>
          <p>{g.title}</p>
          <ul>
            {g.entries.map((e, i) => (
              <li key={e.href}>
                <a href={e.href}>
                  {g.numbered && <span className="step-num">{i + 1}</span>}
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
