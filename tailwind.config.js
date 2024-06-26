/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                colorPrimary: '#e4002b',
                colorExtraPrimary: '#4e73df',
                colorSemiPrimary: '#1d9ce5',
                colorThinPrimary: '#daeeff',
                colorSecondary: '#007bff',
                colorDark: '#181c31',
                colorLight: '#fff',
                colorCcc: '#ccc',
                colorDadada: '#dadada',
                colorWarning: ' #f6c23e',
                colorSuccess: '#1cc88a',
                colorFB: '#345387',
                colorF9: '#f9f9f9',
                colorGreen: '#009688',
                colorPink: '#ff71b6',
            },
            zIndex: {
                '100': '100',
            },
            fontSize: {
                sml: '0.6rem'
            }
        },
    },
    plugins: [],
}