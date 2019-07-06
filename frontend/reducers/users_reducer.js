import { RECEIVE_CURRENT_USER, RECEIVE_USER_INFO, RECEIVE_USER_WATCHLIST } from '../actions/session_actions';


export const usersReducer = (state ={}, action)=>{
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = {curretUserId: action.user.id}
      return newState;
    case RECEIVE_USER_INFO:
      return newState = { [action.info.id]: action.info };
    case RECEIVE_USER_WATCHLIST:
      return newState = { [action.data.id]: action.payload };
    default:
      return state;
  }
};