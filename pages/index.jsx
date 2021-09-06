import Image from 'next/image';
import { getSession } from 'next-auth/client';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';
import banner from '../public/images/banner.jpg';
import { ApiRoute, RELEASES_COUNT, RELEASES_COUNTRY, REVALIDATE_PERIOD } from '../shared/constants';

const Home = ({ releases }) => (
    <>
        <Wrapper>
            <Image
                src={banner}
                alt="Featured: Machine Gun Kelly"
                layout="responsive"
                placeholder="blur"
                priority
            />
        </Wrapper>
        <Releases releases={releases} />
    </>
);

export async function getStaticProps(ctx) {
    const {
        albums: { items: releases }
    } = await fetcher(
        `/${process.env.API_VERSION}/${ApiRoute.RELEASES}?limit=${RELEASES_COUNT}&country=${RELEASES_COUNTRY}`
    );

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

export default Home;
