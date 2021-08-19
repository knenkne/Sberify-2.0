import Layout from '../../components/layout';
import Wrapper from '../../components/wrapper';
import AlbumInfo from '../../components/album-info';
import { fetcher } from '../../network';

// TODO: extract here from albuminfo component
const Album = (props) => (
    <Layout title={props.name}>
        <Wrapper>
            <AlbumInfo {...props} />
        </Wrapper>
    </Layout>
);

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const album = await fetcher(`/v1/albums/${params.id}`);

    return {
        props: album
    };
}

export default Album;
