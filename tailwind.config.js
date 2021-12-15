const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            textColor: {
                primary: 'var(--primary-text)',
                secondary: {
                    DEFAULT: 'var(--secondary-text)',
                    hover: 'var(--nav-hover)'
                },
                tertiary: {
                    DEFAULT: 'var(--nav)',
                    hover: 'var(--nav-hover)'
                }
            },
            colors: {
                primary: 'var(--primary-BG)',
                secondary: 'var(--secondary-BG)',
                tertiary: 'var(--tertiary-BG)'
            },
            backgroundColor: {
                primary: 'var(--primary-BG)',
                secondary: 'var(--secondary-BG)',
                tertiary: 'var(--tertiary-BG)',
                nav: 'var(--nav-BG)'
            },
            gridTemplateColumns: {
                // sidebar / content
                layout: '26.5rem 1fr'
            },
            gridTemplateRows: {
                // header / gradient / content / carousel
                layout: '6rem 21rem 1fr 14rem'
            },
            boxShadow: {
                sidebar: 'rgb(18 18 18 / 24%) 0px 1px 2px, rgb(18 18 18 / 60%) 0px 8px 16px'
            }
        },
        gradientColorStops: {
            brand: {
                primary: 'var(--primary-brand)',
                secondary: 'var(--secondary-brand)'
            }
        },
        fontFamily: {
            archivo: ['Archivo'],
            roboto: ['Roboto', 'Segoe UI', 'Open Sans']
        }
    },
    plugins: [
        plugin(({ addUtilities }) => {
            const newUtilities = {
                '.text-shadow': {
                    'text-shadow': '0 0 1.4px var(--nav)'
                },
                '.text-shadow-explicit': {
                    'text-shadow': '0 0 1.4px rgba(255, 255, 255, 0.8)'
                }
            };

            addUtilities(newUtilities, ['hover']);
        })
    ]
};
