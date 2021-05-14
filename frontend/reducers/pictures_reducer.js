import { RECEIVE_PICTURE } from "../actions/picture_action";

const PicturesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PICTURE:
      console.log(state);
      console.log(action.type);
      return Object.assign({}, state, { [action.picture.id]: action.picture });
    default:
      return state;
  }
};

export default PicturesReducer;
