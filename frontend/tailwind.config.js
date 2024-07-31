/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
	screens: {
		
  
	
		// => @media (max-width: 960px) { ... }
  
		'max-lg': { 'max': '1440px' },
		'max-md': { 
			'max': '960px',
			
		 },
		// => @media (max-width: 1440px) { ... }
		'max-sm': { 'max': '576px' },
		// => @media (max-width: 576px) { ... }
	  },
  },
  plugins: [],
}