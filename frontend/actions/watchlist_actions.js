import * as WatchListUtil from '../util/watchlist_api_util';

export const POST_WATCHLIST = "POST_WATCHLIST";
export const GET_WATHCLISTS = "GET_WATCHLISTS";
export const DELETE_WATCHLIST = "DELETE_WATCHLIST"
const postWatchlist = (ticker) => ({
        type: POST_WATCHLIST,
        ticker
});

const getWatchlists = (user) => ({
    type: GET_WATHCLISTS,
    user,
    watchlists
});
const deleteWatchlist = () => ({
    type: DELETE_WATCHLIST,

});
export const createWatchlist = ticker => dispatch => (
    WatchListUtil.postWatchlist(ticker)
    .then((ticker)=> dispatch(postWatchlist(ticker)))
);

export const fetchWatchlists = user => dispatch => (
    WatchListUtil.getWatchlists(user)
    .then((watchlists)=> dispatch(getWatchlists(user, watchlists)))
);
export const removeWatchlist = (user, ticker) => dispatch => (
    WatchListUtil.deletetWatchlists(user, ticker)
    .then(()=> dispatch(deleteWatchlists()))
);