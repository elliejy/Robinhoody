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
export const fetchStockInfo = ticker => (
    $.ajax( {
        method: "get",
        url: `https://cloud.iexapis.com/stable/stock/${ ticker}/company?token=pk_e2ad3af5721a4d25b06e77544acf3362`
    } )
);