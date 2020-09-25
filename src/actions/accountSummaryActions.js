export const ADD_INCOME = "ADD_INCOME";

export const addIncome = (amount) => {
  return {
    type: "ADD_INCOME",
    amount,
  };
};
