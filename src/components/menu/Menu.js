import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

const Menu = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Start <FontAwesomeIcon icon={faHome} />
      </NavLink>
    </li>
    <li>
      <NavLink to="/income">
        Add Income
        <FontAwesomeIcon icon={faCoins} />
      </NavLink>
    </li>
    <li>
      <NavLink to="/expense">
        Add Expense <FontAwesomeIcon icon={faDonate} />
      </NavLink>
    </li>
    <li>
      <NavLink to="/transactions">
        Show transactions <FontAwesomeIcon icon={faWallet} />
      </NavLink>
    </li>
  </ul>
);

export default Menu;
