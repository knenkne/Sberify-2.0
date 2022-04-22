/* eslint-disable react/prop-types */
import { FeatList } from '../../components/common/feat-list';
import { Template } from '../../components/common/template';
import Tracks from '../../components/tracks';
import { GET_ALBUM, GET_RELEASES } from '../../lib/graphql/queries';
import { REVALIDATION_PERIOD } from '../../shared/constants';
import { client } from '../../shared/qraphql-client';
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

    return {
        paths: releases.map(({ id }) => ({ params: { id } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params: { id } }) {
    const {
        getAlbum: {
            name,
            release_date,
            images,
            artists,
            tracks: { items }
        }
    } = await client.request(GET_ALBUM, {
        id
    });

    return {
        props: {
            id,
            name,
            releaseDate: release_date,
            // Mid quality image 300x300
            image: images[1].url,
            artists,
            tracks: items
        },
        revalidate: REVALIDATION_PERIOD
    };
}

export default Album;
