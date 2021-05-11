import React from "react";
import ReactDOM from "react-dom";
import createStore from './store/store';
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
  const store = createStore(oldState)

  ReactDOM.render(<Root store={store}/>, root);
});