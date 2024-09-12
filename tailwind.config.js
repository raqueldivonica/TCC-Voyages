/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          'blue': '#0056FF', /*azu claro*/
          'blue-II': '#163D89', /*azul BASE*/
          'blue-III': '#113164', /*azul escuro*/
          'blue-fundo': '#091648',
          'green': '#10C18D', /*verde claro*/
          'green-II': '#057856', /*verde escuro*/
          'green-lin-I': '#32C98C',
        },
      },
    },
    plugins: [],
  }