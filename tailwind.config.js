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
                'product-main-color': '#252525',
                'product-brand-color': '#494949',
                'product-sales-color': '#A5A5A5',
                'product-cart-color': '#787878',
                'product-tips-color': '#A3A3A3',
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
