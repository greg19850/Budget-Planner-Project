import React from "react";
import "./AddExpense.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

const AddExpense = (props) => {
  return (
    <li>
      Add Income <FontAwesomeIcon icon={faDonate} />
    </li>
  );
};

export default AddExpense;
