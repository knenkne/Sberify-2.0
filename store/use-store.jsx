// import create from 'zustand';
// import { devtools } from 'zustand/middleware';

// export const useStore = create(
//     devtools((set) => ({
//         currentTrack: null,
//         paused: true,
//         setCurrentTrack: (track) => set(() => ({ currentTrack: track })),
//         play: () => set(() => ({ paused: false })),
//         pause: () => set(() => ({ paused: true }))
//     }))
// );

import { useCallback, useEffect, useReducer } from 'react';

import { pauseTrack, playTrack, setCurrentTrack } from './actions';
import reducer from './reducer';

// import { DEFAULT_VOLUME, VOLUME_RATIO } from './constants';
// import { pause, play, setTime, setVolume } from './store/actions';
// import reducer from './store/reducer';

const initialState = {
    currentTrack: null,
    paused: true
};

const useStore = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { currentTrack, paused } = state;

    const setTrack = useCallback(
        (track) => {
            // Play/pause active song
            if (track.id === currentTrack?.id) {
                paused ? dispatch(playTrack()) : dispatch(pauseTrack());
            }
            // New track init
            else {
                dispatch(setCurrentTrack(track));
            }
        },
        [state, currentTrack, paused]
    );

    useEffect(() => {
        if (currentTrack) {
            dispatch(playTrack());
        }
    }, [currentTrack]);

    return { currentTrack, paused, setTrack };
};

export default useStore;
