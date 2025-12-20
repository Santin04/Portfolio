/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#0d0d0d",
                primary: "#4f46e5"
            }
        }
    },
    plugins: []
};
