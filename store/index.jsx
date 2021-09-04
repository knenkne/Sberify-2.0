import { createContext } from 'react';
import { useCallback, useEffect, useReducer } from 'react';

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

    return (
        <PlayerContext.Provider value={{ currentTrack, paused, setTrack }}>
            {children}
        </PlayerContext.Provider>
    );
};

export { PlayerContext, PlayerProvider };
