import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';

import { globalStyles } from '../shared/styles';

const App = ({ Component, pageProps }) => {
    useDarkMode();

    return (
        <>
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.object
};

export default App;
