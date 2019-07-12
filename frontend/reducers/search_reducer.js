import {RECEIVE_RESULT} from "../actions/search_actions";

const searchReducer = (state={}, action)=>{
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type){
        case RECEIVE_RESULT:
            newState = action.results
            return newState;
        default:
            return state
    }
}

export default searchReducer;