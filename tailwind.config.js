/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.tsx",
    "./src/features/**/components/**/**/*.tsx",
    "./src/features/**/**/routes/**/*.tsx",
    "./src/features/**/routes/**/*.tsx",
    "./src/routes/*.tsx",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#facc15",
          secondary: "#365314",
          accent: "#fff",
          neutral: "#4b5563",
          "base-100": "#374151",
          info: "#00bcf7",
          success: "#84cc16",
          warning: "#f59e0b",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
