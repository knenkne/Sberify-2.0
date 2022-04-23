/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';

import { Template } from '../../components/common/template';
// TODO: common carousel
import Releases from '../../components/releases';
import Tracks from '../../components/tracks';
import { withLimit } from '../../components/tracks/hoc';
import { GET_ARTIST, GET_RELEASES } from '../../lib/graphql/queries';
import { REVALIDATION_PERIOD } from '../../shared/constants';
import { client, getSeveralAlbums } from '../../shared/qraphql-client';
import { capitalize } from '../../shared/utils';

const Artist = ({ name, image, genres, tracks, albums }) => {
    const { isFallback } = useRouter();

    // TODO: Loaders
    if (isFallback) {
        return <div>Loading...</div>;
    }

    const subtitle = genres.map(capitalize).join(' • ');
    const TracksWithLimit = withLimit(Tracks);

    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <TracksWithLimit tracks={tracks} />
            <Releases releases={albums} className="after:from-[var(--tertiary-BG)] bg-tertiary" />
        </Template>
    );
};

export async function getStaticPaths() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    return {
        paths: [],
        // paths: releases.reduce((acc, { artists }) => {
        //     acc.push(...artists.map(({ id }) => ({ params: { id } })));

        //     return acc;
        // }, []),
        fallback: true
    };
}

// TODO: getStaticProps
export async function getStaticProps({ params: { id } }) {
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
        },
        revalidate: REVALIDATION_PERIOD
    };
}

export default Artist;
