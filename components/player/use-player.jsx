import { useEffect, useState } from 'react';

import { DEFAULT_TRACK_DURATION, DEFAULT_VOLUME } from '../../shared/constants';

const usePlayer = (src, onEnded = () => void 0) => {
    const [audio] = useState(typeof window === 'undefined' ? null : new Audio(src));
    const [time, setTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        !isPlaying ? audio.play() : audio.pause();
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
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
            setIsPlaying(isLooping);

            isLooping ? audio.play() : onEnded();
        };

        audio.volume = DEFAULT_VOLUME;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audio, onEnded]);

    const state = { isPlaying, isLooping, isShuffling, time };
    const controls = { togglePlay, toggleLoop, toggleShuffle, rewind };

    return { audio, state, controls };
};

export { usePlayer };
