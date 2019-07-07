import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import * as Action from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser){
    const {currentUser} = window;
    const {id} = currentUser;
    const preloadedState = {
      entities: {
        users: {
          currentUserId: id
        }
      },
      session:{ currentUserId: id}
    }
    store = configureStore( preloadedState );
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById( 'root' );
  ReactDOM.render(<Root store={store} />, root);
  window.onclick = function ( event ) {
    if ( !event.target.matches( '.dropbtn' ) ) {
      var dropdowns = document.getElementsByClassName( "dropdown-content" );
      var i;
      for ( i = 0; i < dropdowns.length; i++ ) {
        var openDropdown = dropdowns[i];
        if ( openDropdown.classList.contains( 'show' ) ) {
          openDropdown.classList.remove( 'show' );
        }
      }
    }
  }

});