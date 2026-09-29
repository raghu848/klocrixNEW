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
        background: '#0F0F11',
        'background-secondary': '#151517',
        surface: '#1C1C1F',
        'surface-elevated': '#242428',
        primary: {
          DEFAULT: '#0F0F11',
          light: '#151517',
          dark: '#0F0F11',
        },
        // Brand palette taken from the Klocrix logo
        accent: {
          DEFAULT: '#D9331F', // logo red (white text on it passes WCAG AA)
          light: '#F0503A', // red for text on dark backgrounds
          dark: '#B12D21', // wordmark red
          secondary: '#ED8529', // logo orange
        },
        brand: {
          red: '#E63825',
          crimson: '#B12D21',
          orange: '#ED8529',
          yellow: '#F1C524',
          green: '#33AB4C',
          blue: '#0B7E9B',
          magenta: '#D02162',
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
        'marquee': 'marquee 35s linear infinite',
        'shooting-star': 'shootingStar 3s linear infinite',
        'text-shine': 'textShine 3s linear infinite',
        'float': 'float 8s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'hero-in': 'heroIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        // Never starts fully transparent, so above-the-fold text counts as painted for LCP
        heroIn: {
          '0%': { opacity: '0.4', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
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
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateZ(0deg)' },
          '50%': { transform: 'translateY(-20px) rotateZ(3deg)' },
        },
        drift: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(110%)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-gradient': 'linear-gradient(135deg, #151517 0%, #1C1C1F 50%, #0F0F11 100%)',
      },
    },
  },
  plugins: [],
}