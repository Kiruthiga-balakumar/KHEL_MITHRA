/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a",
                accent: "#06b6d4",
                brand: "#1e293b"
            }
        }
    },
    plugins: []
};