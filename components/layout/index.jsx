// import { useQuery } from '@apollo/client';
// import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import Header from './header';
import Sidebar from './sidebar';

// const Sidebar = dynamic(() => import('./sidebar'));

const Layout = ({ children }) => {
    return (
        <>
            <main className="min-h-screen grid grid-cols-layout grid-rows-layout">
                <Header index className="col-span-full row-start-1 row-end-2 px-24" />
                <Sidebar className="col-start-2 col-end-3 row-start-2 row-end-4" />
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
