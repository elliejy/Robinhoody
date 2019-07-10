

import {POST_WATCHLIST, GET_WATCHLISTS, DELETE_WATCHLIST} from '../actions/watchlist_actions';

const watchlistsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState= Object.assign({}, state);

    switch(action.type) {
        case POST_WATCHLIST:
            newState[watchlists] = action.watchlist
            return newState;
        case GET_WATCHLISTS:
            newState = action.watchlists
            return newState;
        case DELETE_WATCHLIST:
            newState[watchlists] = undefined
            return newState;
        default:
            return state;
    }
}

export default watchlistsReducer;