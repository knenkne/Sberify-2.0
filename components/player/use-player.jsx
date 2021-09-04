import React, { useEffect, useReducer, useRef } from 'react';

import { DEFAULT_VOLUME, VOLUME_RATIO } from './constants';
import { setTime, setVolume } from './store/actions';
import reducer from './store/reducer';

const initialState = {
    time: 0,
    duration: 30,
    paused: true,
    volume: DEFAULT_VOLUME
};

const usePlayer = ({ src, paused, onEnded }) => {
    const ref = useRef(null);
    // TODO: volume
    // TODO: remove reducer
    const [state, dispatch] = useReducer(reducer, initialState);
    const { volume, duration } = state;

    const element = React.createElement('audio', {
        src,
        controls: false,
        ref,
        onTimeUpdate: () => {
            const audio = ref.current;
            const { currentTime } = audio;

            dispatch(setTime(currentTime));
        },
        onEnded: () => {
            onEnded();
            dispatch(setTime(0));
        }
    });

    const controls = {
        rewind: (time) => {
            const audio = ref.current;

            audio.currentTime = Math.min(duration, Math.max(0, time));
        },
        setVolume: (percent) => {
            // TODO: remove dispatch
            dispatch(setVolume(percent / VOLUME_RATIO));
        }
    };

    useEffect(() => {
        const audio = ref.current;

        src && !paused ? audio.play() : audio.pause();
    }, [src, paused]);

    useEffect(() => {
        const audio = ref.current;

        audio.volume = volume;
    }, [volume]);

    return { element, state, controls };
};

export default usePlayer;
