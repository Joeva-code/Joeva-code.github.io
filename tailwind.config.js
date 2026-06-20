export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        paper: '0 18px 40px rgba(38, 28, 20, 0.10)',
        lift: '0 24px 70px rgba(38, 28, 20, 0.16)',
      },
      colors: {
        brand: {
          DEFAULT: '#bf5b39',
          accent: '#496f5d',
          ink: '#17130f',
          soft: '#fffaf0',
        },
      },
    },
  },
  plugins: [],
}
