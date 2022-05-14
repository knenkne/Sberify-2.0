import { gql } from 'graphql-request';

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
                }
            }
        }
    }
`;

export const GET_ALBUM = gql`
    query Album($id: String!) {
        getAlbum(id: $id) {
            id
            name
            release_date
            images {
                width
                height
                url
            }
            artists {
                id
                name
            }
            tracks {
                items {
                    id
                    name
                    preview_url
                    artists {
                        id
                        name
                    }
                }
            }
        }
    }
`;

export const GET_ARTIST = gql`
    query Artist($id: String!) {
        getArtist(id: $id) {
            id
            name
            genres
            images {
                width
                height
                url
            }
        }
        getArtistTopTracks(id: $id) {
            tracks {
                id
                name
                preview_url
                artists {
                    id
                    name
                }
            }
        }
        getArtistAlbums(id: $id) {
            items {
                id
                name
                release_date
                artists {
                    id
                    name
                }
                images {
                    url
                }
                tracks {
                    items {
                        name
                    }
                }
            }
        }
    }
`;

export const GET_SEVERAL_ARTISTS = gql`
    query Artists($ids: String!) {
        getSeveralArtists(ids: $ids) {
            artists {
                name
            }
        }
    }
`;

export const GET_SEVERAL_ALBUMS = gql`
    query Albums($ids: String!) {
        getSeveralAlbums(ids: $ids) {
            albums {
                id
                name
                release_date
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
                        preview_url
                        artists {
                            id
                            name
                        }
                    }
                }
            }
        }
    }
`;
