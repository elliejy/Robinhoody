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

});