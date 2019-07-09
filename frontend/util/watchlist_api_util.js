


export const postWatchlist = (currentUserId, ticker)=> (
    $.ajax({
    method: "post",
    url: `/api/watchlists`,
    ticker})
)
export const getWatchlists = (id)=> (
    $.ajax({
    method: "get",
    url: `/api/watchlists`,
    })
)
export const deleteWatchlist = (id, ticker)=> (
    $.ajax({
    method: "delete",
    url: `/api/users/${id}/watchlists`,
}))

