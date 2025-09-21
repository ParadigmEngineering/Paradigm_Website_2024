/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,png}'],
	theme: {
		extend: {
			fontFamily: {
				anta: ['Anta', 'sans-serif'],
				techmono: ['ShareTechMono', 'monospace'],
				tech: ['ShareTech', 'sans-serif'],
				russo: ['RussoOne', 'sans-serif'],
				bebas: ['BebasNeue', 'cursive'],
				roboto: ['Roboto', 'roboto'],
				mokoto: ['MokotoRegular', 'display'],
				mokotoglitch: ['MokotoGlitch', 'sans-serif']
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite'
			},
		},
	},
	plugins: [],
}
