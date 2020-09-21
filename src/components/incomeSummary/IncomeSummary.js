import React from "react";
import "./IncomeSummary.css";
import growth from "../../img/Growth.svg";

const IncomeSummary = (props) => {
  return (
    <div>
      <img src={growth} alt="income Logo" />
      <br />
      Income
      <br /> ${props.income}
    </div>
  );
};

export default IncomeSummary;
