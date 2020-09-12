import React from "react";
import "./AddIncome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const AddIncome = (props) => {
  return (
    <li>
      Add Income <FontAwesomeIcon icon={faCoins} />
    </li>
  );
};

export default AddIncome;
