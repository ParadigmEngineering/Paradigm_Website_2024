/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				techmono: ['ShareTechMono', 'monospace'],
				tech: ['ShareTech', 'sans-serif'],
				russo: ['RussoOne', 'sans-serif'],
				bebas: ['BebasNeue', 'cursive']
			}
		},
	},
	plugins: [],
}
