export const getBalance = (state) => {
  const income = state.accountSummary.incomeSummary;
  const expense = state.accountSummary.expenseSummary;
  return `$${income - expense}`;
};

export const getIncome = (state) => {
  const income = state.accountSummary.incomeSummary;
  return income;
};

export const getExpense = (state) => {
  const expense = state.accountSummary.expenseSummary;
  return expense;
};
