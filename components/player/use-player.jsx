import React, { useEffect, useReducer, useRef } from 'react';

import { DEFAULT_VOLUME, VOLUME_RATIO } from './constants';
import { pause, play, setTime, setVolume } from './store/actions';
import reducer from './store/reducer';

const initialState = {
    time: 0,
    duration: 30,
    paused: true,
    volume: DEFAULT_VOLUME
};

const usePlayer = ({ src }) => {
    const ref = useRef(null);
    // TODO: volume
    const [state, dispatch] = useReducer(reducer, initialState);
    const { volume, duration } = state;

    const element = React.createElement('audio', {
        src,
        controls: false,
        ref,
        onPlay: () => dispatch(play()),
        onPause: () => dispatch(pause()),
        onTimeUpdate: () => {
            const audio = ref.current;
            const { currentTime } = audio;

            dispatch(setTime(currentTime));
        },
        onEnded: () => {
            dispatch(setTime(0));
        }
    });

    const controls = {
        play: () => {
            const audio = ref.current;

            audio.play();
        },
        pause: () => {
            const audio = ref.current;

            audio.pause();
        },
        rewind: (time) => {
            const audio = ref.current;

            audio.currentTime = Math.min(duration, Math.max(0, time));
        },
        setVolume: (percent) => {
            dispatch(setVolume(percent / VOLUME_RATIO));
        }
    };

    useEffect(() => {
        const audio = ref.current;

        audio.volume = volume;
    }, [volume]);

    return { element, state, controls };
};

export default usePlayer;
