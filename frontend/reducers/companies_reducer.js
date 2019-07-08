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
            newState[action.ticker] = action.ticker
            return newState;
        case RECEIVE_STOCK_INFO:
            newState[action.ticker]= action.data;
            return newState;
        default:
            return state;
    }
}








export default companiesReducer 