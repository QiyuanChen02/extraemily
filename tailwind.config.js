module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				logofont: ["'Shadows Into Light'"],
			},
		},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
