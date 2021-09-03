import { ThemeProvider } from 'next-themes';
import NextNprogress from 'nextjs-progressbar';
import { RecoilRoot } from 'recoil';

import { nextNprogressOptions } from '../shared/constants';
import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    return (
        <ThemeProvider enableSystem={false} defaultTheme="dark" disableTransitionOnChange>
            <NextNprogress options={nextNprogressOptions} />
            {globalStyles}
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </ThemeProvider>
    );
};

export default App;
