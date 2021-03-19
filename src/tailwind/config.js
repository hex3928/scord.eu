const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
    'Roboto',
    'sans-serif',
];

module.exports = {
    purge: {
        content: [
            './src/**/*.svelte',
        ],
        enabled: false
    },
    theme: {
        fontFamily: fontFamily,
    },
}
