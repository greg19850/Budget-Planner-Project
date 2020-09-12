import React, { Component } from "react";
import "./App.css";
import Menu from "./menu/Menu";
import IncomeSummary from "./incomeSummary/IncomeSummary";
import ExpenseSummary from "./expenseSummary/ExpenseSummary";
import Balance from "./balance/Balance";
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
        <nav>
          <Menu />
        </nav>
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
      </div>
    );
  }
}

export default App;
