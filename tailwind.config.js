/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  experimental: {
    optimizeUniversalDefaults: true
  },
  theme: {
    extend: {
      animation: {
        fade_grow_in: 'fade_grow_in 1s ease-in-out',
      },
      keyframes: {
        fade_grow_in: {
          '0%': {
            transform: 'translateY(50px)', opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)', opacity: '100'
          },
        },
      },


    },
  },
  plugins: [],
}

