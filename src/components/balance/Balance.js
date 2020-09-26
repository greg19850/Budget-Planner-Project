import React from "react";
import "./Balance.css";
import balance from "../../img/balance.svg";

import { useSelector } from "react-redux";

const Balance = () => {
  const income = useSelector((state) => state.accountSummary.incomeSummary);
  const expense = useSelector((state) => state.accountSummary.expenseSummary);
  return (
    <div>
      <img src={balance} alt="balance Logo" />
      <br />
      Balance
      <br />${income - expense}
    </div>
  );
};

export default Balance;
