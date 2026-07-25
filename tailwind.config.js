/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "Garden Green & Honey" — a light, fresh green + warm honey gold.
        // Token names are kept (teal/clay/beige/amber) so existing utility
        // classes keep working; only the values changed with the palette.
        beige: {
          DEFAULT: '#F1FAF4', // airy light-green paper (page/background)
          dark: '#DCEFE1',    // soft green tint — section bands, card borders
        },
        teal: {
          DEFAULT: '#1E7A48', // fresh brand green — 4.6:1 on white (WCAG AA)
          light: '#34C77B',   // bright spring green — large fills, gradients
          dark: '#155C37',    // deep green — hover states
        },
        amber: {
          DEFAULT: '#DDA62C', // honey gold accent
          dark: '#B9861F',
        },
        clay: {
          DEFAULT: '#16402B', // deep forest green (headings + body text)
        },
      },
    },
  },
  plugins: [],
}
