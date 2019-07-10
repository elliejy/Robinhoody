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

export const fetch5yData = (ticker) => (
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
export const fetchBatchStocks =( tickers) => {
    const commatickers = tickers.join(',')
    return(
    $.ajax( {
        method: "get", 
        url: `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${ commatickers}&types=quote,news,chart&range=1m&last=5&token=Tpk_a8dfb5b5d8cc45589e011267f749a13b`
    }))
}