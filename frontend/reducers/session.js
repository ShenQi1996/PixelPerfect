import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const _nullSession = {
  currentUser: null,
  loggedIn: false,
};

const SessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // console.log("I am in the session reducer");
      // console.log(action.type, state);
      // console.log(action);
      // debugger
      return Object.assign(
        {},
        { currentUser: action.user, username: action.user.username, loggedIn: true }
      );
    case LOGOUT_CURRENT_USER:
      // console.log(action.type, state);
      return _nullSession;
    default:
      return state;
  }
};

export default SessionReducer;
