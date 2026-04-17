/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1220',
        'background-secondary': '#111827',
        surface: '#162033',
        'surface-elevated': '#1B2940',
        primary: {
          DEFAULT: '#0B1220',
          light: '#111827',
          dark: '#0B1220',
        },
        accent: {
          DEFAULT: '#0EA5E9', // Sky Blue
          secondary: '#14B8A6', // Teal
        },
        secondary: '#64748B',
        'text-primary': '#F8FAFC',
        'text-secondary': '#D6DEE8',
        'text-muted': '#94A3B8',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'heading': ['Manrope', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'shooting-star': 'shootingStar 3s linear infinite',
        'text-shine': 'textShine 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shootingStar: {
          '0%': { transform: 'translateX(-100px) translateY(-100px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: '0' },
        },
        textShine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #111827 0%, #162033 50%, #0B1220 100%)',
      },
    },
  },
  plugins: [],
}