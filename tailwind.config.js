/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
    colors: {
			primary: '#F0C74C', 
			secondary: '#00518F',
			tertiary: '#0F314D',
			complementaryOne: '#F9FBFB',
			complementaryTwo: '#EFF3F6',
			complementaryThree: '#F8C300',
			disabled: '#C7DBEA',
			// complementaryFour: '#14132A',
			textColorOne: '#3A464F',
			textColorTwo: '#54626C',
			footerOne: '#202124',

			rojoBase: '#9E1D1F',
			blanco: '#FFFFFF',
			negro: 'rgba(58, 70, 79, 1)',
			blancoTransparente: 'rgba(255, 255, 255, 0.5)',
			negroTransparente: 'rgba(0, 0, 0, 0.25)',
			transparente: 'transparent',
			azulGris: 'rgba(84, 98, 108, 1)',
			gris: 'rgba(84, 98, 108, 0.05)',
			grisTenue: 'rgba(84, 98, 108, 0.5)',
			grisBordeFormulario: 'rgba(33, 34, 19, 0.1)',
			negroPuro: 'rgba(0, 0, 0, 1)',
			grisDos: '#C7DBEA',
		},
	},
	plugins: [],
};
