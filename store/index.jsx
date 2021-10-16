import { createContext } from 'react';
import { useCallback, useReducer } from 'react';

import { pauseTrack, playTrack, setCurrentTrack } from './actions';
import reducer from './reducer';

const PlayerContext = createContext();

const initialState = {
    currentTrack: null,
    paused: true
};

// eslint-disable-next-line react/prop-types
const PlayerProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { currentTrack, paused } = state;

    const setTrack = useCallback(
        (track) => {
            // Play/pause active song
            if (track?.id === currentTrack?.id) {
                paused ? dispatch(playTrack()) : dispatch(pauseTrack());
            }
            // New track init
            else {
                dispatch(setCurrentTrack(track));
            }
        },
        [state, currentTrack, paused]
    );

    const play = useCallback(() => {
        dispatch(playTrack());
    }, []);

    const pause = useCallback(() => {
        dispatch(pauseTrack());
    }, []);

    return (
        <PlayerContext.Provider
            value={{ currentTrack, setTrack, paused, play, pause }}
        >
            {children}
        </PlayerContext.Provider>
    );
};

export { PlayerContext, PlayerProvider };
