import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';
import { RecoilRoot } from 'recoil';

import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const progressOptions = useMemo(() => ({ showSpinner: false }), []);

    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <NextNprogress options={progressOptions} />
            {globalStyles}
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </ThemeProvider>
    );
};

export default App;
