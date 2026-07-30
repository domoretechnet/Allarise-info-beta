# design-sync notes — Allarise info site

## Origin of the design system package

This repo is a **static HTML site**, not a component library. `design-system/`
was created on 2026-07-25 specifically so the site's visual language could be
synced to claude.ai/design. Every token value and every component style in it
was extracted from the inline `<style>` blocks of the seven HTML pages —
nothing was invented.

- Source of truth for the look is still the HTML pages. If a page's inline CSS
  changes, `design-system/src/components.css` must be updated by hand — there is
  no automated extraction step.
- Class names are deliberately **unprefixed** and match the site's own, so
  markup produced in Claude Design can be pasted back into the static pages.
- Build: `cd design-system && npm run build` (esbuild for JS + CSS, `tsc` for
  the `.d.ts` tree). `dist/` is gitignored.

## Token drift found across the pages (resolved in tokens.css)

The pages did not share one token set. Reconciliation choices:

- Secondary/tertiary text: `index`, `faq`, `home-assistant`, `privacy`, `terms`,
  `whatsnew` use `--secondary`; `mqtt-builder` uses `--text2` / `--text3`.
  Canonical names are now `--text-secondary` / `--text-tertiary`, with
  `--secondary`, `--text2`, `--text3` kept as aliases so the existing pages keep
  working if they ever adopt the built stylesheet.
- `--red`: `#c0392b` (mqtt-builder) vs `#922b21` (privacy, whatsnew). Chose
  `#922b21` — two pages use it and it is the only one with a matching `--red-bg`.
- `--yellow`: `#9e6200` (mqtt-builder) vs `#7d6608` (privacy, whatsnew). Chose
  `#7d6608`, same reasoning.
- `--ha-color` / `--ha-bg` (Home Assistant cyan) renamed to `--info` / `--info-bg`;
  old names aliased.
- `--warn-border` renamed to `--warn`; old name aliased.

## Component conflicts collapsed into variants

Same class name, two different designs on different pages. Both kept:

- `.copy-btn` — bare accent link (home-assistant) vs filled blue pill
  (mqtt-builder) → `CopyButton variant="ghost" | "solid"`.
- `.callout` — `callout-tip/note/warn` (home-assistant) vs `green/yellow/red`
  (privacy, whatsnew) → one `tone` scale: `note | tip | warn | success | danger`.
- `.data-table` — header-underline only (home-assistant) vs full grid + zebra
  (privacy) → `variant="rules" | "bordered"`, `zebra` prop.
- `.page-header` — 40px display (prose pages) vs 24px compact (mqtt-builder app
  shell) → `size="default" | "compact"`.
- `.hero` — 120px icon / 44px title (index) vs 80px / 32px (faq, whatsnew) →
  `size="full" | "compact"`.

## Pre-existing bug spotted in the source pages

`mqtt-builder.html`'s `footer` rule uses `var(--secondary)`, but that page
defines `--text2`, not `--secondary` — so the footer text falls back to the
inherited colour there. Not fixed in the HTML (out of scope for this sync); the
design system's `SiteFooter` uses `--text-secondary` correctly.

## Target project

Syncing into the pre-existing project **Allarise Beta Site**
(`2ccad989-5d20-4ad7-adf7-605d27418145`), which already held 11 hand-authored
HTML cards (`hero.html`, `badges.html`, `colors.html`, `typography.html`,
`nav.html`, `callouts.html`, `tables.html`, `feature-cards.html`,
`no-collect.html`, `privacy-strip.html`, `contact-footer.html`). The user chose
on 2026-07-25 to **replace** them. Because the project had no `_ds_sync.json`,
those deletes had to be listed explicitly in the upload plan — a diff could not
derive them.

## Fixes made during the first sync (2026-07-25)

- **`Callout` default warn icon is `⚡`, not `⚠️` — deliberate.**
  `package-validate.mjs` (line ~535) treats any preview cell whose text starts
  with `⚠` as a caught render error, so a `⚠️` default flagged every warn callout
  as `bad` forever. `home-assistant.html` uses `⚡` and `⚠️` exactly once each, so
  `⚡` is equally faithful. Do not "fix" this back; pass `icon="⚠️"` per-instance
  if a specific callout needs it.
- **The DS ships a `body` base rule.** Components set their own `font-family`,
  but text placed *outside* a component was falling back to browser serif in
  every preview. `components.css` now sets `font-family`/`background`/`color`/
  `font-size`/`line-height` on `body`, matching what each HTML page does inline.
  `.section-label-divider` also needed an explicit `font-family`.
- **`SiteNav` guards its icon.** It rendered `<img src="">` unconditionally,
  producing a broken-image glyph whenever no icon was passed. It now omits the
  images entirely when `iconLight` is empty, matching `Hero`.
- **`cardMode: "column"`** is set for `DataTable` and `SiteNav` in
  `cfg.overrides` — both render wider than a grid cell and were being cropped.
- **Prop interfaces `Omit<…, 'title'>`.** Nine components take a `title` prop of
  type `ReactNode`, which collides with the HTML `title` attribute (`string`).
  Any new component with a `title` prop needs the same `Omit`, or `tsc` fails
  the declaration build.

## Known render warns

None outstanding. The final validate run was clean: 31/31 previews render, 0
bad, 0 thin, 0 variants-identical, no font warnings. Any warn on a future run is
new — investigate rather than assume it is pre-existing.

## Re-sync risks

- **The extraction is manual and one-way.** The HTML pages remain the live site;
  `design-system/` is a copy of their design language frozen at 2026-07-25. The
  two will drift. Before any re-sync, diff the pages' inline `<style>` blocks
  against `src/components.css`.
- `dist/` is gitignored, so a fresh clone must run the package build before the
  converter (`cfg.buildCmd`).
- The 11 hand-authored cards were deleted from the project. They exist nowhere
  else — if they are ever wanted back, they must be recovered from the project's
  own history, not this repo.
- **`conventions.md` enumerates real names.** Every token, class and component
  it lists was grepped against `ds-bundle/_ds_bundle.css` and the
  `components/general/` tree at sync time. If a token is renamed or a component
  removed, that file goes stale silently and the design agent will emit
  vocabulary that no longer resolves. Re-validate it on every sync.
- **Emoji are the icon system.** There is no icon package. If one is ever added,
  `cfg.extraEntries` needs it or icons render as empty boxes.
- The preview harness's caught-error heuristic (leading `⚠`) is a real
  constraint on default icon choices — see the Callout note above before
  changing any component's default glyph.
