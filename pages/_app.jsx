/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import { Provider as AuthProvider } from 'next-auth/client';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
import { globalStyles } from '../shared/styles';
import { PlayerProvider } from '../store';

const App = ({ Component, pageProps }) => {
    const { pathname } = useRouter();

    return (
        <>
            <NextNprogress options={nextNprogressOptions} />
            {globalStyles}
            <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
                <AuthProvider session={pageProps.session}>
                    <PlayerProvider>
                        <Layout index={pathname === '/'}>
                            <Component {...pageProps} />
                        </Layout>
                    </PlayerProvider>
                </AuthProvider>
            </ThemeProvider>
        </>
    );
};

export default App;
