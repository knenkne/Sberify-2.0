import { useMemo } from 'react';

import { globalStyles } from '../shared/styles';
// TODO: customizeSwiper modules
// import SwiperCore, { Autoplay, Pagination } from 'swiper';
// SwiperCore.use([Autoplay, Pagination]);

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => {
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
