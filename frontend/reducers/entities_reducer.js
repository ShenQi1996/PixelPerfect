import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import PicturesReducer from "./pictures_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pictures: PicturesReducer,
});

export default entitiesReducer;
