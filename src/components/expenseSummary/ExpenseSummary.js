import React from "react";
import "./ExpenseSummary.css";
import expense from "../../img/expense.svg";

const ExpenseSummary = (props) => {
  return (
    <div>
      <img src={expense} alt="expense Logo" />
      <br />
      Expense
      <br />${props.expense}
    </div>
  );
};

export default ExpenseSummary;
