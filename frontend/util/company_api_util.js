export const fetchCompanies = ()=>(
   $.ajax ({
       method: "get",
       url: `/api/companies`
   })
)
export const fetchCompany = (ticker)=>(
   $.ajax ({
       method: "get",
       url: `/api/companies/${ticker}`
   })
)
export const fetchDailyData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tsk_6f506030b36145d69d8d9de043cd9e68`
    } )
);
export const fetch1mData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/1m?token=Tsk_6f506030b36145d69d8d9de043cd9e68`
    } )
);

export const fetc5yData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tsk_6f506030b36145d69d8d9de043cd9e68`
    } )
);


export const fetchStockInfo = ticker => (
    $.ajax( {
        method: "get",
        url: `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=Tpk_a8dfb5b5d8cc45589e011267f749a13b`
    } )
);

export const fetchUserWatchlist = user => (
    $.ajax({
        method: 'get',
        url: `/api/users/${user.id}/watchlist`
    })
)
export const createUserWatchlist = ticker => (
    $.ajax({
        method: 'post',
        url: `/api/users/${user.id}`,
        data: ticker
    })
)
