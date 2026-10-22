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
      // Tighter radius scale. The site leaned on big pill-and-bubble corners;
      // pulling every step in makes surfaces read as crafted rather than
      // app-template, without touching a single component's classes.
      borderRadius: {
        lg: '0.375rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
      },
      // Quieter depth. Layered, low-opacity shadows tinted with the ink colour
      // instead of the default grey drop shadows, so cards sit on the page
      // rather than float above it.
      boxShadow: {
        sm: '0 1px 2px rgba(30,74,53,0.05)',
        DEFAULT: '0 1px 2px rgba(30,74,53,0.05), 0 2px 6px -2px rgba(30,74,53,0.06)',
        md: '0 1px 2px rgba(30,74,53,0.04), 0 6px 16px -8px rgba(30,74,53,0.10)',
        lg: '0 2px 4px rgba(30,74,53,0.04), 0 14px 30px -14px rgba(30,74,53,0.16)',
        xl: '0 2px 6px rgba(30,74,53,0.05), 0 24px 48px -24px rgba(30,74,53,0.22)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
