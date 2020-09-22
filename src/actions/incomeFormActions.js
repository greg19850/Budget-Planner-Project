import {
  GET_INCOME_FORM,
  ADD_INCOME_AMOUNT,
  ADD_INCOME_CATEGORY,
  ADD_INCOME_DATE,
  ADD_INCOME_DESCRIPTION,
} from "./types";

export const getIncomeForm = () => {
  return {
    type: GET_INCOME_FORM,
  };
};

export const addIncomeAmount = () => {
  return {
    type: ADD_INCOME_AMOUNT,
  };
};

export const addIncomeCategory = () => {
  return {
    type: ADD_INCOME_CATEGORY,
  };
};
export const addIncomeDate = () => {
  return {
    type: ADD_INCOME_DATE,
  };
};
export const addIncomeDescription = () => {
  return {
    type: ADD_INCOME_DESCRIPTION,
  };
};
