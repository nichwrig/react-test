/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily:{
        sans: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        darkGrey: '#1F1F1F',
        neonOrange: '#FF5F1F',
        neonAqua: '#00ffff',
        neonPurple:'#f200ff',
        gold:'#FFCC00',
        mint:'#adebb3'
      },
    },
  },
  plugins: [],
}

