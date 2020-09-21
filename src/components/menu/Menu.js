import React from "react";
import "./Menu.css";
import startMenu from "../../img/startMenu.svg";
import incomeMenuIcon from "../../img/incomeMenuIcon.svg";
import expenseMenuIcon from "../../img/expenseMenuIcon.svg";
import wallet from "../../img/wallet.svg";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Start <img src={startMenu} alt="start logo" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/income">
        Add Income <img src={incomeMenuIcon} alt="income logo" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/expense">
        Add Expense <img src={expenseMenuIcon} alt="expense logo" />
      </NavLink>
    </li>
    <li>
      <NavLink to="/transactions">
        Show transactions <img src={wallet} alt="wallet logo" />
      </NavLink>
    </li>
  </ul>
);

export default Menu;
