import { gql } from '@apollo/client';

import { ApiRoute, RELEASES_COUNT } from '../../../shared/constants';

export const GET_RELEASES = gql`
    query GetReleases {
        releases @rest(type: "[Album]", path: "${ApiRoute.RELEASES}?limit=${RELEASES_COUNT}") {
            id
            name
            artists
            images {
                url
            }
        }
    }`;

export const GET_ALBUM = gql`
    query GetAlbum($id: ID!) {
        album(id: $id) @rest(type: "Album", path: "${ApiRoute.ALBUMS}/{args.id}") {
            id
            name
            releaseDate
            images { 
                url 
            }
            artists { 
                id 
                name
            }
            tracks { 
                id 
                name 
                artists
                previewUrl
            }
        }
    }
`;
