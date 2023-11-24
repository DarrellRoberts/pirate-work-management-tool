/** @type {import('tailwindcss').Config} */

export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
      'ship': 'url("/src/assets/gifship.gif")',
      'scroll': 'url("/src/assets/scroll.png")'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active", "group-hover", "group-focus"],
    },
  },
  plugins: [],
}

