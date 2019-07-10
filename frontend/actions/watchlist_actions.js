import * as WatchListUtil from '../util/watchlist_api_util';

export const POST_WATCHLIST = "POST_WATCHLIST";
export const GET_WATCHLISTS = "GET_WATCHLISTS";
export const DELETE_WATCHLIST = "DELETE_WATCHLIST"
const postWatchlist = (watchlist) => ({
        type: POST_WATCHLIST,
        watchlist
});

const getWatchlists = (watchlists) => ({
    type: GET_WATCHLISTS,
    watchlists
});
const deleteWatchlist = () => ({
    type: DELETE_WATCHLIST,

});
export const createWatchlist = (ticker) => dispatch => {
    return(
    WatchListUtil.postWatchlist(ticker)
    .then((watchlist)=> dispatch(postWatchlist(watchlist))))
};

export const fetchWatchlists = () => dispatch => {
    return(
    WatchListUtil.getWatchlists( )
    .then( ( watchlists ) => dispatch( getWatchlists( watchlists ) ) ) )
};
export const removeWatchlist = (ticker) => dispatch => (
    WatchListUtil.deleteWatchlist(ticker)
    .then(()=> dispatch(deleteWatchlist()))
);