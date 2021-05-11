import { combineReducers } from "redux";
import SessionReducer from "./session";
import entitiesReducer from "./entities_reducer";
const RootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
});

export default RootReducer;
