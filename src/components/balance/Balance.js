import React from "react";
import "./Balance.css";
import balance from "../../img/balance.svg";

const Balance = (props) => {
  return (
    <div>
      <img src={balance} alt="balance Logo" />
      <br />
      Balance
      <br />${props.balance}
    </div>
  );
};

export default Balance;
