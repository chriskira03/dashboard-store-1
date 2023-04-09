/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#262837',
				secondary: '#ec7c6a',
				tertiary: '#1F1D2B',
				blanco: '#ffffff',
				complementary: '#808080',
				negroPuro: 'rgba(0, 0, 0, 1)'

			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
