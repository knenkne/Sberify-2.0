import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';

import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const progressOptions = useMemo(() => ({ showSpinner: false }), []);

    return (
        <>
            {/* TODO: progress w/ theming */}
            <NextNprogress color="rgba(0,0,0, 0.8)" options={progressOptions} />
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

export default App;
