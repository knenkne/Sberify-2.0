import { gql } from 'graphql-request';

import { ApiRoute } from '../../../shared/constants';

export const GET_RELEASES = gql`
    query Releases {
        getReleases {
            albums {
                items {
                    id
                    name
                    artists {
                        id
                        name
                    }
                    images {
                        url
                    }
                    tracks {
                        items {
                            id
                            name
                            artists {
                                id
                                name
                            }
                            previewUrl
                        }
                    }
                }
            }
        }
    }
`;

export const GET_PLAYLISTS = gql`
    query GetPlaylists {
        playlists @rest(type: "[Playlist]", path: "${ApiRoute.PLAYLISTS}?limit=1") {
            id
            name
            images {
                url
            }
        }
    }
`;

export const GET_PLAYLIST_TRACKS = gql`
    query GetPlaylistTracks {
        tracks(id: $id) @rest(type: "[Track]", path: "playlists/{args.id}/tracks") {
            id
            name
            album
            artists
            previewUrl
        }
    }
`;

export const GET_ALBUM = gql`
    query Album($id: String!) {
        getAlbum(id: $id) {
            name
            release_date
            images {
                width
                height
                url
            }
            artists {
                name
            }
            tracks {
                items {
                    id
                    name
                    previewUrl
                    artists {
                        id
                        name
                    }
                }
            }
        }
    }
`;
