export const postWatchlist = (ticker)=> ({
    method: "post",
    url: `/api/watchlists`,
    ticker: ticker
})
export const getWatchlists = (user)=> ({
    method: "get",
    url: `/api/users/${user.id}/watchlists`,

})
export const deleteWatchlists = (user, ticker)=> ({
    method: "delete",
    url: `/api/users/${user.id}/watchlists`,

})