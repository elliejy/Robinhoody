import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export const usersReducer = (state ={}, action)=>{
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, { [action.user.id]: action.user } );
    case RECEIVE_USER_INFO:
      return merge( {}, state, { [action.info.id]: action.info } );
    default:
      return state;
  }
};