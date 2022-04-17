/* eslint-disable react/prop-types */
import { Template } from '../../components/common/template';
import Tracks from '../../components/tracks';
import { GET_ARTIST } from '../../lib/graphql/queries';
import { client } from '../../shared/qraphql-client';
import { capitalize } from '../../shared/utils';

const Artist = ({ name, image, genres, tracks }) => {
    const subtitle = genres.map(capitalize).join(' • ');
    const header = undefined;
    return (
        <Template title={name} subtitle={subtitle} image={image} header={header}>
            <Tracks tracks={tracks} />
        </Template>
    );
};

// TODO: getStaticProps
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
