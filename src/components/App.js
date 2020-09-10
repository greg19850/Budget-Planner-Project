import React, { Component } from "react";
import "./App.css";
import IncomeSummary from "./summary/IncomeSummary";
import ExpenseSummary from "./summary/ExpenseSummary";
import Balance from "./balance/Balance";
import AddIncomeButton from "./buttons/AddIncomeButton";
import AddExpenseButton from "./buttons/AddExpenseButton";
import AllTransactions from "./transactions/AllTransactions";
import Graphic from "./graphics/Graphic";

class App extends Component {
  state = {
    income: "0.00",
    expense: "0.00",
    balance: "0.00",
  };
  render() {
    const { income, expense, balance } = this.state;

    return (
      <div className="wrapper">
        <section id="summary">
          <div className="moneySummary">
            <IncomeSummary income={income} />
            <ExpenseSummary expense={expense} />
            <Balance balance={balance} />
          </div>
          <div className="graphic">
            <Graphic />
          </div>
        </section>
        <section id="buttons">
          <AddIncomeButton />
          <AddExpenseButton />
        </section>
        <AllTransactions />
      </div>
    );
  }
}

export default App;
