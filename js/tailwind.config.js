module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'my-image':"url(/pexel.jpg)"
      },
      borderRadius:{
        'kak':"64% 36% 35% 65% / 54% 55% 45% 46% "
      }
    },
  },
  plugins: [require('daisyui','prettier-plugin-tailwindcss')],
}