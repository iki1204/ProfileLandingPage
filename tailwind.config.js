/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#030712',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.15), 0 8px 40px rgba(56, 189, 248, 0.18)',
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 40%), radial-gradient(circle at 80% 40%, rgba(139, 92, 246, 0.18), transparent 35%)',
      },
    },
  },
  plugins: [],
}
