/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // CFC color palette
        "cfc-bg": "#FFF4EA",
        "cfc-card": "#EDDCC6",
        "cfc-callout": "#7EACB5",
        "cfc-cta": "#BF4646",
        "cfc-dark": "#1C1E35",
      },
    },
  },
  plugins: [],
};
