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
        album: [Album]
    }

    type Album {
        id: ID
        name: String
        releaseDate: String
        images: [Image]
        artists: [Artist]
        tracks: [Track]
    }

    type Playlist {
        id: ID
        name: String
        description: String
        images: [Image]
    }
`;
