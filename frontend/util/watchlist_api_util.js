


export const postWatchlist = (ticker)=> (
    $.ajax({
    method: "post",
    url: `/api/watchlists`,
    data: ticker
})
)
export const getWatchlists = (id)=> (
    $.ajax({
    method: "get",
    url: `/api/watchlists`,
    })
)
export const deleteWatchlist = (id)=> (
    $.ajax({
    method: "delete",
    url: `/api/users/${id}/watchlists`,
}))

