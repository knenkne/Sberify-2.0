import Image from 'next/image';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';
import banner from '../public/images/banner.jpg';

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
    // const { params } = ctx;
    // TODO: Suspense + SWR
    const {
        albums: { items: releases }
    } = await fetcher(`/v1/browse/new-releases?limit=50`);

    return {
        props: {
            releases
        },
        revalidate: 60 * 60 * 24
    };
    // return {
    //     props: {
    //         releases
    //     }
    // };
}

Home.propTypes = {
    releases: PropTypes.array
};

export default Home;
