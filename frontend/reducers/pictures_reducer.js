import {
  RECEIVE_PICTURE,
  RECEIVE_PICTURES,
  REMOVE_PICTURE,
} from "../actions/picture_action";

const PicturesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PICTURES:
      console.log(state);
      console.log(action.type);
      return action.pictures;
    case RECEIVE_PICTURE:
      console.log(state);
      console.log(action.type);
      return Object.assign({}, state, { [action.picture.id]: action.picture });
    case REMOVE_PICTURE:
      console.log(state);
      console.log(action.type);
      delete nextState[action.pictureId];
      return nextState;
    default:
      return state;
  }
};

export default PicturesReducer;
