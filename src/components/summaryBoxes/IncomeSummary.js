import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const IncomeSummary = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={faChartLine} />
      <br />
      Income
      <br />${props.income}
    </div>
  );
};

export default IncomeSummary;
