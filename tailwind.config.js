export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.1), 0 20px 50px rgba(15, 23, 42, 0.35)',
      },
      colors: {
        brand: {
          DEFAULT: '#06b6d4',
          accent: '#7c3aed',
          warm: '#fb923c',
        },
      },
    },
  },
  plugins: [],
}
