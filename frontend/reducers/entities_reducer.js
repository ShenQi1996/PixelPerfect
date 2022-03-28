import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import PicturesReducer from "./pictures_reducer";
import likesReducer from "./likes_reducer";
import commentReducer from "./comments_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: PicturesReducer,
  likes: likesReducer,
  comments: commentReducer,
});

export default entitiesReducer;
