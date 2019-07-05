import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export const usersReducer = (state ={}, action)=>{
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState[action.curretUser.id] = action.user
      return newState;
    default:
      return state;
  }
};