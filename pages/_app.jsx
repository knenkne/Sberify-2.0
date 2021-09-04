import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';

import Layout from '../components/layout';
import { nextNprogressOptions } from '../shared/constants';
import { globalStyles } from '../shared/styles';
import StoreContext from '../store';
import useStore from '../store/use-store';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const { pathname } = useRouter();
    const { currentTrack, paused, setTrack } = useStore();

    return (
        <>
            <NextNprogress options={nextNprogressOptions} />
            {globalStyles}
            <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
                <StoreContext.Provider value={{ currentTrack, paused, setTrack }}>
                    <Layout index={pathname === '/'}>
                        <Component {...pageProps} />
                    </Layout>
                </StoreContext.Provider>
            </ThemeProvider>
        </>
    );
};

export default App;
