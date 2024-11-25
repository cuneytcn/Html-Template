/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				initial: ['Quicksand', 'system-ui'],
				heading: ['Abril Fatface', 'system-ui'],
			},

			animation: {
				spin: 'spin 30s linear infinite',
			},
			keyframes: {
				spin: {
					from: {
						transform: 'rotate(0deg)',
					},
					to: {
						transform: 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [],
};
