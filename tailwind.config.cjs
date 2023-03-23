/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	'./src/**/*.{html,js,svelte,ts}',
  	"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
	backgroundImage: {
		'image': "url('/wallpaper.png')",
	},
    },
  },
  plugins: [
	require('flowbite/plugin')
  ],
  darkMode: 'class',
}
