import {
  ADD_INCOME_AMOUNT,
  ADD_INCOME_CATEGORY,
  ADD_INCOME_DATE,
  ADD_INCOME_DESCRIPTION,
} from "../actions/types";

const initialState = {
  incomeAmount: "",
  incomeCategory: "Salary",
  IncomeDate: new Date(),
  IncomeDescription: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME_AMOUNT:
      return ...state;
      default:
        return state
  }
}
