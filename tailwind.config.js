module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3sm": "380px",
        "2sm": "480px",
        "4sm": "640px",
        "2lg": "1160px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
