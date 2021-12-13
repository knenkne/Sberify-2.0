// import { useQuery } from '@apollo/client';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children, title = 'Sberify 2.0', index, playlist }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="min-h-screen grid grid-cols-layout grid-rows-layout">
                <Header index={index} />
                <Sidebar playlist={playlist} />
                {children}
            </main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    gradient: PropTypes.node,
    title: PropTypes.string,
    index: PropTypes.bool,
    playlist: PropTypes.array
};

export default Layout;
