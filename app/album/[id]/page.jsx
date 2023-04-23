/* eslint-disable react/prop-types */
import { FeatList } from '../../../components/common/feat-list';
import { Template } from '../../../components/common/template';
import Tracks from '../../../components/tracks';
// eslint-disable-next-line no-unused-vars
import { GET_ALBUM, GET_RELEASES, GET_SEVERAL_ALBUMS } from '../../../lib/graphql/queries';
import { BuildQueue, getClient } from '../../../shared/qraphql-client';
import { humanizeDate } from '../../../shared/utils';

export default async function Page({ params }) {
    const { name, releaseDate, image, artists, tracks } = await getAlbum(params);

    const subtitle = (
        <>
            <FeatList artists={artists} />
            {` • `}
            {humanizeDate(releaseDate)}
        </>
    );

    return (
        <Template title={name} subtitle={subtitle} image={image} alt={name}>
            <Tracks tracks={tracks} />
        </Template>
    );
}

export async function generateStaticParams() {
    const client = await getClient();
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    await BuildQueue.ALBUMS.fill({ client, ids: releases.map(({ id }) => id) });

    return releases.map(({ id }) => ({ id }));
}

async function getAlbum({ id }) {
    try {
        const client = await getClient();
        const {
            getAlbum: {
                name,
                release_date,
                images,
                artists,
                tracks: { items }
            }
        } =
            BuildQueue.ALBUMS.getData(id) ||
            (await client.request(GET_ALBUM, {
                id
            }));

        return {
            id,
            name,
            releaseDate: release_date,
            // Mid quality image 300x300
            image: images[1].url,
            artists,
            tracks: items
        };
    } catch ({ response }) {
        const { error, status } = response;

        console.error(error);

        switch (status) {
            case 404: {
                return {
                    notFound: true
                };
            }
        }
    }
}
