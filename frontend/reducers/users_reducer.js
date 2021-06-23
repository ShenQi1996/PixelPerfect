import { RECEIVE_USER } from "../actions/user_action";
const oldState = {user: [],
pictures: []}
const usersReducer = (state = oldState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      // debugger
      return {user: action.user, pictures: action.user.pictures}
    default:
      return state;
  }
};

export default usersReducer;
