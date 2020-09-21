import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import accountSummaryReducer from "./accountSummaryReducer";
import incomeFormReducer from "./incomeFormReducer";

const rootReducer = combineReducers({
  accountSummary: accountSummaryReducer,
  incomeForm: incomeFormReducer,
  form: formReducer,
});

export default rootReducer;
