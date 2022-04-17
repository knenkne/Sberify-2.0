import NextImage from 'next/image';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import { GET_RELEASES } from '../lib/graphql/queries';
import banner from '../public/images/banner.jpg';
import { REVALIDATION_PERIOD } from '../shared/constants';
import { client } from '../shared/qraphql-client';

const Home = ({ releases }) => {
    return (
        <>
            <div className="col-span-full row-span-full">
                <NextImage
                    src={banner}
                    alt="Featured: Machine Gun Kelly"
                    objectFit="cover"
                    objectPosition="right center"
                    layout="fill"
                    placeholder="blur"
                    priority
                />
            </div>
            <Releases releases={releases} />
        </>
    );
};

export async function getStaticProps() {
    const {
        getReleases: {
            albums: { items: releases }
        }
    } = await client.request(GET_RELEASES);

    return {
        props: {
            releases
        },
        revalidate: REVALIDATION_PERIOD
    };
}

Home.propTypes = {
    releases: PropTypes.array
};

export default Home;
