import { GraphQLClient } from 'graphql-request';

import { GET_SEVERAL_ALBUMS } from '../lib/graphql/queries';

const refreshAccessToken = () =>
    fetch(process.env.TOKEN_URL, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${process.env.CLIENT_SECRET}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials',
        cache: 'no-cache'
    }).then((res) => res.json());

const createClient = () => {
    let client = null;

    return async () => {
        if (!client) {
            const { token_type, access_token } = await refreshAccessToken();
            client = new GraphQLClient(process.env.MIDDLE_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-hasura-admin-secret': process.env.MIDDLE_SECRET,
                    Authorization: `${token_type} ${access_token}`
                },
                fetch
            });
        }

        return client;
    };
};

export const getClient = createClient();
// Workaround to not create single requests at build time
class Queue {
    queue = [];

    constructor({ query, chunkSize }) {
        this.query = query;
        this.chunkSize = chunkSize;
    }

    async fill({ client, ids }) {
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
            this.queue = responses
                .flatMap(({ getSeveralAlbums: { albums } }) => albums)
                .map((album) => ({
                    getAlbum: album
                }));
        });
    }

    // TODO: https://github.com/vercel/next.js/issues/48722
    // shift after fix
    getData(id) {
        return this.queue.find(({ getAlbum }) => getAlbum.id === id);
    }
}

const createQueue = (options) => new Queue(options);

export const BuildQueue = {
    ALBUMS: createQueue({
        query: GET_SEVERAL_ALBUMS,
        chunkSize: 20
    })
};
