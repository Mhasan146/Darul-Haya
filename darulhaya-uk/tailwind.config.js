/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Charcoal Ink · Ivory · Saffron Ochre ──────────────────────────
        // Modern, minimal, typography-led palette. Charcoal carries the
        // structure (buttons, dark sections, headings), ivory is the canvas,
        // saffron is the single warm accent.
        // The semantic token names (teal/clay/amber/beige) are kept so the
        // existing markup keeps working — only their values change.
        beige: {
          DEFAULT: '#FAF6EE', // ivory — page canvas
          dark: '#F1E8D6',    // warm ivory band (section bands, card borders)
        },
        teal: {
          DEFAULT: '#26282E', // charcoal ink — primary brand / buttons / dark sections
          light: '#3A3D45',   // lifted charcoal (gradients, glows)
          dark: '#17181C',    // deep charcoal (hover states)
        },
        amber: {
          DEFAULT: '#C98A2E', // saffron ochre — the accent
          dark: '#A5701F',    // deep saffron (hover / better contrast on light)
        },
        clay: {
          DEFAULT: '#26282E', // charcoal ink — headings + body text
        },
      },
    },
  },
  plugins: [],
}
