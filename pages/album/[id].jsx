/* eslint-disable react/prop-types */
import { FeatList } from '../../components/common/feat-list';
import { Template } from '../../components/common/template';
import Tracks from '../../components/tracks';
// eslint-disable-next-line no-unused-vars
import { GET_ALBUM, GET_RELEASES, GET_SEVERAL_ALBUMS } from '../../lib/graphql/queries';
import { BuildQueue, client } from '../../shared/qraphql-client';
import { humanizeDate } from '../../shared/utils';

const Album = ({ name, releaseDate, image, artists, tracks }) => {
    const subtitle = (
        <>
            <FeatList artists={artists} />
            {` • `}
            {humanizeDate(releaseDate)}
        </>
    );

    return (
        <Template title={name} subtitle={subtitle} image={image}>
            <Tracks tracks={tracks} />
        </Template>
    );
};

export async function getStaticPaths() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    await BuildQueue.ALBUMS.fill(releases.map(({ id }) => id));

    return {
        paths: releases.map(({ id }) => ({ params: { id } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params: { id } }) {
    // get data from build queue or fetch it
    const {
        getAlbum: {
            name,
            release_date,
            images,
            artists,
            tracks: { items }
        }
    } =
        BuildQueue.ALBUMS.data ||
        (await client.request(GET_ALBUM, {
            id
        }));

    return {
        props: {
            id,
            name,
            releaseDate: release_date,
            // Mid quality image 300x300
            image: images[1].url,
            artists,
            tracks: items
        }
    };
}

export default Album;
