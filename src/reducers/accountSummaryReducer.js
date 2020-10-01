import { ADD_INCOME, ADD_EXPENSE } from "../actions/accountSummaryActions";

const initialState = {
  incomeSummary: 0,
  expenseSummary: 0,
};

const accountSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return { ...state, incomeSummary: state.incomeSummary + action.amount };
    case ADD_EXPENSE:
      return { ...state, expenseSummary: state.expenseSummary + action.amount };
    default:
      return state;
  }
};

export default accountSummaryReducer;
