import AlbumInfo from '../../components/album-info';
import Wrapper from '../../components/wrapper';
import { fetcher } from '../../network';
import { ApiRoute, RELEASES_COUNT, REVALIDATE_PERIOD } from '../../shared/constants';

// TODO: extract here from albuminfo component
const Album = (props) => (
    // eslint-disable-next-line react/prop-types
    <Wrapper shadeless>
        <AlbumInfo {...props} />
    </Wrapper>
);

export async function getStaticPaths() {
    const {
        albums: { items: releases }
    } = await fetcher(`/${process.env.API_VERSION}/${ApiRoute.RELEASES}?limit=${RELEASES_COUNT}`);

    const paths = releases.map(({ id }) => ({
        params: { id }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { id } }) {
    const album = await fetcher(`/${process.env.API_VERSION}/${ApiRoute.ALBUMS}/${id}`);

    return {
        props: album,
        revalidate: REVALIDATE_PERIOD
    };
}

export default Album;
