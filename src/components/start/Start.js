import React from "react";
import "./Start.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Start = (props) => {
  return (
    <li>
      Start <FontAwesomeIcon icon={faHome} />
    </li>
  );
};

export default Start;
