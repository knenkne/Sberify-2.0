/* eslint-disable react/prop-types */
import '../styles/globals.css';

import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
import { PlayerProvider } from '../store';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const { pathname } = useRouter();

    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <PlayerProvider>
                <NextNprogress options={nextNprogressOptions} />
                <Layout index={pathname === '/'}>
                    <Component {...pageProps} />
                </Layout>
            </PlayerProvider>
        </ThemeProvider>
    );
};

export default App;
