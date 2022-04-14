/* eslint-disable react/prop-types */
import AlbumInfo from '../../components/album-info';
import { GET_ALBUM, GET_RELEASES } from '../../lib/graphql/queries';
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
    } = await client.request(GET_RELEASES);

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
    } = await client.request(GET_ALBUM, {
        id
    });

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
