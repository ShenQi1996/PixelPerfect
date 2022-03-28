import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from "../actions/comment_action";

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return Object.assign({}, state, {
        [action.id]: {
          id: action.id,
          userId: action.userId,
          pictureId: action.pictureId,
          username: action.username,
          comment: action.comment,
        },
      });
    case REMOVE_COMMENT:
      const nextState = Object.assign({}, state);
      delete nextState[action.commentId];
      return nextState;
    default:
      return state;
  }
};

export default commentReducer;
