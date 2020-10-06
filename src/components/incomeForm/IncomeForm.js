import React, { Component } from "react";
import "./IncomeForm.css";
import { connect } from "react-redux";
import {
  addIncome,
  addIncomeDetails,
} from "../../actions/accountSummaryActions";
import PropTypes from "prop-types";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class IncomeForm extends Component {
  state = {
    incomeAmount: "",
    incomeCategory: "Salary",
    incomeDate: new Date(),
    incomeDescription: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleDateChange = (incomeDate) => {
    this.setState({
      incomeDate,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addIncome(parseFloat(this.state.incomeAmount));

    this.props.addIncomeDetails(this.state);

    this.setState({
      incomeAmount: "",
      incomeCategory: "Salary",
      incomeDate: new Date(),
      incomeDescription: "",
    });
  };

  handleFormFieldsReset = (e) => {
    e.preventDefault();
    this.setState({
      incomeAmount: "",
      incomeCategory: "Salary",
      incomeDate: new Date(),
      incomeDescription: "",
    });
  };

  render() {
    return (
      <form>
        <label>
          Amount:
          <input
            type="number"
            name="incomeAmount"
            id="amount"
            value={this.state.incomeAmount}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category:
          <select
            id="category"
            name="incomeCategory"
            value={this.state.incomeCategory}
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
            selected={this.state.incomeDate}
            name="incomeDate"
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
            name="incomeDescription"
            value={this.state.incomeDescription}
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
  addIncomeDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = { addIncome, addIncomeDetails };

export default connect(null, mapDispatchToProps)(IncomeForm);
