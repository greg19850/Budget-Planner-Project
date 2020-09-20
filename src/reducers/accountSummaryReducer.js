import {
  GET_SUMMARY,
  ADD_INCOME,
  ADD_EXPENSE,
  UPDATE_BALANCE,
} from "../actions/types";

const initialState = {
  incomeSummary: 0,
  expenseSummary: 0,
  balanceSummary: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUMMARY:
      return state;
    case ADD_INCOME:
      return state;
    case ADD_EXPENSE:
      return state;
    case UPDATE_BALANCE:
      return state;
    default:
      return state;
  }
}
