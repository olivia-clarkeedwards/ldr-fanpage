/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/components/*.tsx', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'header-img':
          'url(https://static.stereogum.com/uploads/2022/05/lana-del-rey-w-magazine-new-album-1652799641-1000x1274.jpg)',
      },
    },
  },
  plugins: [],
}
