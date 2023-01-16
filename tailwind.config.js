/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'link-color': '#545454',
                'text-color': '#1C1F22',
                'white-color': '#fff',
                'bg-color': '#F8F8FA',
                'product-brand-color': '#94959B',
                'product-sales-color': '#777C91',
                'product-new-price': '#FD4D63',
                'product-cart-color': '#787878',
                'product-tips-color': '#FF4A5F',
                'link-more': '#7A7A7A',
                'slider-btn-bg': 'rgba(246, 247, 249, 0.2)',
                'gray-1': '#333333',
                'main-purple': '#8168F0',
                'main-orange': '#F98026',
                'menu-link': '#494F54',
            },
        },
    },
    plugins: [],
}
