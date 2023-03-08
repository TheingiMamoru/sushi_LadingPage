/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily:{
      'Lora':['Lora', 'serif'],
      'Poppins':['Poppins, sans-serif'],
      'Dscript':['Dancing Script, cursive']
    },
    extend: {
      colors:{
        'orange':'#d56e3f',
        'pale-orange':'#d36836',
        'titleCol':'#2c2420',
        'para':'#68544b',
        'pale-para':'#958983',
        'bodyCol':'#fff1eb',
        'fullCol':'#fff5f0'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
