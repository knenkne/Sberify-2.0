import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';
import useDarkMode from 'use-dark-mode';

import { globalStyles } from '../shared/styles';

// NextNprogress.configure({ showSpinner: false });
// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    useDarkMode();

    const progressOptions = useMemo(() => ({ showSpinner: false }), []);

    return (
        <>
            <NextNprogress color="rgba(0,0,0, 0.8)" options={progressOptions} />
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

export default App;
