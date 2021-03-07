import Player from '../../components/player';
import { fetcher } from '../../network';

const Track = (props) => {
    return <Player {...props} />;
};

export const getServerSideProps = async (ctx) => {
    const {
        params: { id }
    } = ctx;

    const { name, album, artists, preview_url } = await fetcher(`/v1/tracks/${id}`);

    return {
        props: {
            name,
            image: album.images[0].url,
            artist: artists[0].name,
            src: preview_url
        }
    };
};

export default Track;
