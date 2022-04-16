/* eslint-disable react/prop-types */
import { Template } from '../../components/common/template';
import Tracks from '../../components/tracks';
import { GET_ARTIST } from '../../lib/graphql/queries';
import { capitalize, client } from '../../shared/utils';

const Artist = ({ name, image, genres, tracks }) => {
    const subtitle = genres.map(capitalize).join(' • ');

    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <Tracks tracks={tracks} />
        </Template>
    );
};

export async function getServerSideProps({ params: { id } }) {
    const {
        getArtist: { name, images, genres },
        getArtistTopTracks: { tracks }
    } = await client.request(GET_ARTIST, {
        id
    });

    return {
        props: {
            id,
            name,
            // Mid quality image 300x300
            image: images[1].url,
            genres,
            tracks
        }
    };
}

export default Artist;
