import withDarkMode, { MODE as Mode } from 'next-dark-mode';
import NextNprogress from 'nextjs-progressbar';
import { useMemo } from 'react';

import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    const progressOptions = useMemo(() => ({ showSpinner: false }), []);

    return (
        <>
            <NextNprogress options={progressOptions} />
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

export default withDarkMode(App, { defaultMode: Mode.DARK });
