// import { useQuery } from '@apollo/client';
// import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import Header from './header';
import Sidebar from './sidebar';

const tracks = [
    {
        id: '7mNL3QEySPKTLJD98NftJB',
        name: '3am',
        preview_url:
            'https://p.scdn.co/mp3-preview/225f0157e2b654c5796aea1502655f6421453c84?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [
            { id: '5he5w2lnU9x7JFhnwcekXX', name: 'Skrillex' },
            { id: '0uzKt8lgkTlxm4OUWiCX3H', name: 'Prentiss' },
            { id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }
        ]
    },
    {
        id: '72HgCBwPcalbwbJ5p0AoLE',
        name: "Don't Dance",
        preview_url:
            'https://p.scdn.co/mp3-preview/598f9d379546b3ba76280f317ef6560fa0d88d5c?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '2VFxYVlUzDQQrf9ZLDXUIn',
        name: "Dear Child (I've Been Dying to Reach You)",
        preview_url:
            'https://p.scdn.co/mp3-preview/7e2dd6d35abb30ed32ffe20403f7d00f2ca004ec?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '4fzFTfi0vqetgu5EN3q6w4',
        name: "You'll Be Fine",
        preview_url:
            'https://p.scdn.co/mp3-preview/ececd9e84852f973508259fb0e05d36033e0acea?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '2dEhwuWWerT5m50dljWmGu',
        name: 'Right Outside (feat. Chino Moreno)',
        preview_url:
            'https://p.scdn.co/mp3-preview/1748f7cce157593212b927bc8de510d1f3506896?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '2NDik5wgjUlOKl7x4nhJYW',
        name: 'Trading Doses',
        preview_url:
            'https://p.scdn.co/mp3-preview/a4d433a2aecb5b1a2d03b7d299555d6de1371f0b?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '40c603vX2YwVDp7tSjtgji',
        name: 'East Coast Winters',
        preview_url:
            'https://p.scdn.co/mp3-preview/4daf1f08dc6c63743a250b7aab5691b4ccfca667?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '1qzHWFG6S1UIjFi4NnL2yn',
        name: 'Center of It All',
        preview_url:
            'https://p.scdn.co/mp3-preview/1ad0135aa45062dc9783afac5e5d547976266f78?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '5cGPQy9Ve0WnLn7sJMHSjS',
        name: 'Slowing Down (Long Time Coming)',
        preview_url:
            'https://p.scdn.co/mp3-preview/99a457d4ad123865b8934357b19dd88ec82009f0?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    },
    {
        id: '55uo07VOaxz3idi6p34Wsa',
        name: "I Don't Want to Die Tonight",
        preview_url:
            'https://p.scdn.co/mp3-preview/f467353dbd2caea9f9fe3ef3508097eddc358175?cid=169f7aea4c204f00ba96ece98b15e24d',
        artists: [{ id: '0hxmHf6CqXsOLWgGXjmr7I', name: 'Anthony Green' }]
    }
];

const Layout = ({ children }) => {
    return (
        <>
            <main className="min-h-screen grid grid-cols-layout grid-rows-layout">
                <Header index className="col-start-4 col-end-5 row-start-1 row-end-2" />
                <Sidebar className="col-start-2 col-end-3 row-start-2 row-end-4" tracks={tracks} />
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
