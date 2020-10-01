export const getBalance = (state) => {
  const income = state.accountSummary.incomeSummary;
  const expense = state.accountSummary.expenseSummary;
  return `$${income - expense}`;
};
