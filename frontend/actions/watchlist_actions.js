import * as WatchListUtil from '../util/watchlist_api_util';

export const POST_WATCHLIST = "POST_WATCHLIST";
export const GET_WATCHLISTS = "GET_WATCHLISTS";
export const DELETE_WATCHLIST = "DELETE_WATCHLIST"
const postWatchlist = (ticker) => ({
        type: POST_WATCHLIST,
        ticker
});

const getWatchlists = (watchlists) => ({
    type: GET_WATCHLISTS,
    watchlists
});
const deleteWatchlist = () => ({
    type: DELETE_WATCHLIST,

});
export const createWatchlist = (currentUserId, ticker) => dispatch => {
    return(
    WatchListUtil.postWatchlist(currentUserId, ticker)
    .then((ticker)=> dispatch(postWatchlist(ticker))))
};

export const fetchWatchlists = (currentUserId) => dispatch => {
    return(
    WatchListUtil.getWatchlists( currentUserId)
    .then( ( watchlists ) => dispatch( getWatchlists( watchlists ) ) ) )
};
export const removeWatchlist = (ticker) => dispatch => (
    WatchListUtil.deleteWatchlist(ticker)
    .then(()=> dispatch(deleteWatchlist()))
);