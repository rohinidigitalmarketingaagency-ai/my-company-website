/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBg:        "#0f2557",   // Navbar, footer, CTA sections
        navyLight:     "#1a3a6e",   // Hover states on navy bg
        accent:        "#0ea5e9",   // Electric sky blue — primary CTA
        accentHover:   "#0284c7",   // Hover / darker blue
        teal:          "#0891b2",   // Secondary highlight
        textPrimary:   "#0f172a",   // Deep slate headings
        textSecondary: "#475569",   // Slate body text
        textMuted:     "#94a3b8",   // Captions / labels
        textLight:     "#f1f5f9",   // Text on dark backgrounds
        pageBg:        "#ffffff",   // Clean white main background
        sectionAlt:    "#f0f7ff",   // Very light blue-tinted sections
        cardBg:        "#ffffff",   // White cards
        borderClr:     "#e2e8f0",   // Light borders
        // Legacy aliases kept so existing CSS/slider still works
        primaryAccent:   "#0ea5e9",
        secondaryAccent: "#0891b2",
        darkBg:          "#ffffff",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
