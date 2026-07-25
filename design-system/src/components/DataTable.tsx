import * as React from 'react';

export interface DataTableColumn {
  /** Column heading text. */
  header: React.ReactNode;
  /** Key into each row object. */
  key: string;
}

export interface DataTableProps
  extends Omit<React.TableHTMLAttributes<HTMLTableElement>, 'children'> {
  columns: DataTableColumn[];
  /** One object per row, keyed by the columns' `key`. */
  rows: Array<Record<string, React.ReactNode>>;
  /**
   * `rules` is the borderless reference table from the Home Assistant page.
   * `bordered` is the fully gridded table from the privacy page.
   */
  variant?: 'rules' | 'bordered';
  /** Shade alternating rows. Only meaningful with `bordered`. */
  zebra?: boolean;
}

/**
 * The reference table used for entity lists, MQTT command payloads and the
 * privacy data inventory.
 */
export function DataTable({
  columns,
  rows,
  variant = 'rules',
  zebra = false,
  className,
  ...rest
}: DataTableProps) {
  const classes = [
    'data-table',
    `data-table-${variant}`,
    zebra && variant === 'bordered' ? 'data-table-zebra' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <table className={classes} {...rest}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c.key}>{c.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((c) => (
              <td key={c.key}>{row[c.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
