import React from "react";
import "./Start.css";
import IncomeSummary from "../incomeSummary/IncomeSummary";
import ExpenseSummary from "../expenseSummary/ExpenseSummary";
import Balance from "../balance/Balance";
import Graphic from "../graphics/Graphic";

const Start = (props) => {
  return (
    <section id="summary">
      <div className="moneySummary">
        <IncomeSummary income={props.income} />
        <ExpenseSummary expense={props.expense} />
        <Balance balance={props.balance} />
      </div>
      <div className="graphic">
        <Graphic income={props.income} expense={props.expense} />
      </div>
    </section>
  );
};

export default Start;
