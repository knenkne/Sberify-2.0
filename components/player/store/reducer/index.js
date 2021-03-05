import * as types from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.PLAY: {
            return {
                ...state,
                paused: false
            };
        }

        case types.PAUSE: {
            return {
                ...state,
                paused: true
            };
        }

        case types.SET_TIME: {
            return {
                ...state,
                time: action.payload
            };
        }

        case types.SET_VOLUME: {
            return {
                ...state,
                volume: action.payload
            };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
