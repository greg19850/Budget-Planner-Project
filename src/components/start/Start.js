import React from "react";
import "./Start.css";
import IncomeSummary from "../incomeSummary/IncomeSummary";
import ExpenseSummary from "../expenseSummary/ExpenseSummary";
import Balance from "../balance/Balance";
import Graphic from "../graphics/Graphic";

import { useSelector } from "react-redux";

const Start = () => {
  const income = useSelector((state) => state.accountSummary.incomeSummary);
  const expense = useSelector((state) => state.accountSummary.expenseSummary);
  const balance = useSelector((state) => state.accountSummary.balanceSummary);

  return (
    <section id="summary">
      <div className="moneySummary">
        <IncomeSummary income={income} />
        <ExpenseSummary expense={expense} />
        <Balance balance={balance} />
      </div>
      <div className="graphic">
        <Graphic income={income} expense={expense} />
      </div>
    </section>
  );
};
export default Start;
