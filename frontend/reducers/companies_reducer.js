import { 
    RECEIVE_COMPANIES, 
    RECEIVE_COMPANY, 
    RECEIVE_STOCK, 
    RECEIVE_STOCKS, 
    RECEIVE_STOCK_INFO} from '../actions/company_actions';


const companiesReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_COMPANIES:
            newState.companies = action.companies
            return newState;
        case RECEIVE_COMPANY:
            newState[action.company.ticker] = action.company
            return newState;
        case RECEIVE_STOCK_INFO:
            nextState[action.ticker]= action.stockInfo.company;
            return newState;
    }
}








export default companiesReducer 