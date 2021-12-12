/* eslint-disable react/prop-types */
import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, router, playlist }) => {
    const { pathname } = router;

    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <NextNprogress options={nextNprogressOptions} />
            <Layout index={pathname === '/'} playlist={playlist}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

// App.getInitialProps = async () => {
//     const {
//         data: { playlists }
//     } = await client.query({
//         query: GET_PLAYLISTS
//     });

//     const [{ id }] = playlists;

//     const {
//         data: { tracks }
//     } = await client.query({
//         query: GET_PLAYLIST_TRACKS,
//         variables: { id }
//     });

//     return { playlist: tracks };
// };

export default App;
