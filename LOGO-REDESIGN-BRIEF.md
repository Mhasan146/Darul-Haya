# Logo Redesign Brief — Darul Haya

For a graphic designer. The current logo works at large sizes but is too complex
to scale and has no proper vector source. This brief covers a focused refinement
(not necessarily a from-scratch rebrand).

## About the school
Darul Haya — an **online Islamic school** for boys and girls in **Grades 3–8**.
Live, teacher-led classes, Ontario-aligned, values-driven. Tone: warm, premium,
trustworthy, family-facing.

Brand colours (keep these):
- Deep aqua-teal `#134E4A` (primary) and `#0F766E`
- Gold `#C99A33` (accent)
- Warm cream `#FCF8F4` (background)
Typography on site: Playfair Display (headings), Inter (body).

## The problem to solve
The current mark carries **six-plus elements** — mihrab arch, "DH" monogram,
crescent + star, open book, olive branch, plus two–three lines of text. As a
result it:
1. **Doesn't scale** — below ~50px (nav, favicon) the detail turns to mush.
2. **Has no vector master** — it's a raster PNG (looks AI-generated), so it can't
   be cleanly resized or recoloured.
3. **Needs a halo** to sit on photos because there's no proper 1-colour version.
4. **Low-contrast gold text** ("Academy of Learning") is hard to read.

## Goals
- A **simpler mark** built from **2–3 core elements** (suggested: the **mihrab
  arch + DH monogram**, optionally the crescent — drop or heavily simplify the
  book and branch). It must stay recognizable at **16px**.
- Delivered as clean **vector (SVG)**, so every size/variant derives from one master.
- Retain the Islamic identity and the warm, premium feel.

## Required deliverables (a small system)
1. **Primary mark** (simplified) — full colour, 1-colour teal, and reversed cream.
2. **Horizontal lockup** — mark + "Darul Haya" wordmark (for nav bars).
3. **Stacked lockup** — mark over "Darul Haya" + "Academy of Learning" (for hero/print).
4. **Favicon** — the monogram only, legible at 16px.
5. Formats: **SVG** master + exported PNG @1x/2x, plus transparent versions.
6. **Usage guide**: clear-space, minimum sizes, colour codes, do/don't.

## Constraints
- **No depiction of living beings** (people or animals) — consistent with the
  school's aesthetic. Geometry, calligraphy, architecture, and plants are fine.
- Must read in **teal-on-cream** and as a **reversed cream-on-dark** version.
- Wordmark text should be true type (high contrast), not baked low-contrast gold.

## Reference assets (current, in `public/`)
- `logo.png` — current full stacked lockup (boxed)
- `hero-logo.png` — same, transparent, tagline removed
- `logo-mark.png` / `logo-mark-light.png` — interim mark crops (teal / reversed)
- `LOGO.md` — how the current variants are used on the site

Once new vector assets are delivered, they slot straight into the existing
placements documented in `LOGO.md` (nav, hero, footer, favicon, social).
