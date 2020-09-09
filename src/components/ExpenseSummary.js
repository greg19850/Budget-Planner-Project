import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const ExpenseSummary = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faCartArrowDown} />
      <br />
      Expense
      <br />${props.expense}
    </div>
  );
};

export default ExpenseSummary;
