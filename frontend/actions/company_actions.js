import * as CompanyApiUtils from '../util/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_1D_STOCKS = "RECEIVE_1D_STOCKS";
export const RECEIVE_1W_STOCKS = "RECEIVE_1W_STOCKS";
export const RECEIVE_1M_STOCKS = "RECEIVE_1M_STOCKS";
export const RECEIVE_3M_STOCKS = "RECEIVE_3M_STOCKS";
export const RECEIVE_1Y_STOCKS = "RECEIVE_1Y_STOCKS";
export const RECEIVE_5Y_STOCKS = "RECEIVE_5Y_STOCKS";

export const RECEIVE_STOCK_INFO = "RECEIVE_STOCK_INFO";
export const RECEIVE_MULTI_STOCKS = "RECEIVE_MULTI_STOCKS";


const receiveCompanies = (companies)=> ({
    type: RECEIVE_COMPANIES,
    companies
})
const receiveCompany = ( company ) =>({
    type: RECEIVE_COMPANY,
    company
})
const receiveStock = (ticker,stock) =>({
    type: RECEIVE_STOCK,
    ticker,
    stock
})

const receiveStocks = (ticker, stocks) => ({
    type: RECEIVE_STOCKS, 
    ticker, 
    stocks
})
// const receive1wStocks = (ticker, stocks) => ({
//     type: RECEIVE_STOCKS, 
//     ticker, 
//     stocks
// })
// const receive3mStocks = (ticker, stocks) => ({
//     type: RECEIVE_STOCKS, 
//     ticker, 
//     stocks
// })
// const receive1yStocks = (ticker, stocks) => ({
//     type: RECEIVE_STOCKS, 
//     ticker, 
//     stocks
// })
// const receive5yStocks = (ticker, stocks) => ({
//     type: RECEIVE_STOCKS, 
//     ticker, 
//     stocks
// })
const receiveStockInfo = (ticker, data)=>({
    type: RECEIVE_STOCK_INFO,
    ticker,
    data
})
const receiveMulti1MStocks = (payload)=> ({
    type: RECEIVE_MULTI_STOCKS,
    payload
})

export const fetchCompanies = () => dispatch => (
    CompanyApiUtils.fetchCompanies()
        .then( ( companies ) => dispatch(receiveCompanies(companies)))
);
export const fetchCompany = (ticker) => dispatch => (
    CompanyApiUtils.fetchCompany(ticker)
        .then( ( company ) => dispatch(receiveCompany(company)))
);

export const fetchStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetchDailyData(ticker)
    .then((stock)=> dispatch(receiveStock(ticker, stock)))
);
export const fetch1mStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch1mData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);
export const fetch1dStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch1dData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);
export const fetch1wStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch1wData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);
export const fetch3mStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch3mData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);
export const fetch1yStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch1yData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);
export const fetch5yStock = (ticker) => dispatch =>(
    CompanyApiUtils.fetch5yData(ticker)
    .then((stocks)=> dispatch(receiveStocks(ticker, stocks)))
);

export const fetchStockInfo = ticker => dispatch => (
    CompanyApiUtils.fetchStockInfo( ticker )
        .then( data => dispatch( receiveStockInfo( ticker, data ) ) )
);

export const fetchBatchStocks = tickers => dispatch=> (
    CompanyApiUtils.fetchBatchStocks(tickers)
        .then( payload => dispatch( receiveMulti1MStocks(payload)))
)