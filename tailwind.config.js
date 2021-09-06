const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            textColor: {
                primary: 'var(--primary-text)',
                secondary: {
                    DEFAULT: 'var(--secondary-text)',
                    hover: 'var(--nav-hover)'
                },
                tertiary: 'var(--nav)'
            },
            backgroundColor: {
                primary: 'var(--primary-BG)',
                secondary: 'var(--secondary-BG)',
                tertiary: 'var(--tertiary-BG)'
            }
        },
        fontFamily: {
            archivo: ['Archivo']
        }
    },
    plugins: [
        plugin(({ addUtilities }) => {
            const newUtilities = {
                '.text-shadow': {
                    'text-shadow': '0 0 1.4px var(--nav)'
                },
                '.shimmer': {
                    'background-image': `url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='140' height='140' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23121212' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%231e1e1e' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23121212' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`
                },
                '.shimmer-light': {
                    'background-image': `url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='140' height='140' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23ffffff' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%23eeeeee' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23ffffff' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`
                }
            };

            addUtilities(newUtilities, ['hover']);
        })
    ]
};
