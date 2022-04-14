import { GraphQLClient } from 'graphql-request';

import { FEAT_REGEXP, months } from './constants';

export const capitalize = ([first, ...rest], locale = navigator.language) =>
    first.toLocaleUpperCase(locale) + rest.join('');

export const humanizeDate = (dateISO) => {
    const dateParsed = new Date(dateISO);

    return `${months[dateParsed.getUTCMonth()]} ${dateParsed.getFullYear()}`;
};

// clean name from .feat/.ft/with
export const cleanName = (name = '') => name.split(FEAT_REGEXP).shift().trim();

const refreshAccessToken = () =>
    fetch(process.env.TOKEN_URL, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${process.env.CLIENT_SECRET}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    }).then((res) => res.json());

// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic to _middleware
const { token_type, access_token } = await refreshAccessToken();

console.log(`${token_type} ${access_token}`);

export const client = new GraphQLClient(process.env.MIDDLE_URL, {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.MIDDLE_SECRET,
        Authorization: `${token_type} ${access_token}`
    }
});
