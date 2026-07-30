# Allarise design system — how to build with it

Extracted from the beta.allarise.app pages. Apple-adjacent: white/near-black
surfaces, one blue accent, pill buttons, 16px-radius cards, system font stack.

## Setup

**No provider, no theme object, no wrapper.** Import components and render them.
`styles.css` is already loaded for you; it `@import`s `_ds_bundle.css`, which
carries the tokens, a `body` base rule (system sans, `--bg`, `--text`), and every
component's styles.

Themes come from CSS only. Light/dark follow `prefers-color-scheme`
automatically; force one by setting `data-theme="light"` or `data-theme="dark"`
on `<html>`. Never hardcode a hex — every colour below flips with the theme.

## Styling idiom: tokens + the site's own class names

Components style themselves. For **your own layout glue**, use these exact
`var(--*)` tokens and, where a pattern already exists, these exact class names.
Both are real: everything listed here is defined in `_ds_bundle.css`.

**Colour** — `--bg` `--surface` `--surface-2` `--border` `--text`
`--text-secondary` `--text-tertiary` `--accent` `--accent-2`
`--green` `--green-bg` `--red` `--red-bg` `--yellow` `--yellow-bg`
`--info` `--info-bg` `--warn` `--warn-bg`

**Type** — `--font-sans` `--font-mono`

**Radius** — `--radius-xs` (4) `--radius-sm` (8) `--radius-md` (12)
`--radius-lg` (16) `--radius-xl` (24) `--radius-pill` (980)

**Elevation** — `--shadow-sm` `--shadow-md` `--shadow-lg`

**Layout** — `--content-narrow` (640) `--content-prose` (760)
`--content-wide` (900) `--nav-height` (52)

**Layout classes** you can apply directly instead of writing your own grid:
`features` (auto-fill 260px), `pages-grid` (280px), `wyg-grid` (200px),
`two-col`, `row-2`, `row-3`, `section`, `section-inner`, `alt-bg`.
All collapse to one column on narrow screens. `alt-bg` fills a band with
`--surface` — alternate it between sections for rhythm.

Older aliases (`--secondary`, `--text2`, `--text3`, `--surface2`, `--accent2`,
`--ha-color`, `--ha-bg`, `--warn-border`, `--mono`) still resolve. Prefer the
canonical names above in new work.

## Where the truth is

- `styles.css` → `_ds_bundle.css` — every token and class, authoritative. Read
  it before inventing any styling.
- `components/general/<Name>/<Name>.prompt.md` — per-component API and usage.
- 31 components, all exported from `window.Allarise`.

## Idiomatic example

```jsx
<Section
  label="Features"
  title="Everything you need to wake up"
  lead="Allarise pairs a serious alarm engine with the rest of your smart home."
  altBackground
>
  <Grid variant="features">
    <FeatureCard icon="⏰" title="Alarm Engine"
      description="Rings at the volume you set, independent of the mute switch." />
    <FeatureCard icon="🏠" title="Home Assistant"
      description="Wake your lights, blinds, and speakers alongside your alarm." />
  </Grid>

  {/* Own layout glue: DS tokens, not invented values */}
  <p style={{ marginTop: 24, color: 'var(--text-secondary)', fontSize: 15 }}>
    Every feature works offline.
  </p>
</Section>
```

## Conventions worth keeping

- **Variants are props, not classes** — `Callout tone`, `DataTable variant`,
  `Button variant`, `Badge tone`, `Hero size`, `PageHeader size`,
  `CopyButton variant`. Two page-specific looks were merged into each of these,
  so both originals are reachable; don't reintroduce a one-off.
- **Emoji are the icon system.** There is no icon font or SVG set. `FeatureCard`,
  `PageCard`, `Callout`, `FeatureTile`, and `PrivacyStrip` all take an emoji.
- **Prose colour** is `--text`; secondary/supporting copy is `--text-secondary`;
  hints and metadata are `--text-tertiary`.
- Image-bearing components (`Hero`, `SiteNav`) omit the image entirely when the
  icon prop is empty — pass a real URL or leave it off.
