import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        red1: "var(--red1)",
        red2: "var(--red2)",
        red3: "var(--red3)",
        blue1: "var(--blue1)",
        blue2: "var(--blue2)",
        blue3: "var(--blue3)",
        blue4: "var(--blue4)",
        gray1: "var(--gray1)",
        gray2: "var(--gray2)",
        gray3: "var(--gray3)",
        gray4: "var(--gray4)",
        yellow1: "var(--yellow1)",
        yellow4: "var(--yellow4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
