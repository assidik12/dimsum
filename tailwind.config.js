/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./node_modules/flowbite/**/*.js"],

  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      margin: {
        "mt-15": "60px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
