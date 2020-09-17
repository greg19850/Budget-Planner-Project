import React, { Component } from "react";
import "./IncomeForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class IncomeForm extends Component {
  state = {
    amount: "",
    category: "Salary",
    startDate: new Date(),
    text: "",
  };

  handleCategoryChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
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
          <select
            id="category"
            value={this.state.category}
            onChange={this.handleCategoryChange}
          >
            <option value="Salary">Salary</option>
            <option value="Loan">Loan</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Date and Time:
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleDateChange}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
          />
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
