import { combineReducers } from "redux";
import accountSummaryReducer from "./accountSummaryReducer";

const rootReducer = combineReducers({
  accountSummary: accountSummaryReducer,
});

export default rootReducer;
