import { combineReducers } from "redux";
import accountSummaryReduer from "./accountSummaryReducer";

const rootReducer = combineReducers({
  accountSummary: accountSummaryReduer,
});

export default rootReducer;
