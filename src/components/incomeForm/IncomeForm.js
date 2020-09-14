import React, { Component } from "react";
import "./IncomeForm.css";

class IncomeForm extends Component {
  state = {
    amount: "",
    category: "Salary",
  };
  render() {
    return (
      <form>
        <label>
          Enter Amount:
          <input type="text" id="amount" value={this.state.amount} />
        </label>
        <label>
          Category:
          <select id="category" value={this.state.category}>
            <option value="Salary">Salary</option>
            <option value="Loan">Loan</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>Date:</label>
        <label>
          Time:
          <input id="" time type="text" />
        </label>
        <label>
          Description:
          <textarea id="description"></textarea>
        </label>

        <section className="buttons">
          <button>Save</button>
          <button>Cancel</button>
        </section>
      </form>
    );
  }
}

export default IncomeForm;
