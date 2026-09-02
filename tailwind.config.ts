import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1D1C1A",
        ivory: {
          DEFAULT: "#F3EFE8",
          deep: "#EAE5DB",
        },
        clay: {
          DEFAULT: "#AE816B",
          dark: "#966C58",
        },
        sand: "#B8AEA2",
      },
    },
  },
  plugins: [],
};

export default config;
