import { 
    RECEIVE_COMPANIES, 
    RECEIVE_COMPANY, 
    RECEIVE_STOCK, 
    RECEIVE_STOCKS, 
    RECEIVE_STOCK_INFO,
    RECEIVE_MULTI_STOCKS} from '../actions/company_actions';
import {merge} from 'lodash'

const companiesReducer = (state={}, action) => { 
    Object.freeze(state);
    let newState = Object.assign({},state);
    switch(action.type){
        case RECEIVE_COMPANIES:
            newState.companies = action.companies
            return merge({}, state, newState);
        case RECEIVE_COMPANY:
            newState[action.ticker] = action.ticker
            return merge( {}, state, newState );
        case RECEIVE_STOCK:
            newState[action.ticker.toUpperCase()] = {stock: action.stock}
            return merge( {}, state, newState );
        case RECEIVE_STOCKS:
            newState[action.ticker.toUpperCase()] = {stocks: action.stocks}
            return merge( {}, state, newState );
        case RECEIVE_STOCK_INFO:
            newState[action.ticker.toUpperCase()] = {info: action.data}
            return merge( {}, state, newState );
        case RECEIVE_MULTI_STOCKS:
            newState= action.payload
            return merge( {}, state, newState );
        default:
            return state;
    }
}








export default companiesReducer 