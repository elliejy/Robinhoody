import * as CompanyApiUtils from '../util/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK_INFO = "RECEIVE_STOCK_INFO";


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
const receiveStockInfo = (ticker, data)=>({
    type: RECEIVE_STOCK_INFO,
    ticker,
    data
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

export const fetchStockInfo = ticker => dispatch => (
    CompanyApiUtils.fetchStockInfo( ticker )
        .then( data => dispatch( receiveStockInfo( ticker, data ) ) )
);

export const fetchAllStockData = ticker => dispatch => {
    const performFetches = () => Promise.all([
        dispatch(fetchStockInfo(ticker)),
        dispatch(fetchStock(ticker))
    ]);


    performFetches().then( stock => dispatch( receiveStock( ticker, stock ) ))
}