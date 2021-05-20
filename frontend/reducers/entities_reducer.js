import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import PicturesReducer from "./pictures_reducer";
import likesReducer from "./likes_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: PicturesReducer,
  like: likesReducer,
});

export default entitiesReducer;
