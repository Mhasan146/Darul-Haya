/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "Garden Green & Honey", a light, fresh green + warm honey gold.
        // The four DEFAULT values below are the palette's exact specified
        // colors; the light/dark shades are derived from them for hovers,
        // gradients, and section tints. Token names are kept (teal/clay/
        // beige/amber) so existing utility classes keep working.
        beige: {
          DEFAULT: '#EEF8F0', // ground, airy light-green paper
          dark: '#D8EDDF',    // soft green tint, section bands, card borders
        },
        teal: {
          DEFAULT: '#21804E', // primary, fresh brand green
          light: '#3FBE7B',   // bright spring green, large fills, gradients
          dark: '#1A6B41',    // deep green, hover states
        },
        amber: {
          DEFAULT: '#F0C250', // accent, honey gold
          dark: '#D3A63A',    // deeper honey, hover states
        },
        clay: {
          DEFAULT: '#1E4A35', // ink, deep forest green (headings + body text)
        },
      },
    },
  },
  plugins: [],
}
