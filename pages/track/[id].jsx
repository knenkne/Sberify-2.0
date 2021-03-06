import Player from '../../components/player';
import { fetcher } from '../../network';

const Track = (props) => {
    return <Player {...props} />;
};

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    const { name, album, artists, preview_url } = await fetcher(`/v1/tracks/${params.id}`);

    return {
        props: {
            name,
            image: album.images[0].url,
            artist: artists[0].name,
            src: preview_url
        }
    };
}

export default Track;
