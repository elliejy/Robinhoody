import * as CompanyApiUtils from '../util/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_STOCK = "RECEIVE_STOCK";
export const RECEIVE_STOCKS = "RECEIVE_STOCKS";
export const RECEIVE_STOCK_INFO = "RECEIVE_STOCK_INFO";


const receiveCompanies = ({
    type: RECEIVE_COMPANIES,
    companies
})
const receiveCompany = ({
    type: RECEIVE_COMPANY,
    company
})
const receiveStock = ({
    type: RECEIVE_STOCK,
    ticker,
    data
})
const receiveStockInfp = ({
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
    .then((data)=> dispatch(receiveStock(ticker, data)))
);

export const fetchStockInfo = ticker => dispatch => (
    StockApiUtil.fetchStockInfo( ticker )
        .then( info => dispatch( receiveStockInfo( ticker, info[ticker] ) ) )
);
