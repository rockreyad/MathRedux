import { combineReducers } from "redux";
import numberReducer from "./numberReducer";

const reducers = combineReducers({
  number: numberReducer,
});

export default reducers;
