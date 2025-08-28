/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        // Brand palette extracted from logo (blue primary)
        primary: {
          50: '#eef2fb',
          100: '#d9e3f7',
          200: '#b3c7ef',
          300: '#8dabe7',
          400: '#5b87d6',
          500: '#2e6eb6',
          600: '#245a96',
          700: '#1d4a7b',
          800: '#163a61',
          900: '#112b47'
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef5',
          200: '#d6dbe6',
          300: '#b4bdcc',
          400: '#8b98ab',
          500: '#6b7e94',
          600: '#586778',
          700: '#475360',
          800: '#39424d',
          900: '#2d343d'
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

