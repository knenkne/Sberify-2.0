import Player from '../../components/player';
import { fetcher } from '../../utils';

const Track = (props) => {
    return <Player {...props} />;
};

export async function getServerSideProps({ params }) {
    const { name, artists, preview_url, album } = await fetcher(
        `${process.env.BASE_URL}/api/track/${params.id}`
    );

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
