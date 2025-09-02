import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4F46E5', // indigo-600
          dark: '#4338CA',
          light: '#6366F1',
        },
        accent: {
          teal: '#14B8A6',
          violet: '#8B5CF6',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2,6,23,0.06)',
        hover: '0 16px 40px rgba(2,6,23,0.12)',
      },
      borderRadius: {
        xl: '1rem',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'pulse-soft': { '0%,100%': { opacity: '1' }, '50%': { opacity: '.6' } },
      },
      animation: {
        'fade-up': 'fade-up .5s ease both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
