import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_USER_WATCHLIST = 'RECEIVE_USER_WATCHLIST';

const receiveCurrentUser = user =>  {
  debugger
  return {
  type: RECEIVE_CURRENT_USER,
  user}
} ;

const logoutCurrentUser = () => ( {
  type: LOGOUT_CURRENT_USER
} );

export const receiveErrors = errors =>  {
  return ({type: RECEIVE_ERRORS,
  errors})
} ;
const receiveUserInfo = info => ( {
  type: RECEIVE_USER_INFO,
  info
} );

const receiveUserWatchlist = payload => ( {
  type: RECEIVE_USER_WATCHLIST,
  payload
} )

export const signup = ( user ) => dispatch => (
  SessionApiUtil.signup( user )
    .then( newUser => dispatch( receiveCurrentUser( newUser ) ),
      errors => dispatch( receiveErrors( errors.responseJSON ) ) )
);

export const login = ( user ) => dispatch => {
  return (
  SessionApiUtil.login( user )
    .then( newUser => dispatch( receiveCurrentUser( newUser ) ),
      errors => dispatch( receiveErrors( errors.responseJSON ) ) )
  )
};

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then( () => dispatch( logoutCurrentUser() ) )
);


export const fetchUserInfo = user => dispatch => (
  SessionApiUtil.fetchUserInfo( user )
    .then( info => dispatch( receiveUserInfo( info ) ) )
);

export const fetchUserWatchlist = user => dispatch => (
  SessionApiUtil.fetchUserWatchlist( user )
    .then( data => dispatch( receiveUserWatchlist( data ) ) )
)
