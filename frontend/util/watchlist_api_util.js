


export const postWatchlist = (ticker)=> (
    $.ajax({
    method: "post",
    url: `/api/watchlists`,
    data: {ticker: ticker}
})
)
export const patchWatchlist = ()=> (
    $.ajax({
    method: "patch",
    url: `/api/watchlists`,
})
)
export const getWatchlists = ()=> (
    $.ajax({
    method: "get",
    url: `/api/watchlists`,
    })
)
export const deleteWatchlist = (watchlistId)=> (
    $.ajax({
    method: "delete",
    url: `/api/watchlists/${ watchlistId}`,
}))


