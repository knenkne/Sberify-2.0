import * as types from './types';

export const setTime = (time) => ({
    type: types.SET_TIME,
    payload: time
});

export const setVolume = (volume) => ({
    type: types.SET_VOLUME,
    payload: volume
});
