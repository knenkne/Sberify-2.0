import AlbumInfo from '../../components/album-info';
import Layout from '../../components/layout';
import Wrapper from '../../components/wrapper';
import { fetcher } from '../../network';

// TODO: extract here from albuminfo component
const Album = (props) => (
    // eslint-disable-next-line react/prop-types
    <Layout title={props.name}>
        <Wrapper shadeless>
            <AlbumInfo {...props} />
        </Wrapper>
    </Layout>
);

export async function getStaticPaths() {
    const {
        albums: { items: releases }
    } = await fetcher('/v1/browse/new-releases?limit=50');

    const paths = releases.map(({ id }) => ({
        params: { id }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { id } }) {
    const album = await fetcher(`/v1/albums/${id}`);

    return {
        props: album
    };
}

export default Album;
