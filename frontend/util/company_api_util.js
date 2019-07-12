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
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetch1dData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1d?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetch1wData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5d?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetch1mData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1m?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetch3mData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/3m?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetch1yData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1y?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);

export const fetch5yData = (ticker) => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);


export const fetchStockInfo = ticker => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);
export const fetchBatchStocks =( tickers) => {
    const commatickers = tickers.join(',')
    return(
    $.ajax( {
        method: "get", 
        url: `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${ commatickers}&types=quote,news,chart&range=1m&last=5&token=pk_e2ad3af5721a4d25b06e77544acf3362`
    }))
}