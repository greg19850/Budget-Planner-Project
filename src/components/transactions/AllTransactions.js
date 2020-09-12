import React from "react";
import "./AllTransactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const AllTransactions = (props) => (
  <>
    <li>
      Transactions list <FontAwesomeIcon icon={faWallet} />
    </li>
  </>
);

export default AllTransactions;
