/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eef0ed",
        white: "#fff",
        black: "#000",
        silver: "#c0c8ba",
        gainsboro: "rgba(217, 217, 217, 0.5)",
        gray: "rgba(0, 0, 0, 0.5)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
