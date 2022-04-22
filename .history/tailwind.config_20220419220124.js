module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = function (api) {
  return {
    plugins: ["macros"],
  };
};
