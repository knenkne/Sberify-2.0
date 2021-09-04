import { PAUSE_TRACK, PLAY_TRACK, SET_CURRENT_TRACK } from './types';

export const setCurrentTrack = (track) => ({
    type: SET_CURRENT_TRACK,
    payload: track
});

export const playTrack = () => ({
    type: PLAY_TRACK
});

export const pauseTrack = () => ({
    type: PAUSE_TRACK
});
