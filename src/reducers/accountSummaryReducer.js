import {
  ADD_INCOME,
  ADD_EXPENSE,
  ADD_INCOME_DETAILS,
  ADD_EXPENSE_DETAILS,
} from "../actions/accountSummaryActions";

const initialState = {
  incomeSummary: 0,
  expenseSummary: 0,
  transactionDetails: [],
};

const accountSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return { ...state, incomeSummary: state.incomeSummary + action.amount };
    case ADD_EXPENSE:
      return { ...state, expenseSummary: state.expenseSummary + action.amount };
    case ADD_INCOME_DETAILS:
      return {
        ...state,
        transactionDetails: [...state.transactionDetails, action.data],
      };
    case ADD_EXPENSE_DETAILS:
      return {
        ...state,
        transactionDetails: [...state.transactionDetails, action.data],
      };
    default:
      return state;
  }
};

export default accountSummaryReducer;
