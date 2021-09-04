import { PAUSE_TRACK, PLAY_TRACK, SET_CURRENT_TRACK } from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_TRACK: {
            return {
                ...state,
                currentTrack: action.payload
            };
        }

        case PLAY_TRACK: {
            return {
                ...state,
                paused: false
            };
        }

        case PAUSE_TRACK: {
            return {
                ...state,
                paused: true
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
