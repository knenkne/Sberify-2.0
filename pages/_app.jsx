/* eslint-disable react/prop-types */
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
import { globalStyles } from '../shared/styles';
import { PlayerProvider } from '../store';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    // Absctraction to pass the props to Layout from GSP if necessary
    const withLayout = Component.withLayout ?? ((page) => <Layout>{page}</Layout>);
    const { playlists, ...rest } = pageProps;

    return (
        <>
            <NextNprogress options={nextNprogressOptions} />
            {globalStyles}
            <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
                <PlayerProvider>{withLayout(<Component {...rest} />, playlists)}</PlayerProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
