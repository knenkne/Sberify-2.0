// 1 day revalidation
export const REVALIDATION_PERIOD = 60 * 60 * 24;
export const RELEASES_COUNT = 50;
export const PLAYLISTS_COUNT = 1;
export const MARKET_COUNTRY = 'US';
// TODO [feat. | ft.]
export const FEAT_REGEXP = /\(()(feat|ft|w|with)/gi;
export const DEFAULT_TRACK_DURATION = 30;
export const DEFAULT_VOLUME = 0.1;

export const Theme = {
    DARK: 'dark',
    LIGHT: 'light'
};

export const Route = {
    DISCOVER: '/',
    ARTISTS: '/artist',
    ALBUMS: '/album'
};

export const progressbarOptions = {
    showSpinner: false
};

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const noop = () => void 0;

export const shuffle = (array) => {
    const shuffled = [...array];

    let currentIndex = shuffled.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex],
            shuffled[currentIndex]
        ];
    }

    return shuffled;
};

export const intersect = (firstArray, secondArray) =>
    firstArray.filter(({ id: firstId }) =>
        secondArray.find(({ id: secondId }) => firstId === secondId)
    );
