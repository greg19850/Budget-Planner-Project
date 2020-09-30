import React from "react";
import "./Balance.css";
import balance from "../../img/balance.svg";
import { useSelector } from "react-redux";
import { getBalance } from "../../selectors/AccountSummarySelectors";

const Balance = () => {
  const budgetBalance = useSelector(getBalance);
  return (
    <div>
      <img src={balance} alt="balance Logo" />
      <br />
      Balance
      <br />
      {budgetBalance}
    </div>
  );
};

export default Balance;
