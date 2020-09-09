import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";

const AddExpenseButton = (props) => {
  return (
    <button>
      Add Expense <FontAwesomeIcon icon={faDonate} />
    </button>
  );
};

export default AddExpenseButton;
