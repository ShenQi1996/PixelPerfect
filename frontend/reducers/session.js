import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const _nullSession = {
  currentUser: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // console.log(action.type, state);
      return Object.assign({}, { currentUser: action.user });
    case LOGOUT_CURRENT_USER:
      // console.log(action.type, state);
      return _nullSession;
    default:
      return state;
  }
};
