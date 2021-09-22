import { ApolloClient, InMemoryCache } from '@apollo/client';
import { buildAxiosFetch } from '@lifeomic/axios-fetch';
import { RestLink } from 'apollo-link-rest';

import { capitalize } from '../../shared/utils';
import { axiosApiInstance } from '../axios';
import { typeDefs } from './schemas';

const createApolloClient = () => {
    const restLink = new RestLink({
        uri: `${process.env.API_URL}/${process.env.API_VERSION}/`,
        customFetch: buildAxiosFetch(axiosApiInstance),
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
                        albums: { items: releases }
                    } = data;

                    return releases;
                }

                case 'Album': {
                    const {
                        tracks: { items }
                    } = data;

                    data.tracks = items;
                    return data;
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

export default createApolloClient;
