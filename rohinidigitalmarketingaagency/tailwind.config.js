/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#f8f7fc", // Premium light lavender-slate
        cardBg: "rgba(255, 255, 255, 0.75)", // Light glass backdrop
        primaryAccent: "#7c3aed", // Royal violet with great light contrast
        secondaryAccent: "#0284c7", // Sky blue with great light contrast
        textPrimary: "#110f24", // Deep dark slate/charcoal
        textSecondary: "#5c5870" // Soft slate-purple
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
