import NextImage from 'next/image';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import createApolloClient from '../lib/apollo';
import { GET_RELEASES } from '../lib/apollo/queries';
import banner from '../public/images/banner.jpg';

const Home = ({ releases }) => {
    return (
        <>
            <div className="relative flex-1 -mt-24 overflow-hidden">
                <NextImage
                    src={banner}
                    alt="Featured: Machine Gun Kelly"
                    objectFit="cover"
                    objectPosition="top left"
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
    const apolloClient = createApolloClient();

    const {
        data: { releases }
    } = await apolloClient.query({
        query: GET_RELEASES
    });

    return {
        props: {
            releases
        }
    };
}

Home.propTypes = {
    releases: PropTypes.array
};

export default Home;
