/* eslint-disable no-unused-vars */
import { Suspense } from 'react';
import useSWR from 'swr';
import Button from '../components/button';
import Headline from '../components/headline';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import Player from '../components/player';
import Wrapper from '../components/wrapper';
import Releases from '../components/releases';
import { fetcher } from '../network';

import Banner from '../components/banner';

const Home = ({ releases }) => (
    <Layout title="Discover">
        <Banner />
        <Releases releases={releases} />
    </Layout>
);

export async function getStaticProps(ctx) {
    const { params } = ctx;
    // TODO: Suspense + SWR
    const {
        albums: { items: releases }
    } = await fetcher(`/v1/browse/new-releases`);

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

export default Home;
