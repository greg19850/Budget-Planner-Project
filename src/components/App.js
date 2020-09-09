import React, { Component } from "react";
import "./App.css";
import IncomeSummary from "./IncomeSummary";
import ExpenseSummary from "./ExpenseSummary";
import Balance from "./Balance";
import AddIncomeButton from "./AddIncomeButton";
import AddExpenseButton from "./AddExpenseButton";
import AllTransactions from "./AllTransactions";
import Graphic from "./Graphic";

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
