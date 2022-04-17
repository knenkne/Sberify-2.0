/* eslint-disable react/prop-types */
import { Template } from '../../components/common/template';
// TODO: common carousel
import Releases from '../../components/releases';
import Tracks from '../../components/tracks';
import { GET_ARTIST } from '../../lib/graphql/queries';
import { client } from '../../shared/qraphql-client';
import { capitalize } from '../../shared/utils';

const Artist = ({ name, image, genres, tracks, albums }) => {
    const subtitle = genres.map(capitalize).join(' • ');
    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <Tracks tracks={tracks} />
            <Releases releases={albums} />
        </Template>
    );
};

// TODO: getStaticProps
export async function getServerSideProps({ params: { id } }) {
    const {
        getArtist: { name, images, genres },
        getArtistTopTracks: { tracks },
        getArtistAlbums: { items: albums }
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
            tracks,
            // Removing albums duplicate
            albums: Object.values(
                albums.reduce((acc, album) => {
                    if (!acc[album.name]) {
                        acc[album.name] = album;
                    }

                    return acc;
                }, {})
            ).flat()
        }
    };
}

export default Artist;
