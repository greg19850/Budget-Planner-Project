import { ADD_INCOME } from "../actions/types";

const initialState = {
  incomeSummary: 0,
  expenseSummary: 0,
  balanceSummary: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
      };
    default:
      return state;
  }
}
