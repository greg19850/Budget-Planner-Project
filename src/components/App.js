import React, { Component } from "react";
import "./App.css";
import Menu from "./menu/Menu";
import Start from "./start/Start";
import AddIncome from "./addIncome/AddIncome";
import AddExpense from "./addExpense/AddExpense";
import AllTransactions from "./transactions/AllTransactions";
import ErrorPage from "./errorPage/ErrorPage";
import Attribute from "./attributes/Attribute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="wrapper">
            <nav>
              <Menu />
            </nav>
            <main>
              <Switch>
                <Route path="/" exact>
                  <Start />
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
                <Route>
                  <ErrorPage />
                </Route>
              </Switch>
            </main>
            <footer>
              <Attribute />
            </footer>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
