import { GET_SUMMARY, ADD_INCOME, ADD_EXPENSE, UPDATE_BALANCE } from "./types";

export const getSummary = () => {
  return {
    type: GET_SUMMARY,
  };
};

export const addIncome = () => {
  return {
    type: ADD_INCOME,
  };
};

export const addExpense = () => {
  return {
    type: ADD_EXPENSE,
  };
};

export const updateBalance = () => {
  return {
    type: UPDATE_BALANCE,
  };
};
