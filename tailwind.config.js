/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "dev3" : "url('/imgs/img3/image-header-mobile.jpg')",
          "dev3Pc" : "url('/imgs/img3/image-header-desktop.jpg')"
      },
      colors:{
        'Blue': 'hsl(246, 80%, 60%)',
        'LightRedWork': 'hsl(15, 100%, 70%)',
        'SoftBluePlay': 'hsl(195, 74%, 62%)',
        'LightRedStudy': 'hsl(348, 100%, 68%)',
        'LimeGreenExercise': 'hsl(145, 58%, 55%)',
        'VioletSocial': 'hsl(264, 64%, 52%)',
        'SoftOrangeSelf': 'hsl(43, 84%, 65%)',
        'VeryDarkBluey': 'hsl(226, 43%, 10%)',
        'DarkBlue':'hsl(235, 46%, 20%)',
        'DesaturatedBlue': 'hsl(235, 45%, 61%)',
        'PaleBlue': 'hsl(236, 100%, 87%)',
        'SoftOrange': 'hsl(35, 77%, 62%)',
        'SoftRed': 'hsl(5, 85%, 63%)',
        'OffWhite': 'hsl(36, 100%, 99%)',
        'GrayishBlue': 'hsl(233, 8%, 79%)',
        'DarkGrayishBlue': 'hsl(236, 13%, 42%)',
        'VeryDarkBlue': 'hsl(240, 100%, 5%)',

        'Layer': 'rgba(72, 6, 112, 0.7)',
        'SlightlyTransparentS': 'hsla(0, 0%, 100%, 0.6)',
        'SlightlyTransparentP': 'hsla(0, 0%, 100%, 0.75)',
    }
    },
  },
  plugins: [],
};
