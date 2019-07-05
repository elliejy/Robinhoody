import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


const receiveCurrentUser = user => ( {
  type: RECEIVE_CURRENT_USER,
  user
} );

const logoutCurrentUser = () => ( {
  type: LOGOUT_CURRENT_USER
} );

export const receiveErrors = errors =>  {
  debugger
  return ({type: RECEIVE_ERRORS,
  errors})
} ;

export const signup = ( user ) => dispatch => (
  SessionApiUtil.signup( user )
    .then( newUser => dispatch( receiveCurrentUser( newUser ) ),
      errors => dispatch( receiveErrors( errors.responseJSON ) ) )
);

export const login = ( user ) => dispatch => (
  SessionApiUtil.login( user )
    .then( newUser => dispatch( receiveCurrentUser( newUser ) ),
      errors => dispatch( receiveErrors( errors.responseJSON ) ) )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then( () => dispatch( logoutCurrentUser() ) )
);

