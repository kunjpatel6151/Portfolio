/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideDown: "slideDown 0.4s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": "transform: translate(0, 0) scale(1)",
          "33%": "transform: translate(30px, -50px) scale(1.1)",
          "66%": "transform: translate(-20px, 20px) scale(0.9)",
        },
        fadeIn: {
          from: "opacity: 0",
          to: "opacity: 1",
        },
        slideDown: {
          from: "opacity: 0; transform: translateY(-10px)",
          to: "opacity: 1; transform: translateY(0)",
        },
        shimmer: {
          "0%": "transform: translateX(-100%)",
          "100%": "transform: translateX(100%)",
        },
      },
    },
  },
  plugins: [],
}
