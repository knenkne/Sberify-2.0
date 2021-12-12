import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

import { capitalize } from '../../shared/utils';
import { typeDefs } from './schemas';

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
const { access_token, token_type } = await refreshAccessToken();
console.log(`${token_type} ${access_token}`);
const createApolloClient = () => {
    const restLink = new RestLink({
        uri: `${process.env.API_URL}/${process.env.API_VERSION}/`,
        headers: {
            Authorization: `${token_type} ${access_token}`
        },
        // snake_case -> camelCase
        fieldNameNormalizer: (key) => {
            const parts = key.split('_');

            return parts.shift() + parts.map(capitalize).join('');
        },
        responseTransformer: async (response, typeName) => {
            const data = await response.json();

            // Response patching to graph schema
            switch (typeName) {
                case '[Album]': {
                    const {
                        albums: { items: albums }
                    } = data;

                    return albums;
                }

                case 'Album': {
                    const {
                        tracks: { items }
                    } = data;

                    data.tracks = items;

                    return data;
                }

                case '[Playlist]': {
                    const {
                        playlists: { items: playlists }
                    } = data;

                    return playlists;
                }

                case '[Track]': {
                    const { items } = data;

                    return items.map((item) => item.track);
                }
            }
        }
    });

    return new ApolloClient({
        ssrMode: true,
        cache: new InMemoryCache(),
        link: restLink,
        typeDefs
    });
};

export default createApolloClient();
