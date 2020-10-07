export const ADD_INCOME = "ADD_INCOME";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_INCOME_DETAILS = "ADD_INCOME_DETAILS";
export const ADD_EXPENSE_DETAILS = "ADD_EXPENSE_DETAILS";

export const addIncome = (amount, data) => {
  return {
    type: ADD_INCOME,
    amount,
    data,
  };
};

export const addExpense = (amount, data) => {
  return {
    type: ADD_EXPENSE,
    amount,
    data,
  };
};
