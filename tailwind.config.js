/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        moroc: {
          black: '#0B1D33',
          gold: '#D4A85C',
          'gold-hover': '#E7C98B',
          white: '#F7F1E8',
          charcoal: '#132B45',
          slate: '#22354A',
          muted: '#A8B4C3',
          disabled: '#6E7782',
        },
        primary: {
          50: '#F6F9FC',
          100: '#E9F0F6',
          200: '#C9D7E3',
          300: '#A8BCCC',
          500: '#D4A85C',
          600: '#1C3A5A',
          700: '#132B45',
          800: '#10243B',
          900: '#0B1D33',
        },
        gold: {
          300: '#F2DFC0',
          400: '#E7C98B',
          500: '#D4A85C',
          600: '#B88B43',
        },
        sand: {
          50: '#FDFBF7',
          100: '#F7F1E8',
          200: '#EFE3D0',
          300: '#E2CFB0',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        moroc: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        arabic: ['Noto Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1920')",
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
        card: '0 4px 24px rgba(11, 11, 11, 0.06)',
        'card-hover': '0 16px 48px rgba(11, 11, 11, 0.12)',
        gold: '0 10px 30px rgba(212, 168, 92, 0.22)',
        'gold-hover': '0 16px 36px rgba(212, 168, 92, 0.28)',
      },
    },
  },
  plugins: [],
};
