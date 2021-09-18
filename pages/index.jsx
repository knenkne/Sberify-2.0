import Image from 'next/image';
import PropTypes from 'prop-types';

import Releases from '../components/releases';
import Wrapper from '../components/wrapper';
import createApolloClient from '../lib/apollo';
import { GET_RELEASES } from '../lib/apollo/queries';
import banner from '../public/images/banner.jpg';

const Home = ({ releases }) => {
    return (
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
