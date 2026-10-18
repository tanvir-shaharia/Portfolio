/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 1. COLOR TOKENS
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1", // Primary Electric Indigo
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        accent: {
          violet: "#8B5CF6",
          purple: "#A855F7",
          cyan: "#06B6D4",
          sky: "#38BDF8",
        },
        surface: {
          canvas: "#09090B",
          card: "rgba(24, 24, 27, 0.7)",
          pill: "rgba(39, 39, 42, 0.7)",
          modal: "#18181B",
        },
        borderToken: {
          subtle: "rgba(39, 39, 42, 0.6)",
          default: "#27272A",
          strong: "#3F3F46",
        },
        dark: {
          bg: "#09090B",
          card: "#18181B",
          border: "#27272A",
          hover: "#3F3F46",
        },
        // Stitch Obsidian Cyber-Glass Tokens
        "surface-canvas": "#09090b",
        "surface-panel": "#0f172a",
        "surface-glass": "rgba(15, 23, 42, 0.65)",
        "surface-glass-subtle": "rgba(255, 255, 255, 0.03)",
        "border-glass": "rgba(255, 255, 255, 0.10)",
        "border-glass-highlight": "rgba(6, 182, 212, 0.35)",
        primary: "#6366f1",
        "primary-container": "#8083ff",
        "on-primary-container": "#0d0096",
        "on-primary": "#ffffff",
        "primary-fixed": "#e1e0ff",
        "primary-fixed-dim": "#c0c1ff",
        secondary: "#06b6d4",
        "secondary-container": "#03b5d3",
        "on-secondary": "#003640",
        "secondary-fixed": "#acedff",
        "secondary-fixed-dim": "#4cd7f6",
        tertiary: "#10b981",
        "tertiary-fixed": "#6ffbbe",
        "tertiary-fixed-dim": "#4edea3",
        "text-primary": "#f8fafc",
        "text-muted": "#94a3b8",
        "on-surface": "#e5e1e4",
        "on-surface-variant": "#c7c4d7",
        "surface-container": "#201f22",
        "surface-container-high": "#2a2a2c",
        "surface-container-highest": "#353437",
        "surface-container-low": "#1c1b1d",
        "surface-container-lowest": "#0e0e10",
        "surface-bright": "#39393b",
      },

      // 2. RADIUS TOKENS (Shape Scale)
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
        xl: "12px", // Standard Card Radius
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },

      // 3. SPACING TOKENS
      spacing: {
        "card-p": "1.5rem", // 24px
        "card-p-sm": "1rem", // 16px
        "section-gap": "3.5rem", // 56px
      },

      // 4. SHADOW TOKENS
      boxShadow: {
        "token-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "token-card": "0 4px 20px -2px rgba(0, 0, 0, 0.25)",
        "token-hover": "0 10px 25px -3px rgba(0, 0, 0, 0.35)",
        "token-modal": "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      },

      // 5. MOTION & TRANSITION TOKENS
      transitionTimingFunction: {
        emphasized: "cubic-bezier(0.2, 0, 0, 1)",
        decelerate: "cubic-bezier(0, 0, 0.2, 1)",
        accelerate: "cubic-bezier(0.4, 0, 1, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
      },

      // 6. BORDER WIDTH TOKENS
      borderWidth: {
        token: "1px",
        "token-thick": "2px",
      },

      // 7. TYPOGRAPHY TOKENS
      fontSize: {
        "token-h1": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
        "token-h2": ["1.875rem", { lineHeight: "2.25rem", fontWeight: "700" }],
        "token-h3": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "token-body": ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "token-caption": ["0.75rem", { lineHeight: "1rem", fontWeight: "500" }],
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "Inter", ...defaultTheme.fontFamily.sans],
      "display-hero": ["Plus Jakarta Sans", "sans-serif"],
      "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
      "headline-md": ["Plus Jakarta Sans", "sans-serif"],
      "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
      "body-lg": ["Inter", "sans-serif"],
      "body-md": ["Inter", "sans-serif"],
      "body-sm": ["Inter", "sans-serif"],
      "label-ui": ["Inter", "sans-serif"],
      "mono-tag": ["JetBrains Mono", "monospace"],
      "mono-code": ["JetBrains Mono", "monospace"],
      ubuntu: ["Ubuntu", "sans-serif"],
      ubutu: ["Ubuntu", "sans-serif"],
      nunito: ["Plus Jakarta Sans", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),

    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.4xl"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
        },
        h3: {
          fontSize: theme("fontSize.2xl"),
        },
        h4: {
          fontSize: theme("fontSize.xl"),
        },
      });
      addComponents({
        ".card": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.xl"),
          padding: theme("spacing.card-p"),
          borderWidth: theme("borderWidth.token"),
          borderColor: "rgba(229, 231, 235, 0.8)",
          boxShadow: theme("boxShadow.token-sm"),
        },
      });
      addUtilities({
        ".containerCustom": {},

        ".gap": {
          paddingTop: "55px",
          paddingBottom: "55px",
        },

        ".lightBg": {
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(238,242,255,0.8) 0%, rgba(243,244,246,0.6) 100%)",
        },

        ".darkBg": {
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.03) 40%, rgba(9,9,11,1) 80%)",
        },
      });
    }),
  ],
};
