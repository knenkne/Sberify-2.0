import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';

import Layout from '../components/layout';
import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const progressOptions = useMemo(() => ({ showSpinner: false }), []);
    const { pathname } = useRouter();

    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <NextNprogress options={progressOptions} />
            {globalStyles}
            {/* TODO: enum */}
            <Layout index={pathname === '/'}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
