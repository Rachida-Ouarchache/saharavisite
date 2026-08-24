/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        moroc: {
          black: '#1A1714',
          gold: '#B8976A',
          'gold-hover': '#C9A97A',
          white: '#F8F5F0',
          charcoal: '#2C2620',
          slate: '#3D3630',
          muted: '#8A8075',
          disabled: '#6E6760',
          sand: '#E8DFD0',
          beige: '#D4C4B0',
          terracotta: '#C4785A',
          ivory: '#F8F5F0',
        },
        primary: {
          50: '#FBF9F6',
          100: '#F3EEE6',
          200: '#E8DFD0',
          300: '#D4C4B0',
          500: '#B8976A',
          600: '#3D3630',
          700: '#2C2620',
          800: '#231F1B',
          900: '#1A1714',
        },
        gold: {
          300: '#E5D4B8',
          400: '#D4BC94',
          500: '#B8976A',
          600: '#9A7A4F',
        },
        sand: {
          50: '#FBF9F6',
          100: '#F8F5F0',
          200: '#E8DFD0',
          300: '#D4C4B0',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        moroc: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://res.cloudinary.com/dc3uvcobc/image/upload/f_auto,q_auto,w_1920/v1775053542/pixelraw-desert-4944794_1920_csvuni.jpg')",
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.65s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slideUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-down': 'slideDown 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(26, 23, 20, 0.06)',
        'card-hover': '0 16px 48px rgba(26, 23, 20, 0.12)',
        gold: '0 10px 30px rgba(184, 151, 106, 0.18)',
        'gold-hover': '0 16px 36px rgba(184, 151, 106, 0.24)',
      },
    },
  },
  plugins: [],
};
