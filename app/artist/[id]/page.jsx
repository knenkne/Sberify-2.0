/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Template } from '../../../components/common/template';
import Releases from '../../../components/releases';
import { TracksWithLimit } from '../../../components/tracks/hoc/with-limit';
import { GET_ARTIST, GET_RELEASES } from '../../../lib/graphql/queries';
import { REVALIDATION_PERIOD } from '../../../shared/constants';
import { client } from '../../../shared/qraphql-client';
import { capitalize } from '../../../shared/utils';

export default async function Page({ params }) {
    const { name, image, genres, tracks, albums } = await getArtist(params);
    // const { isFallback } = useRouter();

    // if (isFallback) {
    //     return (
    //         <Template isLoading={isFallback}>
    //             <Tracks isLoading={isFallback} />
    //         </Template>
    //     );
    // }

    const subtitle = genres.map(capitalize).join(' • ');
    // TODO:
    // withLimit(Tracks);

    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <TracksWithLimit tracks={tracks} />
            <Releases releases={albums} />
        </Template>
    );
}

export async function generateStaticParams() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    return [];
}

// TODO: getStaticProps
export async function getArtist({ id }) {
    const {
        getArtist: { name, images, genres },
        getArtistTopTracks: { tracks },
        getArtistAlbums: { items: albums }
    } = await client.request(GET_ARTIST, {
        id
    });

    return {
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
    };
}
