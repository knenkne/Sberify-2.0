/* eslint-disable no-unused-vars */
import { fetcher } from '../../network';

const Album = (props) => {
    return <div>Album</div>;
};

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const data = await fetcher(`/v1/albums/${params.id}`);

    return {
        props: {}
    };
}

export default Album;
