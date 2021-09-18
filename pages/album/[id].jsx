/* eslint-disable react/prop-types */
import AlbumInfo from '../../components/album-info';
import Wrapper from '../../components/wrapper';
import { initializeApollo } from '../../lib/apollo';
import { GET_ALBUM, GET_RELEASES } from '../../lib/apollo/queries';
// import { graphFetcher } from '../../network';
// import { REVALIDATE_PERIOD } from '../../shared/constants';

// TODO: extract here from albuminfo component
const Album = (props) => (
    // eslint-disable-next-line react/prop-types
    <Wrapper shadeless>
        <AlbumInfo {...props} />
    </Wrapper>
);

export async function getStaticPaths() {
    const apolloClient = initializeApollo();

    const {
        data: { releases }
    } = await apolloClient.query({
        query: GET_RELEASES
    });

    return {
        paths: releases.map(({ id }) => ({ params: { id } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params: { id } }) {
    const apolloClient = initializeApollo();

    const {
        data: { album }
    } = await apolloClient.query({
        query: GET_ALBUM,
        variables: { id }
    });

    return {
        props: album
    };
}

export default Album;
