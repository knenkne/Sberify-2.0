import { useEffect, useState } from 'react';

import { DEFAULT_TRACK_DURATION, DEFAULT_VOLUME } from '../../shared/constants';

const usePlayer = (src, onEnded = () => void 0) => {
    // TODO: client component?
    const [audio] = useState(typeof window === 'undefined' ? null : new Audio());
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);

        isPlaying ? audio.pause() : audio.play();
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
        if (!src) {
            // End of tracks
            setIsPlaying(false);

            return;
        }

        const handleLoadedData = () => {
            setDuration(audio.duration);

            // Next track autoplay
            if (isPlaying) {
                audio.play();
            }
        };

        const handleTimeUpdate = (e) => {
            const { currentTime } = e.target;
            setTime(currentTime);
        };

        const handleEnded = () => {
            setTime(0);

            isLooping ? audio.play() : onEnded();
        };

        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        if (audio.src !== src) {
            audio.src = src;
        }

        audio.volume = DEFAULT_VOLUME;

        return () => {
            audio.removeEventListener('loadeddata', handleLoadedData);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [src, audio, onEnded, isLooping, isPlaying]);

    const state = { isPlaying, isLooping, isShuffling, time, duration };
    const controls = { togglePlay, toggleLoop, toggleShuffle, rewind };

    return { state, controls };
};

export { usePlayer };
