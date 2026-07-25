import * as React from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  /** Small pill on the right of the row, e.g. a count or "NEW". */
  badge?: string;
}

export interface SidebarGroup {
  /** Uppercase group heading. Omit for an ungrouped run of items. */
  label?: string;
  items: SidebarItem[];
}

export interface SidebarNavProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Uppercase heading at the very top of the sidebar. */
  title?: string;
  groups: SidebarGroup[];
  /** Id of the selected item. */
  value?: string;
  onChange?: (id: string) => void;
}

/**
 * The left navigation rail of the MQTT builder — grouped command links with an
 * accent left-border marking the current selection.
 */
export function SidebarNav({
  title,
  groups,
  value,
  onChange,
  className,
  ...rest
}: SidebarNavProps) {
  return (
    <nav
      className={['sidebar', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {title && <div className="sidebar-title">{title}</div>}
      {groups.map((g, gi) => (
        <div className="nav-group" key={g.label ?? gi}>
          {g.label && <div className="nav-group-label">{g.label}</div>}
          {g.items.map((it) => (
            <button
              key={it.id}
              type="button"
              className={it.id === value ? 'nav-item active' : 'nav-item'}
              onClick={() => onChange?.(it.id)}
            >
              {it.label}
              {it.badge && <span className="nav-item-badge">{it.badge}</span>}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}
