import { GraphQLClient } from 'graphql-request';

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

export const client = new GraphQLClient(process.env.MIDDLE_URL, {
    headers: {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': process.env.MIDDLE_SECRET,
        Authorization: `${token_type} ${access_token}`
    }
});
