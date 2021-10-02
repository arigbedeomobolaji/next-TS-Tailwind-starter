module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

// If we have other folders such as /components in our structure and you can easily add those folders to the purge array
// purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
