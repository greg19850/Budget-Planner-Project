export const ADD_INCOME = "ADD_INCOME";
export const ADD_EXPENSE = "ADD_EXPENSE";

export const addIncome = (amount) => {
  return {
    type: "ADD_INCOME",
    amount,
  };
};

export const addExpense = (amount) => {
  return {
    type: "ADD_EXPENSE",
    amount,
  };
};
