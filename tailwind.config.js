/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0F281E',
          900: '#133026',
          850: '#183C30',
          800: '#1E493B',
          700: '#2A6150',
          600: '#3A7C67',
          200: '#BCD3C3',
          100: '#D7E5DB',
          50: '#EAF1EB',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FDF9F1',
          200: '#F7F2E4',
          300: '#EDE4CE',
        },
        sage: {
          50: '#F4F7F5',
          100: '#EAF1EB',
          200: '#D8E5DC',
          300: '#C2D5C8',
        },
        mustard: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        serif: ['Inter', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
