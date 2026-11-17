/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C0A09",
        cream: "#E8E0D0",
        copper: "#B87333",
        fog: "rgba(232, 224, 208, 0.55)",
      },
    },
  },
  plugins: [],
};
