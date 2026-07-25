import * as React from 'react';

export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field label text. */
  label?: React.ReactNode;
  /** Appends a red asterisk to the label. */
  required?: boolean;
  /** Small helper line under the control. */
  hint?: React.ReactNode;
  /** The input, select or textarea. */
  children?: React.ReactNode;
}

/**
 * Label, control and hint stacked as one form row. This is the most-used
 * pattern in the MQTT builder — every payload field is a `FieldGroup`.
 * Pass a plain `<input>`, `<select>` or `<textarea>` as the child; the group's
 * styles apply to it automatically.
 */
export function FieldGroup({
  label,
  required = false,
  hint,
  className,
  children,
  ...rest
}: FieldGroupProps) {
  return (
    <div
      className={['field-group', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {label && (
        <label>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {children}
      {hint && <div className="field-hint">{hint}</div>}
    </div>
  );
}

export interface ToggleRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

/**
 * A checkbox and its label on one line, for the optional flags in a payload.
 */
export function ToggleRow({
  label,
  checked,
  onCheckedChange,
  className,
  ...rest
}: ToggleRowProps) {
  const id = React.useId();
  return (
    <div
      className={['toggle-row', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
