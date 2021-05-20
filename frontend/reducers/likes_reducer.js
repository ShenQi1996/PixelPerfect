import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE,
} from "../actions/like_action";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      console.log("I am in the like reducer");
      console.log(action.likes);
      return action.likes;
    case RECEIVE_LIKE:
      return Object.assign({}, state, {
        [action.id]: {
          id: action.id,
          userId: action.userId,
          pictureId: action.pictureId,
        },
      });
    case REMOVE_LIKE:
      const nextState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;
    default:
      return state;
  }
};

export default likesReducer;
