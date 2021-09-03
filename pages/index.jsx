import Image from 'next/image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';
import banner from '../public/images/banner.jpg';
import { RELEASES_COUNT, REVALIDATE_PERIOD, Route } from '../shared/constants';

const Home = ({ releases }) => (
    <Layout index>
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
    </Layout>
);

export async function getStaticProps() {
    const {
        albums: { items: releases }
    } = await fetcher(`/${process.env.API_VERSION}/${Route.RELEASES}?limit=${RELEASES_COUNT}`);

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
