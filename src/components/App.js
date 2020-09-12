import React, { Component } from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Start from "./start/Start";
import AddIncome from "./addIncome/AddIncome";
import AddExpense from "./addExpense/AddExpense";
import AllTransactions from "./transactions/AllTransactions";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    income: "0.00",
    expense: "0.00",
    balance: "0.00",
  };
  render() {
    const { income, expense, balance } = this.state;

    return (
      <Router>
        <div className="wrapper">
          <nav>
            <Menu />
          </nav>
          <main>
            <Route path="/" exact>
              <Start income={income} expense={expense} balance={balance} />
            </Route>
            <Route path="/income">
              <AddIncome />
            </Route>
            <Route path="/expense">
              <AddExpense />
            </Route>
            <Route path="/transactions">
              <AllTransactions />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
