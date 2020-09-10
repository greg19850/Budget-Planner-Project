import React from "react";
import "./AllTransactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const AllTransactions = (props) => (
  <>
    <h2>
      <FontAwesomeIcon icon={faWallet} /> Transactions list:
    </h2>
    <ul></ul>
  </>
);

export default AllTransactions;
