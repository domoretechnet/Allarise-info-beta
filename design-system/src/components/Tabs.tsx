import * as React from 'react';

export interface TabItem {
  /** Stable identifier for the tab. */
  id: string;
  label: string;
}

export interface TabsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  /** Id of the active tab. */
  value?: string;
  onChange?: (id: string) => void;
}

/**
 * The underlined tab bar from the MQTT builder, used to switch between two
 * addressing modes for the same command.
 */
export function Tabs({
  tabs,
  value,
  onChange,
  className,
  ...rest
}: TabsProps) {
  const active = value ?? tabs[0]?.id;
  return (
    <div
      className={['tab-bar', className].filter(Boolean).join(' ')}
      role="tablist"
      {...rest}
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          aria-selected={t.id === active}
          className={t.id === active ? 'tab-btn active' : 'tab-btn'}
          onClick={() => onChange?.(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
