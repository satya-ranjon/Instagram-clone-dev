module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  "fontawesome-svg-core": {
    license: "free",
  },
};

module.exports = function (api) {
  return {
    plugins: ["macros"],
  };
};
