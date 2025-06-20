
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        olive: {
          50: '#f4f5f1',
          100: '#e3e5dc',
          700: '#6b705c',
          800: '#4d503c'
        }
      }
    },
  },
  plugins: [],
};
    