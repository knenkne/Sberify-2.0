import Layout from '../../components/layout';
import { fetcher } from '../../network';

const Album = ({ name }) => (
    <Layout>
        <div>{name}</div>
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
