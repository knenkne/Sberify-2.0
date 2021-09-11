import NextImage from 'next/image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Releases from '../components/releases';
import { fetcher } from '../network';
import banner from '../public/images/banner.jpg';
import {
    ApiRoute,
    MARKET_COUNTRY,
    // PLAYLISTS_COUNT,
    RELEASES_COUNT,
    REVALIDATE_PERIOD
} from '../shared/constants';

function Home({ releases }) {
    return (
        <>
            <div className="relative flex-1 -mt-24 overflow-hidden">
                <NextImage
                    src={banner}
                    alt="Featured: Machine Gun Kelly"
                    objectFit="cover"
                    objectPosition="top left"
                    layout="fill"
                    placeholder="blur"
                    priority
                />
            </div>
            <Releases releases={releases} />
        </>
    );
}

export async function getStaticProps() {
    const {
        albums: { items: releases }
    } = await fetcher(
        `/${process.env.API_VERSION}/${ApiRoute.RELEASES}?limit=${RELEASES_COUNT}&country=${MARKET_COUNTRY}`
    );

    // const data = await fetcher(
    //     `/${process.env.API_VERSION}/${ApiRoute.PLAYLISTS}?limit=${PLAYLISTS_COUNT}&country=${MARKET_COUNTRY}`
    // );
    // // const { id } = data.playlists.items[0];
    // const data1 = await fetcher(`/v1/playlists/${id}`);

    return {
        props: {
            releases
        },
        revalidate: REVALIDATE_PERIOD
    };
}

Home.propTypes = {
    releases: PropTypes.array
};

// eslint-disable-next-line react/display-name
Home.withLayout = (page, playlists) => (
    <Layout playlists={playlists} index>
        {page}
    </Layout>
);

export default Home;
