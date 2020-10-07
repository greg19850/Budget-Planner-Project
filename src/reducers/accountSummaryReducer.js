import { ADD_INCOME, ADD_EXPENSE } from "../actions/accountSummaryActions";

const initialState = {
  id: 0,
  incomeSummary: 0,
  expenseSummary: 0,
  transactionDetails: [],
};

const accountSummaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        id: state.id + 1,
        incomeSummary: state.incomeSummary + action.amount,
        transactionDetails: [...state.transactionDetails, action.data],
      };
    case ADD_EXPENSE:
      return {
        ...state,
        id: state.id + 1,
        expenseSummary: state.expenseSummary + action.amount,
        transactionDetails: [...state.transactionDetails, action.data],
      };
    default:
      return state;
  }
};

export default accountSummaryReducer;
