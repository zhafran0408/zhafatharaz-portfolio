/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        spinOpen: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(90deg) scale(1.1)" },
          "100%": { transform: "rotate(180deg) scale(1)" },
        },
        spinClose: {
          "0%": { transform: "rotate(180deg) scale(1)" },
          "50%": { transform: "rotate(90deg) scale(1.1)" },
          "100%": { transform: "rotate(0deg) scale(1)" },
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
