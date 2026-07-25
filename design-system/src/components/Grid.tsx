import * as React from 'react';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which grid rhythm to use:
   * `features` (260px min) for FeatureCard, `pages` (280px min) for PageCard,
   * `tiles` (200px min) for FeatureTile, `two-col` for an even split, and
   * `row-2` / `row-3` for tight form field rows.
   */
  variant?: 'features' | 'pages' | 'tiles' | 'two-col' | 'row-2' | 'row-3';
  children?: React.ReactNode;
}

const CLASS: Record<string, string> = {
  features: 'features',
  pages: 'pages-grid',
  tiles: 'wyg-grid',
  'two-col': 'two-col',
  'row-2': 'row-2',
  'row-3': 'row-3',
};

/**
 * The responsive grids the card components are designed to sit in. Every
 * variant collapses to a single column on narrow screens.
 */
export function Grid({
  variant = 'features',
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <div
      className={[CLASS[variant], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
