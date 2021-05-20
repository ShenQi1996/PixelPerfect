import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store; 
  if(window.currentUser){
    let oldState;
    oldState = {
      session: {currentUser: window.currentUser},
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
    };
    store = configureStore(oldState);
    delete window.currentUser;
  }else{
    store = configureStore()
  }

  window.store = store

  ReactDOM.render(<Root store={store}/>, root);
});