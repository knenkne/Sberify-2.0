const plugin = require('tailwindcss/plugin');

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
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
            backgroundColor: {
                primary: 'var(--primary-BG)',
                secondary: 'var(--secondary-BG)',
                tertiary: 'var(--tertiary-BG)',
                nav: 'var(--nav-BG)'
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
            roboto: ['Roboto']
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
