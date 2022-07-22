// eslint-disable-next-line @typescript-eslint/no-var-requires
const { COLOR, FONT_SIZE } = require('./src/DesignSystem/');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}'],
    theme: {
        extend: {
            colors: COLOR,
            fontSize: Object.keys(FONT_SIZE).reduce((accumulator, key) => {
                return {
                    ...accumulator,
                    [key]: [`${FONT_SIZE[key][0]}px`, `${FONT_SIZE[key][1]}px`] // change format from number to string Ex: 12 => "12px"
                };
            }, {})
        }
    },
    plugins: []
};