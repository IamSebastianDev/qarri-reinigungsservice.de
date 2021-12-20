/** @format */

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			open: ['Open sans', 'sans-serif'],
		},
		extend: {
			colors: {
				accent: '#FE5F55',
			},
			height: {
				s20: '20vh',
				s30: '30vh',
				s50: '50vh',
				s65: '65vh',
				s75: '75vh',
			},
			boxShadow: {
				accent: '4px 4px 0px 0px #fe5f55',
				dark: '4px 4px 0px 0px #000',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
