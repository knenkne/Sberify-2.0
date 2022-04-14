/* eslint-disable react/prop-types */
import { gql } from 'graphql-request';

import AlbumInfo from '../../components/album-info';
import { client } from '../../shared/utils';

// TODO: extract here from albuminfo component
const Album = (props) => (
    // eslint-disable-next-line react/prop-types
    <AlbumInfo {...props} />
);

export async function getStaticPaths() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(gql`
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
    `);

    console.log('ааа', releases);
    return {
        paths: releases.map(({ id }) => ({ params: { id } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params: { id } }) {
    const {
        getAlbum: {
            name,
            release_date,
            images,
            artists,
            tracks: { items }
        }
    } = await client.request(gql`
        query Album {
            getAlbum(id: "${id}") {
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
    `);

    return {
        props: {
            name,
            releaseDate: release_date,
            images,
            artists,
            tracks: items
        }
    };
}

export default Album;
