import React, { Component } from "react";
import "./IncomeForm.css";
import { connect } from "react-redux";
import { addIncome } from "../../actions/accountSummaryActions";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class IncomeForm extends Component {
  state = {
    amount: "",
    category: "Salary",
    date: new Date(),
    description: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = (date) => {
    this.setState({
      date,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addIncome(this.state.amount * 1);

    this.setState({
      amount: "",
      category: "Salary",
      date: new Date(),
      description: "",
    });
  };

  handleFormFieldsReset = (e) => {
    e.preventDefault();
    this.setState({
      amount: "",
      category: "Salary",
      date: new Date(),
      description: "",
    });
  };

  render() {
    return (
      <form>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            id="amount"
            value={this.state.amount || ""}
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
            selected={this.state.date}
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
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <section className="buttons">
          <button onClick={this.handleFormSubmit}>Save</button>
          <button onClick={this.handleFormFieldsReset}>Reset</button>
        </section>
      </form>
    );
  }
}

IncomeForm.propTypes = {
  addIncome: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addIncome };

export default connect(null, mapDispatchToProps)(IncomeForm);
