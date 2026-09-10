/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic tokens used by reusable UI components.
        primary: "#1769E0",
        "primary-hover": "#0D4FB5",
        secondary: "#FF5A1F",
        "secondary-hover": "#E54816",
        accent: "#00C2FF",
        "accent-hover": "#52D9FF",
        background: "#F3F6FA",
        surface: "#F6F8FB",
        text: "#172033",
        muted: "#64748B",
        border: "#E2E8F0",
        dark: "#0B1F3A",
        "dark-deep": "#061B61",
        soft: "#EEF4FB",

        // Legacy aliases kept to avoid breaking existing components.
        "primary-dark": "#0D4FB5",
        cyan: "#00C2FF",
        navy: "#0B1F3A",
        "footer-blue": "#061B61",
        orange: "#FF5A1F",
        page: "#F8FAFC",
        ink: "#172033",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        panel: "0 18px 50px rgba(11, 31, 58, 0.10)",
        architecture: "20px 24px 80px rgba(23, 105, 224, 0.12)",
      },
      keyframes: {
        partners: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        partners: "partners 28s linear infinite",
      },
    },
  },
  plugins: [],
};
