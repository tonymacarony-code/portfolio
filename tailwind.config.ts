import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        light: '#ffffff87',
        dark: '#2e2e2e',
        purple: {
          '300': '#BDB2FF',
        }
      },
      fontSize: {
        "14": "0.875",
      },
      borderRadius: {
        "14": "0.875rem",
      },
      boxShadow: {
        'buttonShadow': '0 1px 2px #1018280f, 0 1px 3px #1018281a'
      }
    },
  },
  plugins: [],
} satisfies Config;

