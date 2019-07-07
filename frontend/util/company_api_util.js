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
        url: `https://api.iextrading.com/1.0/stock/${ ticker }/chart/5y`
    } )
);
export const fetchStockInfo = ticker => (
    $.ajax( {
        url: `https://api.iextrading.com/1.0/stock/market/batch?symbols=${ ticker }&types=quote,company,info`
    } )
);