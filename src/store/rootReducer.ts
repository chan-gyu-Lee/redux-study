import { combineReducers } from "redux";
import toDosStore from "./store";

const rootReducer = combineReducers({
  toDos: toDosStore,
});
export default rootReducer;
