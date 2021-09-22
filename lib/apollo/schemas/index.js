import { gql } from '@apollo/client';

export const typeDefs = gql`
    type Image {
        height: Int
        width: Int
        url: String
    }

    type Artist {
        id: ID
        name: String
    }

    type Track {
        id: ID
        name: String
        previewUrl: String
        artists: [Artist]
    }

    type Album {
        id: ID
        name: String
        release_date: String
        images: [Image]
        artists: [Artist]
        tracks: [Track]
    }
`;
