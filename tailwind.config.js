/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        "primary-100": "#f54",
        "primary-50": "#fc8a7e",
        "dark-transparent-100": "rgba(0,0,0,0.5)",
        "secondary-100": "#EDF1FC",
      },
      backgroundImage: {
        "header-1":
          "url('../../src/images/bg-header-1.png'), url('../../src/images/head-top.svg')",
        "header-2": "url('../../src/images/wp-beranda-2.png')",
        sitemap: "url('../../src/images/site-room.png')",
        "body-1": "url('../../src/images/bg-stp-1.png')",
        "body-2": "url('../../src/images/bg-inverse-3.1.png')",
        "body-3": "url('../../src/images/Group-1240.png')",
        "body-4": "url('../../src/images/Layanan.jpg')",
        "body-5": "url('../../src/images/bg-batik-transparent.png')",
        "body-6": "url('../../src/images/Gedung-R-D.jpg')",
        "body-7": "url('../../src/images/Group-1247.png')",
        "body-8": "url('../../src/images/bg-event-2.png')",
        "mega-mendung":
          "url('../../src/images/Background-Profile-Right-Side.png')",
        memphis: "url('../../src/images/memphis_1-min.png')",
        "gradient-to-bottom": "bg-gradient-to-b from-red-600 to-orange-600",
        "gradient-to-right":
          "bg-gradient-to-r from-red-600 to-orange-600 text-white ",
      },
    },
  },
  plugins: [],
};
