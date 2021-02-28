import React, { useEffect, useReducer, useRef } from 'react';

import { DEFAULT_VOLUME } from './constants';
import { pause, play, setTime } from './store/actions';
import reducer from './store/reducer';

const initialState = {
    time: 0,
    duration: 30,
    paused: true
};

const usePlayer = ({ src }) => {
    const ref = useRef(null);
    // TODO: volume
    const [state, dispatch] = useReducer(reducer, initialState);
    const { duration } = state;

    const element = React.createElement('audio', {
        src,
        controls: false,
        ref,
        onPlay: () => dispatch(play()),
        onPause: () => dispatch(pause()),
        onTimeUpdate: () => {
            const audio = ref.current;
            const { currentTime } = audio;

            if (!audio) {
                return;
            }

            dispatch(setTime(currentTime));
        },
        onEnded: () => {
            dispatch(setTime(0));
        }
    });

    const controls = {
        play: () => {
            const audio = ref.current;

            if (!audio) {
                return;
            }

            audio.play();
        },
        pause: () => {
            const audio = ref.current;

            if (!audio) {
                return;
            }

            audio.pause();
        },
        rewind: (time) => {
            const audio = ref.current;

            if (!audio) {
                return;
            }

            audio.currentTime = Math.min(duration, Math.max(0, time));
        }
    };

    useEffect(() => {
        const audio = ref.current;
        audio.volume = DEFAULT_VOLUME;
    }, [src]);

    return { element, state, controls };
};

export default usePlayer;
