import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";

const Balance = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faBalanceScale} />
      <br />
      Balance
      <br />${props.balance}
    </div>
  );
};

export default Balance;
