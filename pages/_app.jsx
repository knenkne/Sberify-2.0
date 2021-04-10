import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';
import useDarkMode from 'use-dark-mode';

import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const { value } = useDarkMode();

    const progressColor = useMemo(() => (value ? 'rgba(255,255,255, 0.8)' : 'rgba(0,0,0, 0.8)'), [
        value
    ]);
    const progressOptions = useMemo(() => ({ showSpinner: false }), []);

    return (
        <>
            {/* TODO: progress w/ theming */}
            <NextNprogress options={progressOptions} />
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

export default App;
