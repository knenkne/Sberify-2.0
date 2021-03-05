// import Layout from "../../components/layout"
import Player from '../../components/player';

const Artist = () => {
    // const router = useRouter();
    // const { id } = router.query;

    return (
        // <Layout>
        <Player
            artist="Emarosa"
            name="Givin’ Up"
            image="https://t2.genius.com/unsafe/905x0/https%3A%2F%2Fimages.genius.com%2Faecb57ca74ef8e8e2f87567d2caa47e8.1000x1000x1.jpg"
            src="https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/68/33/6c/68336cc6-d746-b9df-4e7e-88e2c8a741c7/mzaf_7926309813714072221.plus.aac.p.m4a"
        />
        // </Layout>
    );
};

export default Artist;
