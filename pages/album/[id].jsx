import AlbumInfo from '../../components/album-info';
import Layout from '../../components/layout';
import Wrapper from '../../components/wrapper';
import { fetcher } from '../../network';
import { RELEASES_COUNT, REVALIDATE_PERIOD, Route } from '../../shared/constants';

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
    } = await fetcher(`/${process.env.API_VERSION}/${Route.RELEASES}?limit=${RELEASES_COUNT}`);

    const paths = releases.map(({ id }) => ({
        params: { id }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { id } }) {
    const album = await fetcher(`/${process.env.API_VERSION}/${Route.ALBUMS}/${id}`);

    return {
        props: album,
        revalidate: REVALIDATE_PERIOD
    };
}

export default Album;
