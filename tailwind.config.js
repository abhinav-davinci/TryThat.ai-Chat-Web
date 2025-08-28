/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './react/src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#f4f6ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#a6b6ff',
          400: '#7b91ff',
          500: '#5b73f2',
          600: '#4a5dd6',
          700: '#3e4db3',
          800: '#333f90',
          900: '#2a346f'
        },
        secondary: {
          50: '#f6f5ff',
          100: '#eeecff',
          200: '#d6d2ff',
          300: '#b1aaff',
          400: '#8a81ff',
          500: '#6b63f6',
          600: '#564fda',
          700: '#4641b7',
          800: '#393694',
          900: '#2f2d75'
        }
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1rem'
      },
      boxShadow: {
        subtle: '0 1px 2px rgba(0,0,0,0.04)',
        card: '0 2px 12px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: []
}

