module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-20vh)" },
        },
      },
      animation: {
        floatUp: "floatUp 10s linear infinite",
      },
    },
  },
};
