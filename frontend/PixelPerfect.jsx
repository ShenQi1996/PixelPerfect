import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let oldState = undefined;
  if(window.currentUser){
    oldState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(oldState)
  window.store = store

  ReactDOM.render(<Root store={store}/>, root);
});