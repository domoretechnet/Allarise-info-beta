import * as React from 'react';

const DEFAULT_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export interface DayPickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Day labels, in display order. */
  days?: string[];
  /** Currently selected day labels. */
  value?: string[];
  onChange?: (days: string[]) => void;
}

/**
 * The row of toggleable day pills used to pick which days an alarm repeats on.
 * Selected pills fill with a tinted accent wash.
 */
export function DayPicker({
  days = DEFAULT_DAYS,
  value = [],
  onChange,
  className,
  ...rest
}: DayPickerProps) {
  const toggle = (day: string) => {
    const next = value.includes(day)
      ? value.filter((d) => d !== day)
      : [...value, day];
    onChange?.(next);
  };

  return (
    <div
      className={['days-picker', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {days.map((d) => (
        <button
          key={d}
          type="button"
          aria-pressed={value.includes(d)}
          className={value.includes(d) ? 'day-btn selected' : 'day-btn'}
          onClick={() => toggle(d)}
        >
          {d}
        </button>
      ))}
    </div>
  );
}
