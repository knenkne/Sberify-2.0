/* eslint-disable react/prop-types */
import { Template } from '../../components/common/template';
// TODO: common carousel
import Releases from '../../components/releases';
import Tracks from '../../components/tracks';
import { withLimit } from '../../components/tracks/hoc';
import { GET_ARTIST } from '../../lib/graphql/queries';
import { client } from '../../shared/qraphql-client';
import { capitalize } from '../../shared/utils';

const Artist = ({ name, image, genres, tracks, albums }) => {
    const subtitle = genres.map(capitalize).join(' • ');
    const TracksWithLimit = withLimit(Tracks);

    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <TracksWithLimit tracks={tracks} />
            <Releases releases={albums} className="after:from-[var(--tertiary-BG)] bg-tertiary" />
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