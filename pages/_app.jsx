/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
import { globalStyles } from '../shared/styles';
import { PlayerProvider } from '../store';
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const { pathname } = useRouter();

    return (
        <>
            <NextNprogress options={nextNprogressOptions} />
            {globalStyles}
            <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
                <PlayerProvider>
                    <Layout index={pathname === '/'}>
                        <Component {...pageProps} />
                    </Layout>
                </PlayerProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
