import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

import { capitalize } from '../../shared/utils';
import { typeDefs } from './schemas';

let accessToken = null;

const refreshAccessToken = () =>
    fetch(process.env.TOKEN_URL, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${process.env.CLIENT_SECRET}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    }).then((res) => res.json());

const getAccessToken = async () => {
    if (accessToken) {
        return accessToken;
    }

    const { token_type, access_token } = await refreshAccessToken();
    accessToken = `${token_type} ${access_token}`;

    return accessToken;
};

const createApolloClient = async () => {
    // When support for configuring gSSP to use Edge Functions lands,
    // We could add that logic to _middleware
    const acessToken = await getAccessToken();

    const restLink = new RestLink({
        uri: `${process.env.API_URL}/${process.env.API_VERSION}/`,
        headers: {
            Authorization: acessToken
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

                    return items
                        .map((item) => item.track)
                        .filter((item) => item.preview_url)
                        .sort((a, b) => a.popularity - b.popularity)
                        .slice(0, 20);
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

export default await createApolloClient();
