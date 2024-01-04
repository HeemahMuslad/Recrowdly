/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "3rem",
      },
      screens: {
        sm: { max: "480px" },
        md: { max: "820px" },
        lg: { max: "1000px" },
        xl: "1440px",
      },
      fontSize: {
        sessionL: "48px",
        sessionS: "32px",
      },
      height: {
        whitebox: "100%",
        whiteboxmd: "80%",
        blackbox: "60vh",
        blackboxmd: "40vh",
        secondBox: "60vh",
        thirdBox: "80vh",
        btnHeight: "44px",
        barHeight: "3px",
      },
      width: {
        logoWidth: "15%",
        boxWidth: "30%",
        divwidth: "90%",
        whitebox: "65%",
        blackbox: "95%",
        playWidth: "20%",
        textwidth: "70%",
        btnWidth: "100%",
        barWidth: "25px",
      },
      colors: {
        btnColor: "#0083c4",
      },
    },
  },
  plugins: [],
};
