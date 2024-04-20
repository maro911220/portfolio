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
        main: "#22c1c3",
      },
      maxWidth: {
        full: "1920px",
      },
      padding: {
        con: "120px",
        moCon: "80px",
        lg: "40px",
        md: "20px",
        sm: "12px",
      },
      margin: {
        con: "120px",
        moCon: "80px",
        lg: "40px",
        md: "20px",
        sm: "12px",
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
