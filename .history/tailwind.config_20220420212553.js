module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screen: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      ssm: "480px",
    },
    extend: {
      screens: {
        "2lg": "1160px",
      },
    },
  },
  plugins: [],
};
