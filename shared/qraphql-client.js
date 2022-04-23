import { GraphQLClient } from 'graphql-request';

import { GET_SEVERAL_ALBUMS } from '../lib/graphql/queries';

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

// Workaround to not create single requests at build time
class Cache {
    cache = [];

    constructor({ query, chunkSize }) {
        this.query = query;
        this.chunkSize = chunkSize;
    }

    async fill(ids) {
        const chunks = [];

        for (let i = 0; i < ids.length; i += this.chunkSize) {
            const chunk = ids.slice(i, i + this.chunkSize);
            chunks.push(chunk);
        }

        await Promise.all(
            chunks.map((chunk) =>
                client.request(this.query, {
                    ids: chunk.join(',')
                })
            )
        ).then((responses) => {
            this.cache = responses.flatMap(({ getSeveralAlbums: { albums } }) => albums);
        });
    }

    get data() {
        return this.cache.shift();
    }
}

const createCache = (options) => new Cache(options);

export const BuildCache = {
    ALBUMS: createCache({
        query: GET_SEVERAL_ALBUMS,
        chunkSize: 20
    })
};
