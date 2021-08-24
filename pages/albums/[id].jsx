import PropTypes from 'prop-types';

import Layout from '../../components/layout';
import { fetcher } from '../../network';

const Album = ({ name }) => (
    <Layout title={name}>
        <div>{name}</div>
    </Layout>
);

Album.propTypes = {
    name: PropTypes.string
};

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const album = await fetcher(`/v1/albums/${params.id}`);

    return {
        props: album
    };
}

export default Album;
