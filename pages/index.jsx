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
                    alt="Featured: Smth"
                    objectFit="cover"
                    objectPosition="right center"
                    layout="fill"
                    placeholder="blur"
                    priority
                />
            </div>
            <Releases
                unwrapped
                autoplay
                releases={releases}
                className="relative pl-96 after:from-[var(--secondary-BG)] bg-secondary"
            />
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
        // TODO: on-demand revalidation via cron
        revalidate: REVALIDATION_PERIOD
    };
}

Home.propTypes = {
    releases: PropTypes.array
};

export default Home;
