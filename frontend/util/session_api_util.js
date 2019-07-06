export const login = user => {
  return ( $.ajax( {
    method: 'POST',
    url: 'api/session',
    data: { user: user }
  } ))
}

export const signup = user => {

return(  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  }))
}
export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);


export const fetchUserInfo = user => (
  $.ajax( {
    url: `/api/users/${ user.id }/info`
  } )
);

export const fetchUserWatchlist = user => (
  $.ajax( {
    url: `/api/users/${ user.id }/watchlist`
  } )
);
