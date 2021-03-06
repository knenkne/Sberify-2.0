/* eslint-disable no-unused-vars */
import Button from '../components/button';
import Headline from '../components/headline';
import Layout from '../components/layout';
import Paragraph from '../components/paragraph';
import Player from '../components/player';
import Wrapper from '../components/wrapper';
import { fetcher } from '../network';

const titles = ['Explore.', 'Listen.', 'Share.'];

const Home = () => (
    <Layout title="Home">
        <Wrapper>
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
        </Wrapper>
        <Wrapper>
            {/* TODO: Headline small */}
            <Player
                artist="Enter Shikari"
                name="{ The Dreamer’s Hotel }"
                image="https://images.genius.com/45816096f1a4a1403d8d1ea3bb0aaea0.1000x1000x1.jpg"
                src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/d2/31/ef/d231ef51-40b6-4780-2835-b1063239d752/mzaf_17341567205560380620.plus.aac.p.m4a"
            />
        </Wrapper>
    </Layout>
);

export async function getServerSideProps(ctx) {
    const { params } = ctx;
    // TODO: Suspense + SWR
    const { name, album, artists, preview_url } = await fetcher(
        `/v1/browse/new-releases/${params.id}`
    );

    // /v1/browse/featured-playlists

    return {
        props: {}
    };
}

export default Home;
