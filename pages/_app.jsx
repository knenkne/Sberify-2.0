/* eslint-disable react/prop-types */
import '../styles/globals.css';

import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, router }) => {
    const { pathname } = router;

    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <NextNprogress options={nextNprogressOptions} />
            <Layout index={pathname === '/'}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
