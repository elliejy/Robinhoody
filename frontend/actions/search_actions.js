import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_RESULT = "RECEIVE_RESULT";

const receiveResult = (results)=>{
    return({
    type: RECEIVE_RESULT,
    results})
};

export const getSearchResults = str => dispatch =>{
    
    return(
    SearchApiUtil.getSearchResults(str)
    .then((results)=> dispatch(receiveResult(results))))
}