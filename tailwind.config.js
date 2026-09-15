/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F6F1',
        beige: {
          soft: '#EFEAE2',
          light: '#F4EFE8',
        },
        charcoal: '#252525',
        warmgray: {
          DEFAULT: '#68645E',
          muted: '#8A857D',
        },
        sage: {
          DEFAULT: '#7C8A78',
          hover: '#687565',
          light: '#EBF0E9',
        },
        border: {
          subtle: '#DCD7CE',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.65',
      },
      borderRadius: {
        DEFAULT: '6px',
        subtle: '4px',
        md: '8px',
      },
      maxWidth: {
        content: '1220px',
      }
    },
  },
  plugins: [],
}
