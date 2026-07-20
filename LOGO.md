# Darul Haya — Logo System

A small set of logo variants so the right one is used in each context and the
assets don't drift. All live in `public/`.

## Variants

| File | What it is | Use it for |
|------|------------|-----------|
| `logo.png` | Full stacked lockup, **boxed** (cream background) | Social / OpenGraph share cards only — they need a solid background |
| `hero-logo.png` | Full stacked lockup, **transparent**, tagline removed | Large **light** contexts (the hero) |
| `logo-mark.png` | **Mark only** (DH-in-arch), transparent, teal + gold | Navbar and other small **light** contexts |
| `logo-mark-light.png` | Mark only, **reversed** cream monochrome | **Dark** backgrounds (footer, dark bands) |
| `app/icon.svg` | Favicon — simple "DH" monogram | Browser tab |

## Placement rules (as implemented)

- **Navbar** → `logo-mark.png` + "Darul Haya" wordmark in Playfair, teal
  (`components/Navbar.jsx`). Horizontal lockup, legible at nav size.
- **Footer** → `logo-mark-light.png` + "Darul Haya" wordmark in Playfair, white
  (`app/page.js`, dark footer).
- **Hero** → `hero-logo.png` on a soft cream halo (dark mark over a light photo).
- **Social / OG** → `logo.png` (boxed) via `app/layout.js` metadata.
- **Favicon** → `app/icon.svg`.

## Why these exist (the audit findings)

1. **Small-size legibility** — the full lockup turns to mush under ~50px, so the
   navbar/small contexts use the **mark only** (`logo-mark.png`).
2. **Dark / photo backgrounds** — a **reversed** cream mark
   (`logo-mark-light.png`) exists so logos on dark sections don't need a halo/box
   workaround.
3. **Complexity (open item)** — the mark still carries several elements (arch,
   monogram, crescent, book, branch). Reducing these is a true redesign best done
   by a designer; the mark-only variant mitigates it in small contexts for now.
4. **Text contrast** — wordmarks are rendered as **live text** (teal on light,
   white on dark) instead of relying on the low-contrast gold baked into the art.
5. **Shape** — nav uses a **horizontal** lockup (mark + wordmark), not a shrunk
   vertical stack.
6. **Consistency** — this file is the source of truth; regenerate mark variants
   from `hero-logo.png` if the master art changes.

## Regenerating the mark variants

The mark files are cropped/recoloured from `hero-logo.png` (the transparent full
lockup). If the master logo changes, re-crop the arch+monogram region and rebuild
the reversed copy (keep alpha, set RGB to brand cream `#FCF8F4`).
