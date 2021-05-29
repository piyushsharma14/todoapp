import { combineReducers } from "redux";
import fetchData from "./fetching";

const rootReducer = combineReducers({
  Fetch: fetchData,
});
export default rootReducer;
