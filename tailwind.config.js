/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'link-color': '#545454',
            'text-color': '#000',
            'white-color': '#fff',
            'bg-color': '#F8F8FA',
            'product-main-color': '#252525',
            'product-brand-color': '#494949',
            'product-sales-color': '#A5A5A5',
            'product-cart-color': '#787878',
            'product-tips-color': '#A3A3A3',
        },
        extend: {},
    },
    plugins: [],
}
