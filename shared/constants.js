// 3 days revalidation
export const REVALIDATE_PERIOD = 60 * 60 * 24 * 3;
export const RELEASES_COUNT = 50;
export const PLAYLISTS_COUNT = 1;
export const MARKET_COUNTRY = 'US';
export const FEAT_REGEXP = /\(()(feat|ft|with)/;

export const Theme = {
    DARK: 'dark',
    LIGHT: 'light'
};

export const Route = {
    DISCOVER: '/',
    ARTISTS: '/artist',
    ALBUMS: '/album'
};

export const ApiRoute = {
    ALBUMS: 'albums',
    RELEASES: 'browse/new-releases',
    PLAYLISTS: 'browse/featured-playlists'
};

export const nextNprogressOptions = {
    showSpinner: false
};
