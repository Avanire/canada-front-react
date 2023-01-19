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
        screens: {
            'xs': '375px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },
    plugins: [],
}
