import React from "react";
import "./AddIncomeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const AddIncomeButton = (props) => {
  return (
    <button>
      Add Income <FontAwesomeIcon icon={faCoins} />
    </button>
  );
};

export default AddIncomeButton;
