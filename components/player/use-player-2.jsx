import { useEffect, useState } from 'react';

import { DEFAULT_TRACK_DURATION } from '../../shared/constants';

const usePlayer = (src) => {
    const [audio] = useState(typeof window !== 'undefined' ? new Audio(src) : null);
    const [time, setTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggle = () => {
        setIsPlaying(!isPlaying);
        !isPlaying ? audio.play() : audio.pause();
    };

    const rewind = (time) => {
        const minTime = 0;
        const maxTime = audio.duration || DEFAULT_TRACK_DURATION;
        // Prevent overflow
        const preparedTime = Math.min(Math.max(minTime, time), maxTime);

        setTime(preparedTime);
        audio.currentTime = preparedTime;
    };

    useEffect(() => {
        const handleTimeUpdate = (e) => {
            const { currentTime } = e.target;
            setTime(currentTime);
        };

        const handleEnded = () => {
            setTime(0);
        };

        audio.volume = 0.1;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio]);

    const state = { isPlaying, time };
    const controls = { toggle, rewind };

    return { audio, state, controls };
};

export { usePlayer };
