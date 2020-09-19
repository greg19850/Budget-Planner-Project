import React, { Component } from "react";
import "./IncomeForm.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class IncomeForm extends Component {
  state = {
    amount: "",
    category: "Salary",
    startDate: new Date(),
    description: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

  cancelFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form>
        <label>
          Enter Amount:
          <input
            type="number"
            name="amount"
            id="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category:
          <select
            id="category"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
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
            name="date"
            onChange={this.handleDateChange}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
          />
        </label>
        <label>
          Description:
          <textarea
            id="description"
            name="description"
            value={this.state.text}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <section className="buttons">
          <button onClick={this.handleFormSubmit}>Save</button>
          <button onClick-={this.cancelFormSubmit}>Cancel</button>
        </section>
      </form>
    );
  }
}

export default IncomeForm;
