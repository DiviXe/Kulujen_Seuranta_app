import { combineReducers } from "redux";
import transactionReducer from "./Transaction";
export default combineReducers({
  transctions: transactionReducer,
});
