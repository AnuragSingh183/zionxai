import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
        
      colors: {
        brand: {
          50:"#e6f3ff",100:"#cfe9ff",200:"#a9d7ff",300:"#7ac2ff",400:"#45a6ff",
          500:"#1e8cff",600:"#1172e6",700:"#0e5bc0",800:"#0f4b99",900:"#123f7d",
        },
      },
    fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: { glow: "0 0 40px rgba(30,140,255,0.35)" },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(600px 300px at 20% 10%, rgba(30,140,255,0.25), transparent 60%), radial-gradient(800px 400px at 80% 10%, rgba(30,140,255,0.15), transparent 60%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
export default config
