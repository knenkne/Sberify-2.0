/* eslint-disable no-unused-vars */
import { fetcher } from '../../network';

const Artist = () => {
    return <div>Album</div>;
};

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const data = await fetcher(`/v1/artists/${params.id}`);

    return {
        props: {}
    };
}

export default Artist;
