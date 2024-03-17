/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        crimson: ['"Crimson Pro"', "serif"], // Assuming 'Crimson Pro' is the correct name
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "brazil-green": "#009739",
        "russia-blue": "#1C3578",
        "qatar-red": "#8A1538",
        "qatar-green": "#478778",
      }
    },
  },
  plugins: [],
};
