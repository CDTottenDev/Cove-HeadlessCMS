/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",   // Next.js pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Your components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",     // App directory (if using Next.js app router)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
