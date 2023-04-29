import { useCallback, useEffect, useState } from 'react';

import { DEFAULT_TRACK_DURATION, DEFAULT_VOLUME } from '../../shared/constants';

let keyDowned = false;

const usePlayer = ({ audioRef, src, onEnded = () => void 0 }) => {
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;

        setIsPlaying(!isPlaying);
        isPlaying ? audio.pause() : audio.play();
    }, [audioRef, isPlaying]);

    const toggleLoop = () => {
        setIsLooping(!isLooping);
    };

    const toggleShuffle = () => {
        setIsShuffling(!isShuffling);
    };

    const rewind = (time) => {
        const audio = audioRef.current;

        const minTime = 0;
        const maxTime = audio.duration || DEFAULT_TRACK_DURATION;
        // Prevent overflow
        const preparedTime = Math.min(Math.max(minTime, time), maxTime);

        setTime(preparedTime);
        audio.currentTime = preparedTime;
    };

    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) {
            return;
        }

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

        if (audio.src !== src) {
            audio.src = src;
        }

        audio.volume = DEFAULT_VOLUME;

        audio.addEventListener('loadeddata', handleLoadedData);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('loadeddata', handleLoadedData);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audioRef, src, onEnded, isPlaying, isLooping]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' && !keyDowned) {
                e.preventDefault();
                togglePlay();
                keyDowned = true;
            }
        };

        const handleKeyUp = (e) => {
            if (e.code === 'Space') {
                keyDowned = false;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [togglePlay]);

    const state = { isPlaying, isLooping, isShuffling, time, duration };
    const controls = { togglePlay, toggleLoop, toggleShuffle, rewind };

    return { state, controls };
};

export { usePlayer };
