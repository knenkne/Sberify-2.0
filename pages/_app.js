import useDarkMode from 'use-dark-mode';

import { globalStyles } from '../shared/styles';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
    useDarkMode();

    return (
        <>
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

export default App;
