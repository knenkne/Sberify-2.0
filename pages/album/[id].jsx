/* eslint-disable no-unused-vars */
import { fetcher } from '../../network';

const Album = ({ name }) => {
    return <div>{name}</div>;
};

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const album = await fetcher(`/v1/albums/${params.id}`);

    return {
        props: album
    };
}

export default Album;
