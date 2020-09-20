const updateBalance = (initialState, action) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return state.balanceSummary + state.incomeSummary;
  }
};

export default updateIncome;
