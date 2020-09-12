import React from "react";
import "./Menu.css";
import Start from "../start/Start";
import AddIncome from "../addIncome/AddIncome";
import AddExpense from "../addExpense/AddExpense";
import AllTransactions from "../transactions/AllTransactions";

const Menu = () => (
  <ul>
    {<Start />}
    {<AddIncome />}
    {<AddExpense />}
    {<AllTransactions />}
  </ul>
);

export default Menu;
