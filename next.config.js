const dotenv = require('dotenv');
// const bundleAnalyzer = require('@next/bundle-analyzer');

dotenv.config();
module.exports = {
    swcMinify: true,
    experiments: {
        topLevelAwait: true
    },
    env: {
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        TOKEN_URL: process.env.TOKEN_URL,
        API_URL: process.env.API_URL,
        API_VERSION: process.env.API_VERSION
    },
    webpack: (config) => {
        config.experiments = { topLevelAwait: true, layers: true };

        Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat'
        });
        return config;
    }
};

// TODO: prod mode
// // bundleAnalyzer()(
//     {
//     env: {
//         BASE_URL: process.env.BASE_URL,
//         CLIENT_SECRET: process.env.CLIENT_SECRET,
//         TOKEN_URL: process.env.TOKEN_URL,
//         API_URL: process.env.API_URL
//     }
// }
// );
