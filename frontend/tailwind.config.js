/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'display': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'bounce-slow': 'bounce 2s infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #2563eb, #eab308)',
        'gradient-secondary': 'linear-gradient(45deg, #eab308, #2563eb)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))'
      },
      boxShadow: {
        'primary': '0 10px 30px rgba(37, 99, 235, 0.3)',
        'secondary': '0 10px 30px rgba(234, 179, 8, 0.3)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)'
      },
      backdropBlur: {
        'xs': '2px'
      }
    },
  },
  plugins: [],
};