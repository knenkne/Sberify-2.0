require('dotenv').config();

module.exports = {
    env: {
        BASE_URL: process.env.BASE_URL,
        CLIENT_SECRET: process.env.CLIENT_SECRET,
        TOKEN_URL: process.env.TOKEN_URL,
        API_URL: process.env.API_URL
    }
};
