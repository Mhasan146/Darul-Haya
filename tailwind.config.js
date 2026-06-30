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
        // Aqua-forward palette (shifted from the logo's deep teal toward turquoise)
        beige: {
          DEFAULT: '#FCF8F4', // warm cream — kept to match the logo's background so it blends
          dark: '#E6F4F1',    // light aqua tint (section bands, card borders)
        },
        teal: {
          DEFAULT: '#0D9488', // vibrant aqua-teal (primary: buttons, accents, icons)
          light: '#2DD4BF',   // bright aqua
          dark: '#0F766E',    // deep aqua (hover states)
        },
        amber: {
          DEFAULT: '#C99A33', // gold accent — complements aqua, also in the logo
          dark: '#A87E27',
        },
        clay: {
          DEFAULT: '#134E4A', // dark aqua-teal (headings + body text)
        },
      },
    },
  },
  plugins: [],
}
