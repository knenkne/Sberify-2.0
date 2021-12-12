/* eslint-disable react/prop-types */
import AlbumInfo from '../../components/album-info';
import client from '../../lib/apollo';
import { GET_ALBUM, GET_RELEASES } from '../../lib/apollo/queries';

// TODO: extract here from albuminfo component
const Album = (props) => (
    // eslint-disable-next-line react/prop-types
    <AlbumInfo {...props} />
);

export async function getStaticPaths() {
    const {
        data: { releases }
    } = await client.query({
        query: GET_RELEASES
    });

    return {
        paths: releases.map(({ id }) => ({ params: { id } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params: { id } }) {
    const {
        data: { album }
    } = await client.query({
        query: GET_ALBUM,
        variables: { id }
    });

    return {
        props: album
    };
}

export default Album;
