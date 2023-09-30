// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
        parisienne: ['Parisienne', 'cursive'],
        luminari: ['Luminari', 'fantasy'],
        chalkduster: ['Chalkduster', 'fantasy'],
      padauk: ['Padauk', 'sans-serif'],
      },
    },
  },
  plugins: []  ,
};

