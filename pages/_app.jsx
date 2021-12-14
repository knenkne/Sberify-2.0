/* eslint-disable react/prop-types */
import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client/react';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import client from '../lib/apollo';
import { nextNprogressOptions } from '../shared/constants';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, router }) => {
    const { pathname } = router;

    return (
        <ApolloProvider client={client}>
            <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
                <NextNprogress options={nextNprogressOptions} />
                <Layout index={pathname === '/'}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
