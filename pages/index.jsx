/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import useSWR from 'swr';

import Banner from '../components/banner';
import Button from '../components/button';
import Headline from '../components/headline';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import Player from '../components/player';
import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';

const Home = ({ releases }) => (
    <Layout index>
        <Banner />
        {/* <Releases releases={releases} /> */}
    </Layout>
);

export async function getStaticProps(ctx) {
    const { params } = ctx;
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
