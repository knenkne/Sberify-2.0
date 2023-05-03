import { arrayMove } from '@dnd-kit/sortable';
import { useCallback, useEffect, useState } from 'react';

import {
    DEFAULT_TRACK_DURATION,
    DEFAULT_VOLUME,
    intersect,
    shuffle
} from '../../../shared/constants';

let keyDowned = false;

const usePlayer = ({ audioRef, tracks: initialTracks }) => {
    const [tracks, setTracks] = useState(initialTracks);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;

        isPlaying ? audio.pause() : audio.play();
        setIsPlaying(!isPlaying);
    }, [audioRef, isPlaying]);

    const toggleShuffle = () => {
        const [currentTrack, ...nextTracks] = tracks;

        setTracks([
            currentTrack,
            ...(isShuffling ? intersect(initialTracks, nextTracks) : shuffle(nextTracks))
        ]);
        setIsShuffling(!isShuffling);
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
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

    const reorder = (active, over) => {
        const [currentTrack] = tracks;
        // If track is already playing
        if (currentTrack.id === active.id) {
            return;
        }
        const activeIndex = tracks.findIndex((track) => track.id === active.id);
        const overIndex = tracks.findIndex((track) => track.id === over.id);
        setTracks(arrayMove(tracks, activeIndex, overIndex));
    };

    useEffect(() => {
        const audio = audioRef.current;
        const [currentTrack, ...nextTracks] = tracks;

        if (!audio) {
            return;
        }

        if (!currentTrack.src) {
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

            isLooping ? audio.play() : setTracks(nextTracks);
        };

        if (audio.src !== currentTrack.src) {
            audio.src = currentTrack.src;
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
    }, [audioRef, tracks, isPlaying, isLooping]);

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

    const state = {
        isPlaying,
        isLooping,
        isShuffling,
        time,
        duration,
        tracks
    };
    const controls = { togglePlay, toggleLoop, toggleShuffle, rewind, reorder };

    return { state, controls };
};

export { usePlayer };
