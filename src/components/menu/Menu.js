import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const Menu = () => (
  <ul>
    <li>
      Start <FontAwesomeIcon icon={faHome} />
    </li>
    <li>
      Add Income <FontAwesomeIcon icon={faCoins} />
    </li>
    <li>
      Add Expense <FontAwesomeIcon icon={faDonate} />
    </li>
    <li>
      Show transactions <FontAwesomeIcon icon={faWallet} />
    </li>
  </ul>
);

export default Menu;

// {<Start />}
// {<AddIncome />}
// {<AddExpense />}
// {<AllTransactions />}
