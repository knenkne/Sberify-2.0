import AlbumInfo from '../../components/album-info';
import Wrapper from '../../components/wrapper';
import { fetcher } from '../../network';

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
    } = await fetcher('/v1/browse/new-releases?limit=50');

    const paths = releases.map(({ id }) => ({
        params: { id }
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params: { id } }) {
    const album = await fetcher(`/v1/albums/${id}`);

    return {
        props: album,
        // Revalidate in 3 days
        revalidate: 60 * 60 * 24 * 3
    };
}

export default Album;
