/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    
    extend: {
      colors: {
        "brown-shade": "#B68C5A",
        "font-color":"var(--Dark-03, #707070)",
      },
      fontFamily:{
        "garamond":['EB Garamond'],
        "poppins":['Poppins'],

      }
    },
  },
  plugins: [require("daisyui")],
};
