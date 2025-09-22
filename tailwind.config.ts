// tailwind.config.ts
import type { Config } from "tailwindcss";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        richblack: "#0B0B0B",
        gold: "#D4AF37",
        offwhite: "#F7F7F5",
        halalgreen: "#2E7D32",
        charcoal: "#1E1E1E",
        deepteal: "#0F4C5C"
      },
      borderRadius: { xl: "0.85rem", "2xl": "1.25rem" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.12)" }
    }
  },
  plugins: [aspectRatio]   // ← add this
} satisfies Config;
