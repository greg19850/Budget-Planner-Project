export const ADD_INCOME = "ADD_INCOME";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_INCOME_DETAILS = "ADD_INCOME_DETAILS";
export const ADD_EXPENSE_DETAILS = "ADD_EXPENSE_DETAILS";

export const addIncome = (amount) => {
  return {
    type: ADD_INCOME,
    amount,
  };
};

export const addExpense = (amount) => {
  return {
    type: ADD_EXPENSE,
    amount,
  };
};

export const addIncomeDetails = (data) => {
  return {
    type: ADD_INCOME_DETAILS,
    data,
  };
};

export const addExpenseDetails = (data) => {
  return {
    type: ADD_EXPENSE_DETAILS,
    data,
  };
};
