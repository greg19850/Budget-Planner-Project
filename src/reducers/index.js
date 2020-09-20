import { combineReducers } from "redux";
import accountSummaryReducer from "./accountSummaryReducer";
import incomeFormReducer from "./incomeFormReducer";

const rootReducer = combineReducers({
  accountSummary: accountSummaryReducer,
  incomeForm: incomeFormReducer,
});

export default rootReducer;
