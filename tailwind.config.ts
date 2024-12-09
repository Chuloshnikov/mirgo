import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        "2x1": "1400px",
      },
      colors: {
        lightOrange: "#FE6E44",
        darkOrange: "rgb(255,77,17)",
        lightText: "#888888",
        accent: "#000000",
        accentWhite: "#FFFFFF",
        lightRed: "#D7434E",
        darkRed: "#EF3636",
        lightGreen: "#41CE09",
        bgLight: "#F5F5F5",
      },
    },
  },
  plugins: [],
} satisfies Config;
