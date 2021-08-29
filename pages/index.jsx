import Image from 'next/image';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';
import banner from '../public/images/banner.jpg';

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

export async function getStaticProps() {
    const {
        albums: { items: releases }
    } = await fetcher(`/v1/browse/new-releases?limit=50`);

    return {
        props: {
            releases
        },
        // Revalidate in 3 days
        revalidate: 60 * 60 * 24 * 3
    };
}

Home.propTypes = {
    releases: PropTypes.array
};

export default Home;
