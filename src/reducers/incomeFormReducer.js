import {
  GET_INCOME_FORM,
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
    case GET_INCOME_FORM:
      return state;
    case ADD_INCOME_AMOUNT:
      return { ...state, incomeAmount: action.payload };
    case ADD_INCOME_CATEGORY:
      return state;
    case ADD_INCOME_DATE:
      return state;
    case ADD_INCOME_DESCRIPTION:
      return state;
    default:
      return state;
  }
}
