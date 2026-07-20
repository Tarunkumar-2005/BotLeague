/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0c',
        panel: '#141417',
        panel2: '#1b1b20',
        line: '#2a2a30',
        brand: {
          red: '#ef3340',
          redDark: '#c92030',
          blue: '#2b4bf2',
          gold: '#f2b705',
        },
      },
      fontFamily: {
        display: ['"Rajdhani"', '"Barlow Semi Condensed"', 'sans-serif'],
        body: ['"Barlow"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
