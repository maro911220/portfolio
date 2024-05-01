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
        body: "#222",
        dark: "#161717",
        main: "#4BC0A7",
        content: "rgb(252, 250, 251)",
        contentLine: "rgba(247, 240, 248, 1)",
      },
      maxWidth: {
        full: "1920px",
      },
      padding: {
        con: "140px",
        moCon: "80px",
        lg: "40px",
        md: "20px",
        sm: "12px",
        xs: "6px",
      },
      margin: {
        con: "140px",
        moCon: "80px",
        lg: "40px",
        md: "20px",
        sm: "12px",
        xs: "6px",
      },
      gap: {
        lg: "40px",
        md: "20px",
        sm: "12px",
        xs: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
