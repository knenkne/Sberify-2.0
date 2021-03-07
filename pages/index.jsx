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

const titles = ['Explore.', 'Listen.', 'Share.'];

const Home = ({ releases }) => (
    <Layout title="Home">
        {/* TODO: Banner */}
        <Releases releases={releases} />
        {/* <Wrapper>
            {titles.map((title) => (
                <Headline key={title} title={title} />
            ))}
            <Button filled>Start Exploring</Button>
            <Button>Get a Demo</Button>
            <Paragraph>
                Sberify combines the best music experience with an obsessive focus on things you
                like.
                <br />
                It contains a lot of artists, albums, songs, lyrics & even more.
            </Paragraph>
        </Wrapper> */}
    </Layout>
);

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    // TODO: Suspense + SWR
    const {
        albums: { items: releases }
    } = await fetcher(`/v1/browse/new-releases`);

    return {
        props: {
            releases
        }
    };
}

export default Home;
