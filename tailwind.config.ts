module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(100vh)" },
          "100%": { transform: "translateY(-20vh)" },
        },
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
      animation: {
        floatUp: "floatUp 10s linear infinite",
        border: "border 4s linear infinite",
      },
    },
  },
};
